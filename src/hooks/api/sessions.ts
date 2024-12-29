//@ts-nocheck
import { API_ROUTES } from "@app/routes";
import { useFetch } from "./reactQuery";
import { createMap, createMapper, forMember, mapFrom } from "@automapper/core";
import { pojos } from "@automapper/pojos";
import { useMemo } from "react";
import { Movie, SeatTypes, Session, SessionGroup } from "@app/types/movie";
import { MovieDto, MAPPER as MOVIE_MAPPER } from "./movies";
import { groupBy } from "@app/utils";

interface HallLayoutDto {
  rowMargins: number[];
  seatRows: Array<Array<{ type: string; marginLeft: number }>>;
}

interface SessionDto {
  sessionId: number;
  date: string;
  cinemaType: string;
  price: number;
  filmFromSession: MovieDto;
  hallsFk: {
    hallsId: number;
    hallLayout: {
      linkToLayout: HallLayoutDto;
    };
  };
}

const MAPPER = createMapper({
  strategyInitializer: pojos(),
});

createMap<SessionDto, Session>(
  MAPPER,
  "SessionDto",
  "Session",
  forMember(
    (destination) => destination.id,
    mapFrom((source) => source.sessionId)
  ),
  forMember(
    (destination) => destination.datetime,
    mapFrom((source) => new Date(source.date))
  ),
  forMember(
    (destination) => destination.hall,
    mapFrom((source) => source.hallsFk.hallsId)
  ),
  forMember(
    (destination) => destination.format,
    mapFrom((source) => source.cinemaType)
  ),
  forMember(
    (destination) => destination.price,
    mapFrom((source) => source.price)
  ),
  forMember(
    (destination) => destination.layout,
    mapFrom((source) => {
      const layout = source.hallsFk.hallLayout.linkToLayout;
      return layout
        ? {
            rows: layout.rowMargins.map((margin, index) => ({
              margin: margin,
              seats: layout.seatRows[index].map((seat) => ({
                type: ({
                  ["Рокинг"]: SeatTypes.COMMON,
                  ["Лавсит"]: SeatTypes.LOVESEAT,
                  ["VIP"]: SeatTypes.VIP
                })[seat.type],
                marginLeft: seat.marginLeft,
              })),
            })),
          }
        : undefined;
    })
  )
);

export const useGetSessions = () => {
  const { data, isLoading } = useFetch<SessionDto[]>(API_ROUTES.sessions);
  const grouppedSessions = useMemo(() => {
    if (isLoading) return undefined;
    return Object.entries(
      groupBy(data!.filter((session) => !!session.filmFromSession), (session) => session.filmFromSession.filmId)
    ).map(([k, v]) => ({
      movie: MOVIE_MAPPER.map<MovieDto, Movie>(
        v.find((session) => session.filmFromSession.filmId === parseInt(k))?.filmFromSession!,
        "MovieDto",
        "Movie"
      ),
      sessions: MAPPER.mapArray<SessionDto, Session>(
        v,
        "SessionDto",
        "Session"
      ),
    }));
  }, [data, isLoading]);
  return { isLoading, grouppedSessions };
};

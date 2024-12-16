import { API_ROUTES } from "@app/routes";
import { useFetch } from "./reactQuery";
import { createMap, createMapper, forMember, mapFrom } from "@automapper/core";
import { pojos } from "@automapper/pojos";
import { Cinema } from "@app/types/cinema";
import { useMemo } from "react";

interface CinemaDto {
  cinemasId: number;
  address: string;
  name: string;
  type: string;
}

const MAPPER = createMapper({
  strategyInitializer: pojos(),
});

createMap<CinemaDto, Cinema>(
  MAPPER,
  "CinemaDto",
  "Cinema",
  forMember(
    (destination) => destination.id,
    mapFrom((source) => source.cinemasId)
  ),
  forMember(
    (dest) => dest.locationAddress,
    mapFrom((source) => source.address)
  )
);

export const useGetCinemas = () => {
  const { isLoading, data } = useFetch<CinemaDto[]>(
    API_ROUTES.cinemas,
    undefined,
    {
      suspense: true,
      retry: 0,
    }
  );
  const cinemas = useMemo(
    () => (!isLoading) ? MAPPER.mapArray(data!, 'CinemaDto', 'Cinema') : undefined,
    [data, isLoading]
  );
  return { isLoading, cinemas };
};

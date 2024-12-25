import { API_ROUTES } from "@app/routes";
import { useFetch, useLoadMore } from "./reactQuery";
import { createMap, createMapper, forMember, mapFrom } from "@automapper/core";
import { pojos } from "@automapper/pojos";
import { useMemo } from "react";
import { Movie } from "@app/types/movie";

interface MovieDto {
  filmId: number;
  title: string;
  year: number;
  duration: number;
  cover: string;
  ageRestriction: number;
  boxOffice: boolean;
  released: boolean;
  description: string;
  links: Array<{ id: number; link: string }>;
  countries: Array<{ countryName: string; linkPhoto: string }>;
  sessions: Array<{ date: string, timeline: string, cinemaType: string }>;
}

const MAPPER = createMapper({
  strategyInitializer: pojos(),
});

createMap<MovieDto, Movie>(
  MAPPER,
  "MovieDto",
  "Movie",
  forMember(
    (destination) => destination.id,
    mapFrom((source) => source.filmId)
  ),
  forMember(
    (dest) => dest.name,
    mapFrom((source) => source.title)
  ),
  forMember(
    (dest) => dest.description,
    mapFrom((source) => source.description)
  ),
  forMember(
    (dest) => dest.publishYear,
    mapFrom((source) => source.year)
  ),
  forMember(
    (dest) => dest.coverUrl,
    mapFrom((source) => source.cover)
  ),
  forMember(
    (dest) => dest.ageRestriction,
    mapFrom((source) => `${source.ageRestriction}+`)
  ),
  forMember(
    (dest) => dest.released,
    mapFrom((source) => source.released)
  ),
  forMember(
    (dest) => dest.boxOffice,
    mapFrom((source) => source.boxOffice)
  ),
  forMember(
    (dest) => dest.galleryUrls,
    mapFrom((source) => source.links.map((el) => el.link))
  ),
  forMember(
    (dest) => dest.publishCountries,
    mapFrom((source) =>
      source.countries.map((country) => ({
        name: country.countryName,
        iconUrl: country.linkPhoto,
      }))
    )
  )
);

export const useGetMovie = ({ id }: { id: number }) => {
  const { data, isLoading } = useFetch<MovieDto>(`${API_ROUTES.movies}/${id}`);
  const movie = useMemo(
    () =>
      !isLoading
        ? MAPPER.map<MovieDto, Movie>(data!, "MovieDto", "Movie")
        : undefined,
    [data, isLoading]
  );
  return { isLoading, movie };
};

export const useGetMoviesPaging = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useLoadMore<
    MovieDto[]
  >(API_ROUTES.movies);
  const movies = useMemo(
    () =>
      !isLoading
        ? data?.pages.map((page) => ({
            id: page.number,
            data: MAPPER.mapArray<MovieDto, Movie>(
              page.content,
              "MovieDto",
              "Movie"
            ),
          }))
        : undefined,
    [data, isLoading]
  );
  return { isLoading, movies };
};

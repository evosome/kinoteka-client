import { FC } from "react";
import { MovieItemProps } from "./types";
import { MovieCover } from "@components/movies/movie-cover";

const MovieItem: FC<MovieItemProps> = ({ movie }) => {
  return (
    <MovieCover
      withAgeRestriction
      withAnimation
      needOpenMoviePage
      movie={movie}/>
  );
};

export default MovieItem;

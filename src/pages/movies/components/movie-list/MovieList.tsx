import { CircularProgress, Grid2 } from "@mui/material";
import React, { FC, memo } from "react";
import MovieItem from "./MovieItem";
import { MovieListContainer } from "./styles";
import { useGetMoviesPaging } from "@app/hooks/api/movies";
import { MovieListProps } from "./types";

const MovieList: FC<MovieListProps> = ({ showReleased }) => {
  const { movies, isLoading } = useGetMoviesPaging();

  if (isLoading) {
    return (
      <MovieListContainer>
        <CircularProgress />
      </MovieListContainer>
    );
  }

  return (
    <MovieListContainer>
      <Grid2 container spacing={4}>
        {movies!.map((movieData) => (
          <React.Fragment key={movieData.id}>
            {movieData.data.filter(movie => !!movie.released === !!showReleased).map((movie) => (
              <MovieItem movie={movie} />
            ))}
          </React.Fragment>
        ))}
      </Grid2>
    </MovieListContainer>
  );
};

export default memo(MovieList);

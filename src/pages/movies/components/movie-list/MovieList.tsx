
import { Grid2 } from "@mui/material";
import { FC, memo } from "react";
import { MovieListProps } from "./types";
import MovieItem from "./MovieItem";
import { MovieListContainer } from "./styles";

const MovieList: FC<MovieListProps> = ({ movies }) => {
    return (
        <MovieListContainer>
            <Grid2 container spacing={4}>
                { movies.map((movie) => <MovieItem movie={movie}/>) }
            </Grid2>
        </MovieListContainer>
    );
}

export default memo(MovieList);


import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { MovieDetailsProps } from "./types";

const MovieDetails: FC<MovieDetailsProps> = ({ movie }) => {
    return (
        <Stack>
            <Typography>{movie.name}</Typography>
            <Typography>{movie.publishYear} {movie.ageRestriction}</Typography>
        </Stack>
    );
};

export default MovieDetails;

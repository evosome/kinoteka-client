
import { FC } from "react";
import { MovieItemProps } from "./types";
import { MovieAgeRestrictionChip, MovieImageCover, MovieItemContainer } from "./styles";
import { Typography } from "@mui/material";

const MovieItem: FC<MovieItemProps> = ({ movie }) => {
    return (
        <MovieItemContainer>
            <MovieAgeRestrictionChip>
                <Typography>
                    { movie.ageRestriction ?? '?' }
                </Typography>
            </MovieAgeRestrictionChip>
            <MovieImageCover src={movie.coverUrl}/>
        </MovieItemContainer>
    )
};

export default MovieItem;

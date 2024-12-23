
import { FC } from "react";
import { MovieTagContainer } from "./styles";
import { MovieTagProps } from "./types";
import { Typography } from "@mui/material";

const MovieTag: FC<MovieTagProps> = ({ label, customColor }) => {
    return (
        <MovieTagContainer customColor={customColor}>
            <Typography variant="caption">
                {label}
            </Typography>
        </MovieTagContainer>
    );
}

export default MovieTag;

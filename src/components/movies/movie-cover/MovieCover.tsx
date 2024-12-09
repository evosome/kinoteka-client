import { FC } from "react";

import {
  MovieCoverContainer,
  MovieCoverAgeRestrictionChip,
  MovieCoverImage,
} from "./styles";
import { MovieCoverProps } from "./types";
import { Typography } from "@mui/material";

const MovieCover: FC<MovieCoverProps> = ({ movie }) => {
  const {
    ageRestriction,
    coverUrl
  } = movie;
  return (
    <MovieCoverContainer>
      {ageRestriction && (
        <MovieCoverAgeRestrictionChip>
          <Typography>{ageRestriction}</Typography>
        </MovieCoverAgeRestrictionChip>
      )}
      <MovieCoverImage src={coverUrl} />
    </MovieCoverContainer>
  );
};

export default MovieCover;

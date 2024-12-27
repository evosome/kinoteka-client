import { FC } from "react";

import {
  MovieCoverContainer,
  MovieCoverAgeRestrictionChip,
  MovieCoverImage,
} from "./styles";
import { MovieCoverProps } from "./types";
import { Typography } from "@mui/material";
import { Link } from "@app/components/common/link";

const MovieCover: FC<MovieCoverProps> = ({ movie, withAnimation, withAgeRestriction }) => {
  const { ageRestriction, coverUrl } = movie;
  return (
    <>
      <MovieCoverContainer withAnimation={withAnimation}>
        {withAgeRestriction && (
          <MovieCoverAgeRestrictionChip>
            <Typography>{ageRestriction ?? "?"}</Typography>
          </MovieCoverAgeRestrictionChip>
        )}
        <MovieCoverImage src={coverUrl} />
      </MovieCoverContainer>
    </>
  );
};

const MovieCoverWrapper: FC<MovieCoverProps> = ({
  needOpenMoviePage,
  ...props
}) => {
  const { movie } = props;
  return (
    <>
      {(needOpenMoviePage) ? (
        <Link forwardTo={`/movies/${movie.id}`}>
          <MovieCover {...props} />
        </Link>
      ) : (
        <MovieCover {...props} />
      )}
    </>
  );
};

export default MovieCoverWrapper;

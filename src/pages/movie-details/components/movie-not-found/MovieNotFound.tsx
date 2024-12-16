import { Typography } from "@mui/material";
import { FC } from "react";
import { FilmNotFoundContainer } from "./styles";

const MovieNotFound: FC<{}> = () => {
  return (
    <FilmNotFoundContainer>
      <Typography align="center" variant="subPoster">Seems like</Typography>
      <Typography align="center" variant="poster">We can not find this film</Typography>
    </FilmNotFoundContainer>
  );
};

export default MovieNotFound;

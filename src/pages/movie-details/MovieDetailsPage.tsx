import { FC, useMemo } from "react";
import { MovieDetailsPageContainer } from "./styles";
import MovieDetails from "./components/movie-details/MovieDetails";
import { useRouterParams } from "@app/hooks";
import { MOVIES_NOW, USERS } from "@app/constants";
import { MovieNotFound } from "./components/movie-not-found";
import { Divider } from "@mui/material";
import { FeedbackSection } from "./components/feedback-section";

const MovieDetailsPage: FC<{}> = () => {
  const { id } = useRouterParams();
  const foundMovie = useMemo(() => MOVIES_NOW.find((m) => m.id === id), [id]);
  return (
    <>
      {foundMovie ? (
        <MovieDetailsPageContainer gap={8}>
          <MovieDetails movie={foundMovie} />
          <FeedbackSection user={USERS[0]}/>
        </MovieDetailsPageContainer>
      ) : (
        <MovieNotFound />
      )}
    </>
  );
};

export default MovieDetailsPage;

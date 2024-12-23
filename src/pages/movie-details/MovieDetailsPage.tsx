import { FC, useMemo } from "react";
import { MovieDetailsPageContainer } from "./styles";
import MovieDetails from "./components/movie-details/MovieDetails";
import { useRouterParams } from "@app/hooks";
import { MovieNotFound } from "./components/movie-not-found";
import { CircularProgress, Divider } from "@mui/material";
import { FeedbackSection } from "./components/feedback-section";
import { useGetMovie } from "@app/hooks/api";

const MovieDetailsPage: FC<{}> = () => {
  const { id } = useRouterParams();
  const { isLoading, movie } = useGetMovie({ id: parseInt(id!) });
  
  if (isLoading) {
    return (
      <MovieDetailsPageContainer>
        <CircularProgress/>
      </MovieDetailsPageContainer>
    )
  }
  
  return (
    <>
      {movie ? (
        <MovieDetailsPageContainer gap={8}>
          <MovieDetails movie={movie} />
          <FeedbackSection movie={movie}/>
        </MovieDetailsPageContainer>
      ) : (
        <MovieNotFound />
      )}
    </>
  );
};

export default MovieDetailsPage;

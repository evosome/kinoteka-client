import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import {
  SessionDetailsContainer,
  SessionItemContainer,
  SessionTimesListContainer,
} from "./styles";
import { MovieCover } from "../../components/movies/movie-cover";
import { SessionItemProps } from "./types";
import { MovieDetails } from "../../components/movies/movie-details";
import SessionTimesList from "./SessionTimesList";

const SessionGroup: FC<SessionItemProps> = ({ session }) => {
  return (
    <SessionItemContainer gap={2} direction="row">
      <SessionDetailsContainer>
        <MovieCover movie={session.movie} />
        <MovieDetails movie={session.movie} />
      </SessionDetailsContainer>
      <SessionTimesListContainer>
        {session.timeList && (
          <SessionTimesList sessionTimes={session.timeList} />
        )}
      </SessionTimesListContainer>
    </SessionItemContainer>
  );
};

export default SessionGroup;

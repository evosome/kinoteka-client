//@ts-nocheck
import { FC } from "react";
import {
  SessionDetailsContainer,
  SessionItemContainer,
  SessionTimesListContainer,
} from "./styles";
import { MovieCover } from "@components/movies/movie-cover";
import { SessionItemProps } from "./types";
import { MovieDetails } from "@components/movies/movie-details";
import SessionTime from "./SessionTime";

const SessionGroup: FC<SessionItemProps> = ({ sessionGroup }) => {
  const today = new Date();
  return (
    <SessionItemContainer gap={2} direction="row">
      <SessionDetailsContainer>
        <MovieCover withAgeRestriction needOpenMoviePage movie={sessionGroup.movie} />
        <MovieDetails movie={sessionGroup.movie} />
      </SessionDetailsContainer>
      <SessionTimesListContainer gap={2} direction="row">
        {sessionGroup.sessions
          .filter((session) => session.datetime > today)
          .map((session) => (
            <SessionTime movie={sessionGroup.movie} session={session} />
          ))}
      </SessionTimesListContainer>
    </SessionItemContainer>
  );
};

export default SessionGroup;

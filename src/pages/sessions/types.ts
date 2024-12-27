
import { Movie, Session, SessionGroup, SessionTime } from "../../types/movie";

export interface SessionItemProps {
    sessionGroup: SessionGroup;
}

export interface SessionTimeProps {
    session: Session;
    movie: Movie;
}

export interface SessionListProps {
    sessionTimes: SessionTime[]
}

export interface SessionTimesListProps {
    sessionTimes: SessionTime[];
}

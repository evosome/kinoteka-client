
import { Session, SessionTime } from "../../types/movie";

export interface SessionItemProps {
    session: Session;
}

export interface SessionTimeProps {
    sessionTime: SessionTime;
}

export interface SessionListProps {
    sessionTimes: SessionTime[]
}

export interface SessionTimesListProps {
    sessionTimes: SessionTime[];
}

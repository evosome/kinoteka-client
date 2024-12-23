import { Movie } from "@app/types/movie";
import { User } from "@app/types/user";

export interface FeedbackSectionProps {
    movie: Movie;
}

export interface UserFeedbackProps {
    movie: Movie;
    user?: User;
}

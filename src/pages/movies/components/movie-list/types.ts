
import { Movie } from "@app/types/movie";

export interface MovieItemProps {
    movie: Movie;
}

export interface MovieListProps {
    showReleased?: boolean;
};

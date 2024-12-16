import { Movie } from "../../../types/movie";

export interface MovieCoverProps {
    movie: Movie;
    needOpenMoviePage?: boolean;
    withAnimation?: boolean;
    withAgeRestriction?: boolean;
}

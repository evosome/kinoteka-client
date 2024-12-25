import { User } from "../user";

export interface Genre {
    name: string;
}

export interface Movie {
    id: number;
    type: string;
    name: string;
    description?: string;
    coverUrl?: string;
    ageRestriction?: string;
    publishYear?: number;
    publishCountries?: MovieCountry[];
    genres?: Genre[];
    galleryUrls?: string[];
    boxOffice?: boolean;
    released?: boolean;
    sessions?: Session[];
}

export interface MovieFeedback {
    id: number;
    mark: number;
    text: string;
    user: User;
}

export interface MovieCountry {
    name: string;
    iconUrl: string;
}

export interface SessionTime {
    hall: number;
    time: string;
    price: number;
    format: string;
}

export interface Session {
    movie: Movie;
    hall?: number;
    date?: string;
    timeList?: SessionTime[];
}

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

export enum SeatTypes {
    VIP,
    LOVESEAT,
    COMMON,
}

export interface HallSeat {
    type: SeatTypes;
    marginLeft: number;
}

export interface HallRow {
    margin: number;
    seats: HallSeat[];
}

export interface HallLayout {
    rows: HallRow[];
}

export interface Session {
    hall?: number;
    datetime?: Date; 
    price?: number;
    format?: string;
    layout: HallLayout;
}

export interface SessionGroup {
    movie: Movie;
    sessions: Session[];
}

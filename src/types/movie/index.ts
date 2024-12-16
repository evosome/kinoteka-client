
export interface Genre {
    name: string;
}

export interface Movie {
    id: string;
    type: string;
    name: string;
    description?: string;
    coverUrl?: string;
    ageRestriction?: string;
    publishYear?: string;
    publishCountry?: string;
    genres?: Genre[];
    galleryUrls?: string[];
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

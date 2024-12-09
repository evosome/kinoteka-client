
export interface Movie {
    name: string;
    description?: string;
    coverUrl?: string;
    ageRestriction?: string;
    publishYear?: string;
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

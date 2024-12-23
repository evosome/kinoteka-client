
export interface UserDetails {
    login: string;
    telephoneNumber: string;
    avatarUrl?: string;
}

export interface User {
    id: number;
    name: string;
    surname: string;
    details: UserDetails;
}

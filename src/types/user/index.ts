
export interface UserDetails {
    login: string;
    telephoneNumber: string;
    avatarUrl?: string;
}

export interface User {
    name: string;
    surname: string;
    details: UserDetails;
}

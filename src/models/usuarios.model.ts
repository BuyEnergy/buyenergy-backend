export interface Usuarios {
    id: number;
    name: string;
    email: string;
    password: string;
    inclusionDate: Date | string;
    loggedIn: false;    
}
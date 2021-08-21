export type FormValues = {
    id?: any | null,
    name: string;
    age: number;
    email: string;
    phoneNumber: string;
    state: string;
    country: string;
}

export type AllUsersFromDb = FormValues[];
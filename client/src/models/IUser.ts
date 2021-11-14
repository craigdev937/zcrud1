export interface IUser {
    firstname?: string,
    lastname?: string,
    email?: string,
    password?: string,
    role?: string,
    token?: string
};

export interface IUserState {
    user: IUser,
    id?: number,
    status?: string,
    token?: string
};




import { IUser } from "./iuser";

export interface IUserResponse {
    total: number;
    page: number;
    per_page: number;
    results: IUser[];
}

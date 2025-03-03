import { User } from "@/types/user";
import { httpClient } from "./httpClient";

export const getUsers = async(): Promise<User[]> => {
    const res = await httpClient.get('/users')
    return res.data
}

export const getUserById = async (userId: number): Promise<User> => {
    const res = await httpClient.get(`/users/${userId}`)
    return res.data
}
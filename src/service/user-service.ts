import { apiClient } from "@/hooks/axios-api";
import { APIResponse } from "@/types";
import { User } from "@/types/user-type";

export const currentUser = async () => {
    try {
        const { data } = await apiClient.get<APIResponse<{ user: User }>>(`/auth/me`)
        console.log(data)
        return data.result.user;
    } catch (error) {
        console.warn(error)
    }
}

type updateUserType = {
    id: string,
    user: User
}
export const updateUser = async ({ id, user }: updateUserType) => {
    try {
        const { data } = await apiClient.put<APIResponse<{ user: User }>>(
            `/users/${id}`, user
        )
        if (!data.success) {
            throw new Error("Faied to update user")
        }

        return data.result.user;
    } catch (error) {
        console.warn(error)
    }
}
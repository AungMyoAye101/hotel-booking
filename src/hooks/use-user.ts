import { useQuery } from "@tanstack/react-query"
import { apiClient } from "./axios-api"
import { APIResponse } from "@/types"
import { User } from "@/types/user-type"
import { currentUser } from "@/service/user-service"

export const useGetUserById = (id: string) => {
    return useQuery({
        queryKey: ['user_id', id],
        queryFn: async () => {
            try {
                const { data } = await apiClient.get<APIResponse<{ user: User }>>(`/user/${id}`)
                return data.result.user;
            } catch (error) {
                console.warn(error)
            }
        },
        enabled: !!id
    })
}
export const useGetMe = () => {
    return useQuery({
        queryKey: ['me',],
        queryFn: currentUser

    })
}
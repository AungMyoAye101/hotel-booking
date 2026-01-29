import { apiClient } from "@/hooks/axios-api"
import { APIResponse, RoomType } from "@/types"

export const getRoomById = async (roomId: string) => {
    const { data } = await apiClient.get<APIResponse<{ room: RoomType }>>(
        `/room/${roomId}`
    )
    if (!data.success) {
        throw new Error(data.message || "Failed to room")
    }
    return data.result.room;
}
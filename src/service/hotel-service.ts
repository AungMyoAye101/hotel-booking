import { apiClient } from "@/hooks/axios-api"
import { APIResponse, AvaliableRoomsType, QueryType, RoomType } from "@/types"
import { hotelType } from "@/types/hotel-types"

export const getHotelDetails = async (hotelId: string) => {
    console.log(hotelId)
    const { data } = await apiClient.get<APIResponse<{ hotel: hotelType }>>(`/hotel/${hotelId}`)
    if (!data.success) {
        throw new Error("Faild to get hotel details")
    }

    return data.result.hotel
}

export const getAvaliableRooms = async (hotelId: string, params: AvaliableRoomsType) => {
    const { data } = await apiClient.get<APIResponse<{ rooms: RoomType[] }>>(`/room/hotel/${hotelId}`, { params })

    if (!data.success) {
        throw new Error(data.message || "Failed to get room")
    }

    return data.result.rooms;
}
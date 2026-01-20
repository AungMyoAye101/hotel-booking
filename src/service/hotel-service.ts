import { apiClient } from "@/hooks/axios-api"
import { APIResponse } from "@/types"
import { hotelType } from "@/types/hotel-types"

export const getHotelDetails = async (hotelId: string) => {
    console.log(hotelId)
    const { data } = await apiClient.get<APIResponse<{ hotel: hotelType }>>(`/hotel/${hotelId}`)
    if (!data.success) {
        throw new Error("Faild to get hotel details")
    }
    console.log(data, "dd")
    return data.result.hotel
}
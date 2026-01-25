import { apiClient } from "@/hooks/axios-api";
import { APIResponse, BookingType } from "@/types";
import { createBookingType } from "@/validations/booking-schema";


export const createBooking = async (booking: createBookingType) => {
    console.log(booking)
    const { data } = await apiClient.post<APIResponse<{ booking: BookingType[] }>>(
        '/booking/create', booking
    )
    console.log(data)
    if (!data.success) {
        throw new Error(data.message || "Failed to create booking")
    }

    return data.result.booking[0]
}
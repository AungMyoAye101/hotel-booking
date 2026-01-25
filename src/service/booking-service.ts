import { apiClient } from "@/hooks/axios-api";
import { APIResponse, BookingType } from "@/types";
import { createBookingType } from "@/validations/booking-schema";


export const createBooking = async (booking: createBookingType) => {

    const { data } = await apiClient.post<APIResponse<{ booking: BookingType[] }>>(
        '/booking/create', booking
    )

    if (!data.success) {
        throw new Error(data.message || "Failed to create booking")
    }

    return data.result.booking[0]
}

export const updateBooking = async (booking: BookingType) => {
    const { data } = await apiClient.put<APIResponse<{ booking: BookingType }>>(
        `/booking/update/${booking._id}`, booking
    )


    if (!data.success) {
        throw new Error(data.message || "Failed to update booking")
    }

    return data.result.booking
}

export const getBookingById = async (bookingId: string) => {
    const { data } = await apiClient.get<APIResponse<{ booking: BookingType }>>(`/booking/${bookingId}`)
    console.log(data)

    if (!data.success) {
        throw new Error(data.message || "Failed to update booking")
    }

    return data.result.booking
}
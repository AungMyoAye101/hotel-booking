import api from "@/hooks/axios-api";
import { APIResponse, BookingInfoType, BookingType, UpdateBookingType } from "@/types";
import { createBookingType } from "@/validations/booking-schema";


export const createBooking = async (booking: createBookingType) => {


    const { data } = await api.post<APIResponse<{ booking: BookingType }>>(
        '/booking/create', booking
    )

    if (!data.success) {
        throw new Error(data.message || "Failed to create booking")
    }

    return data.result.booking;
}

type updateBookingParam = {
    bookingId: string, booking: UpdateBookingType
}
export const updateBooking = async ({ bookingId, booking }: updateBookingParam) => {
    const { data } = await api.put<APIResponse<{ booking: BookingType }>>(
        `/booking/update/${bookingId}`, booking
    )


    if (!data.success) {
        throw new Error(data.message || "Failed to update booking")
    }

    return data.result.booking
}

export const getBookingById = async (bookingId: string) => {
    const { data } = await api.get<APIResponse<{ booking: BookingInfoType }>>(`/booking/${bookingId}`)


    if (!data.success) {
        throw new Error(data.message || "Failed to update booking")
    }

    return data.result.booking
}
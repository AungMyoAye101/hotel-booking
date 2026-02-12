import api from "@/hooks/axios-api";
import { APIResponse, BookingInfoType, BookingType, UpdateBookingType } from "@/types";
import { createBookingType } from "@/validations/booking-schema";


export const createBooking = async (booking: createBookingType) => {


    const { data } = await api.post<APIResponse<{ booking: BookingType }>>(
        '/booking/create', booking
    )


    return data.result.booking;
}

type updateBookingParam = {
    bookingId: string, booking: UpdateBookingType
}
export const updateBooking = async ({ bookingId, booking }: updateBookingParam) => {
    const { data } = await api.put<APIResponse<{ booking: BookingType }>>(
        `/booking/update/${bookingId}`, booking
    )


    return data.result.booking
}

export const getBookingById = async (bookingId: string) => {
    const { data } = await api.get<APIResponse<{ booking: BookingInfoType }>>(`/booking/${bookingId}`)

    return data.result.booking
}

export const getBookingByUseridService = async (userId: string) => {
    const { data } = await api.get<APIResponse<{ booking: BookingInfoType[] }>>(`/booking/user/${userId}`)

    return data.result.booking;
}
export const cancelBookingService = async (bookingId: string) => {
    const { data } = await api.put<APIResponse<{ booking: BookingInfoType }>>(`/booking/cancel/${bookingId}`, { bookingId })
    return data.result;
}
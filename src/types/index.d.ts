import { photoType } from "./hotel-types"

export interface APIResponse<T> {
    success: boolean,
    status: number,
    message: string,
    result: T
}

export type token = string

export type AuthResType = {
    token?: string,
    user: User
}

export type QueryType = {
    page?: number,
    limit?: number,
    search?: string,
    sort?: 'asc' | 'desc'
}
export type Bed_Types = "king" | "queen" | "full" | "twin" | "single";
export type RoomType = {
    _id: string,
    name: string,
    maxPeople: number,
    price: number,
    hotelId: string,
    totalRooms: number,
    photo?: photoType,
    bedTypes: Bed_Types
}

export interface TokenPayload {
    id: string,
    email: string,

}

export type MetaType = {
    page: number,
    limit: number,
    total: number;
    totalPages: number;
    hasPrev: boolean;
    hasNext: boolean
}

export type BookingStatus = "PENDING" | "CONFIRMED" | "STAYED" | "CANCELLED" | "EXPIRED";

export type BookingType = {
    _id: string,
    userId: string,
    roomId: string,
    hotelId: string,
    totalPrice: number,
    quantity: number,
    status: BookingStatus,
    checkIn: Date,
    checkOut: Date,

}
export type PaymentMethodType = "MOBILE_BANKING" | "CARD" | "BANK"
export type PaymentType = {
    _id: string,
    bookingId: string,
    userId: string,
    paymentMethod: PaymentMethodType
    status: "PENDING" | "PAID" | "FAILED",
    amount: number,
    paidAt: Date
}

export type createPaymentType = {
    bookingId: string,
    userId: string,
    paymentMethod: PaymentMethodType,
    amount: number,
}

export type BookingInfoType = {
    _id: string
    checkIn: Date,
    checkOut: Date
    hotel: {
        adddress: string,
        city: string,
        name: string,
        photo: photoType
    }
    quantity: number,
    room: { name: string }
    status: BookingStatus
    totalPrice: number,
    user: { _id: string, name: string }

}

import { hotelType, photoType } from "./hotel-types"

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

export type AvaliableRoomsType = {
    checkIn?: string,
    checkOut?: string,
    guest?: number,
    page?: number,
    limit?: number,
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

export interface BookingRoomType extends RoomType {
    hotelId: Partial<hotelType>,
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
export type PaymentCreateType = {
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
        star: number,
        rating: number,
        photo: photoType
    }
    quantity: number,
    room: Partial<RoomType>,
    status: BookingStatus
    totalPrice: number,
    user: { _id: string, name: string }

}
export type PaymentStatusType = "PAID" | "PENDING" | "FAILED";

export type PaymentType = {
    _id: string,

    bookingId: {
        _id: string,
        name: string,
        hotelId: {
            _id: string,
            name: string,
            city: string
        },
        checkIn: Date,
        checkOut: Date
    },
    userId: { _id: string, name: string },
    status: PaymentStatusType,
    paymentMethod: PaymentMethodType,
    amount: number,
    paidAt: Date

}

export type ReceiptType = {
    receiptNo: string,
    userId: string,
    paymentId: string,
    bookingId: string,
    status: PaymentStatusType,
    paymentMethod: PaymentMethodType,
    amount: number,
    paidAt: Date,
}

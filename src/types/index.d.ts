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
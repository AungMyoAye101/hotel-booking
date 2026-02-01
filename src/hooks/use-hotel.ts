'use client';

import { getAllHotels, getAvaliableRooms, getHotelDetails } from "@/service/hotel-service"
import { AvaliableRoomsType, QueryType } from "@/types";
import { useQuery } from "@tanstack/react-query"

export const useHotelDetail = (hotelId: string) => {
    return useQuery({
        queryKey: ['hotel_details', hotelId],
        queryFn: () => getHotelDetails(hotelId),
        enabled: !!hotelId
    })
}
export const useGetAvaliableRoom = (hotelId: string, param: AvaliableRoomsType) => {
    return useQuery({
        queryKey: ['rooms', hotelId, param],
        queryFn: () => getAvaliableRooms(hotelId, param),
        enabled: !!hotelId
    })
}

//===========get all hotels 

export const useGetAllHotels = () => {
    return useQuery({
        queryKey: ['hotels'],
        queryFn: () => getAllHotels()
    })
}
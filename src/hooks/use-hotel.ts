'use client';

import { getHotelDetails } from "@/service/hotel-service"
import { useQuery } from "@tanstack/react-query"

export const useHotelDetail = (hotelId: string) => {
    return useQuery({
        queryKey: ['hotel_details', hotelId],
        queryFn: () => getHotelDetails(hotelId),
        enabled: !!hotelId
    })
}
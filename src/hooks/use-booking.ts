import { createBooking, getBookingById } from "@/service/booking-service"
import { BookingType } from "@/types"
import { addToast } from "@heroui/react"
import { useMutation, useQueries, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

export const useCreateBooking = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['create_booking'],
        mutationFn: createBooking,
        onSuccess: (data) => {
            queryClient.setQueryData(['booking_by_id', data._id], data);
            addToast({
                title: "Create booking successful.",
                color: 'success'

            })

        },
        onError: (error
        ) => {
            console.log(error)
            addToast({
                title: "Failed to create booking .",
                color: 'danger'

            })
        }
    })
}

export const useGetBookingById = (bookingId: string) => {

    return useQuery({
        queryKey: ['booking_by_id', bookingId],
        queryFn: () => getBookingById(bookingId),
        enabled: !!bookingId,

    })

}
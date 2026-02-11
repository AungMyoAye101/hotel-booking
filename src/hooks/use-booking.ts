import { createBooking, getBookingById, getBookingByUseridService, updateBooking } from "@/service/booking-service"

import { addToast } from "@heroui/react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

export const useCreateBooking = () => {
    const queryClient = useQueryClient();

    const router = useRouter();

    return useMutation({
        mutationKey: ['create_booking'],
        mutationFn: createBooking,
        onSuccess: (data) => {
            queryClient.setQueryData(['booking_by_id', data._id], data);
            addToast({
                title: "Create booking successful.",
                color: 'success'

            })

            router.push(`/booking/${data._id}`, { scroll: false })
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
        staleTime: 0,
        enabled: !!bookingId,

    })

}

export const useUpdateBooking = () => {
    const router = useRouter();
    const qc = useQueryClient()
    return useMutation({
        mutationKey: ['update_booking'],
        mutationFn: updateBooking,
        onSuccess: (data) => {
            qc.invalidateQueries({
                queryKey: ['booking_by_id', data._id]
            })
            addToast({
                title: "Update booking successful.",
                color: 'success'

            })

            router.push(`/booking/${data._id}/payment`, { scroll: false })
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


export const useGetetBookingByUserId = (userId: string) => {
    return useQuery({
        queryKey: ['booking_by_userId', userId],
        queryFn: () => getBookingByUseridService(userId),
        enabled: !!userId
    })
}
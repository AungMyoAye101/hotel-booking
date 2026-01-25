import { createBooking } from "@/service/booking-service"
import { BookingType } from "@/types"
import { addToast } from "@heroui/react"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

export const useCreateBooking = () => {

    return useMutation({
        mutationKey: ['create_booking'],
        mutationFn: createBooking,
        onSuccess: () => {
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
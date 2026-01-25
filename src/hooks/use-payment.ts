import { createPayment } from "@/service/payment-service"
import { useBookingStore } from "@/stores/booking-store"
import { useMutation } from "@tanstack/react-query"

import { useRouter } from "next/navigation"

export const useCreatePayment = () => {
    const { setStage, setPaymentId, setBookingId } = useBookingStore.getState()
    const router = useRouter()
    return useMutation({
        mutationKey: ['create_payment'],
        mutationFn: createPayment,
        onSuccess: (data) => {
            setStage(2)
            setPaymentId(data._id)
            setBookingId(data.bookingId)
            router.push(`/booking/${data._id}/confirm`)
        },
        onError: (error) => {
            console.log(error)
        }
    })
}
import { confirmPaymentService, createPayment, getPaymentById } from "@/service/payment-service"
import { useBookingStore } from "@/stores/booking-store"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

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
export const useConfirmPayment = () => {
    const { setStage, confirmPayment } = useBookingStore.getState()
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ['confirm_payment'],
        mutationFn: confirmPaymentService,
        onSuccess: (data) => {
            setStage(3)
            confirmPayment(true)
            queryClient.invalidateQueries({
                queryKey: ['payment_id', data.id]
            })

        },
        onError: (error) => {
            console.log(error)
        }
    })
}

export const useGetPaymentById = (id: string) => {
    return useQuery({
        queryKey: ['payment_id', id],
        queryFn: () => getPaymentById(id),
        enabled: !!id
    })
}
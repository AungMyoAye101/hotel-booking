import { createPayment } from "@/service/payment-service"
import { useMutation } from "@tanstack/react-query"

import { useRouter } from "next/navigation"

export const useCreatePayment = () => {
    const router = useRouter()
    return useMutation({
        mutationKey: ['create_payment'],
        mutationFn: createPayment,
        onSuccess: (data) => {
            router.push(`/booking/${data._id}/confirm`)
        },
        onError: (error) => {
            console.log(error)
        }
    })
}
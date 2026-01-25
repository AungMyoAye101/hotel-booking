import { apiClient } from "@/hooks/axios-api";
import { APIResponse, createPaymentType, PaymentType } from "@/types";


export const createPayment = async (payment: createPaymentType) => {
    console.log(payment)
    const { data } = await apiClient.post<APIResponse<{ payment: PaymentType }>>(
        '/payment/create', payment
    )
    if (!data.success) {
        throw new Error("Failed to create payment.")
    }

    return data.result.payment;
}
import { apiClient } from "@/hooks/axios-api";
import { APIResponse, createPaymentType, PaymentType } from "@/types";


export const createPayment = async (payment: createPaymentType) => {

    const { data } = await apiClient.post<APIResponse<{ payment: PaymentType }>>(
        '/payment/create', payment
    )
    if (!data.success) {
        throw new Error("Failed to create payment.")
    }

    return data.result.payment;
}

type confirmPaymentType = {
    userId: string;
    paymentId: string;
    bookingId: string;
}

export const confirmPaymentService = async (payment: confirmPaymentType) => {
    const { data } = await apiClient.put<APIResponse<any>>(
        '/payment/update', payment
    )
    console.log(data)
    if (!data.success) {
        throw new Error("Failed to confirm payment.")
    }

    return data.result;
}
import api from "@/hooks/axios-api";
import { APIResponse, createPaymentType, PaymentType, PaymentCreateType } from "@/types";


export const createPayment = async (payment: createPaymentType) => {

    const { data } = await api.post<APIResponse<{ payment: PaymentCreateType }>>(
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
    const { data } = await api.put<APIResponse<any>>(
        '/payment/update', payment
    )

    if (!data.success) {
        throw new Error("Failed to confirm payment.")
    }

    return data.result;
}

export const getPaymentById = async (id: string) => {
    const { data } = await api.get<APIResponse<{ payment: PaymentType }>>(
        `/payment/${id}`
    )
    if (!data.success) {
        throw new Error(data.message || "Failed to get payment.")
    }

    return data.result.payment;
}
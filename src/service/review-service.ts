import api from "@/hooks/axios-api";
import { APIResponse, ReviewType } from "@/types";

export const createReviewService = async (review: ReviewType) => {
    const { data } = await api.post<APIResponse<{ review: ReviewType }>>('/review/create', review)

    return data.result;
}
export const updateReviewService = async (review: ReviewType) => {
    const { data } = await api.put<APIResponse<{ review: ReviewType }>>('/review/create', review)

    return data.result;
}
export const getReviewService = async (hotelId: string) => {
    const { data } = await api.get<APIResponse<{ reviews: ReviewType[] }>>('/review/' + hotelId)

    return data.result;
}
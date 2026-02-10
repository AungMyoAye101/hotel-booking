import { createReviewService } from "@/service/review-service"
import { useMutation } from "@tanstack/react-query"

export const useCreateReview = () => {
    return useMutation({
        mutationKey: ['create_review'],
        mutationFn: createReviewService
    })
}
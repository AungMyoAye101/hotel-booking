'use client'

import { useCreateReview } from '@/hooks/use-review'
import { useAuth } from '@/stores/auth-store'
import { ReviewType } from '@/types'
import { addToast, Button, Select, SelectItem, Textarea } from '@heroui/react'

import { FormEvent, useState } from 'react'

type Props = {
    hotelId: string
}
const HotelReview = ({ hotelId }: Props) => {
    const userId = useAuth(s => s.user?._id)
    const [reviewData, setReviewData] = useState({
        rating: 1,
        description: ''
    })
    console.log(reviewData)
    const { mutate, isPending } = useCreateReview()
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        const data = {
            hotelId,
            userId,
            rating: reviewData.rating,
            review: reviewData.description
        } as ReviewType
        mutate(data, {
            onSuccess: () => {
                addToast({
                    title: "Review post successful.",
                    color: "success"
                })
            }
        })
    }
    return (
        <form
            onSubmit={onSubmit}
            className="min-w-75 max-w-sm  space-y-3 rounded-lg bg-white shadow-md h-fit px-4 py-6 border border-slate-200">
            <h1 className='font-semibold text-xl capitalize'>Please leave your review</h1>
            <Select
                isRequired
                label="Rating"
                labelPlacement='outside'
                variant='bordered'
                color='secondary'
                radius='sm'
                fullWidth={false}
                selectedKeys={[reviewData.rating.toString()]}
                onSelectionChange={(keys) => {
                    const val = [...keys][0]
                    setReviewData((pre) => ({ ...pre, rating: Number(val) }))
                }}
                className='w-6'
            >
                {
                    Array.from({ length: 10 }).map((_, i) => {
                        const val = (i + 1).toString();
                        return (
                            < SelectItem
                                key={val}
                                textValue={val}
                            >
                                {val}

                            </SelectItem>
                        )


                    })
                }

            </Select>
            <Textarea
                isRequired
                validate={(value) => {
                    if (value.trim().length < 3) return "Description is too short."
                }}
                placeholder='Your review'
                minRows={4}
                value={reviewData.description}
                onValueChange={(value) => setReviewData(pre => ({ ...pre, description: value }))}
            />
            <Button type='submit'
                isLoading={isPending}
                fullWidth variant='solid' color='primary'>Submit Review</Button>
        </form>
    )
}



export default HotelReview
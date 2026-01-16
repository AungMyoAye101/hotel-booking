'use client'

import { Button, Textarea } from '@heroui/react'
import { Star } from 'lucide-react'
import React from 'react'

const HotelReview = () => {
    return (
        <form className="min-w-xs max-w-sm  space-y-3 rounded-lg bg-white shadow-md h-fit px-4 py-6 border border-slate-200">
            <h1 className='font-semibold text-xl'>Please leave your review</h1>
            <div className='flex gap-1'>


                {
                    Array(5).fill(0).map((_, i) => (
                        <Star fill="yellow" strokeWidth={1} key={i} />
                    ))
                }
            </div>
            <Textarea placeholder='Describe your tough' minRows={4} />
            <Button type='submit' fullWidth variant='solid' color='primary'>Submit Review</Button>
        </form>
    )
}

export default HotelReview
"use client"
import { useBookingStore } from '@/stores/booking-store'
import { Button } from '@heroui/button'
import { redirect, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const { stage, setStage, bookingId, paymentId, confirmPayment } = useBookingStore(s => s);

    const router = useRouter()
    useEffect(() => {
        if (!paymentId) {
            router.replace('/booking')
        }
    }, [paymentId, router])
    const handleSubmit = () => {
        setStage(3)
        console.log(stage)
        redirect('/booking/complete')
    }
    return (
        <div>
            <Button onPress={handleSubmit}>click</Button>
        </div>
    )
}

export default page
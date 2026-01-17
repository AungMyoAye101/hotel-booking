'use client'

import { useBookingStore } from '@/stores/booking-store'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const { paymentId, isPaid } = useBookingStore(s => s)
    const router = useRouter()
    useEffect(() => {
        if (!paymentId && !isPaid) {
            router.replace('/booking')
        }
    }, [paymentId, router])

    return (
        <div>page</div>
    )
}

export default page
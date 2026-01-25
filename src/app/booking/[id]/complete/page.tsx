'use client'

import { useBookingStore } from '@/stores/booking-store'
import { Badge, Button, Card, Chip } from '@heroui/react'
import { CheckCircle2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const { paymentId, isPaid, reset } = useBookingStore(s => s)
    const router = useRouter()
    useEffect(() => {
        if (!paymentId && !isPaid) {
            router.replace('/booking')
        }
    }, [paymentId, router])

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">


            <Card className="p-8 text-center space-y-6">
                {/* Success Icon */}
                <Button color='success' radius='full' size='lg' className='mx-auto' isIconOnly><CheckCircle2 className='text-white' /></Button>
                {/* Heading */}
                <h1 className="text-2xl font-semibold">
                    Booking Confirmed
                </h1>

                <p className="text-muted max-w-md mx-auto">
                    Your payment was successful and your booking is now confirmed.
                    A confirmation email has been sent to you.
                </p>

                {/* Booking Reference */}
                <div className="bg-muted/40 rounded-lg p-4">
                    <p className="text-sm text-muted">Booking ID</p>
                    <p className="font-mono font-medium">123</p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <Button
                        variant="bordered"
                        onPress={() => router.push("/my-bookings")}
                    >
                        View my bookings
                    </Button>

                    <Button
                        color="primary"
                        onPress={() => {
                            reset();
                            router.push("/");
                        }}
                    >
                        Back to home
                    </Button>
                </div>

                {/* Footer Note */}
                <p className="text-xs text-muted pt-4">
                    Need help? Contact our support anytime.
                </p>
            </Card>
        </div>
    )
}

export default page



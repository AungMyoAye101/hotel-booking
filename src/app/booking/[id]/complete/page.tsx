'use client'

import { useGetPaymentById } from '@/hooks/use-payment'
import { useAuth } from '@/stores/auth-store'
import { useBookingStore } from '@/stores/booking-store'
import { Badge, Button, Card, Chip, user } from '@heroui/react'
import { CheckCircle2 } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

const page = () => {
    const { paymentId, isPaid, reset, bookingId, } = useBookingStore(s => s)
    const user = useAuth(s => s.user)
    const router = useRouter()
    const path = usePathname();

    useEffect(() => {
        if (!paymentId && !isPaid) {
            router.replace('/booking')
        }
        if (path !== `/booking/${bookingId}/complete`) {
            reset();
        }
    }, [paymentId, router, path])



    const { data: payment, isLoading } = useGetPaymentById(paymentId!);
    if (isLoading) {
        return <p>Loading....</p>
    }

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
                <div className='bg-white rounded-md shadow space-y-4 w-full px-4 py-6 max-w-sm mx-auto border border-slate-200'>
                    <h1 className='font-semibold text-lg mb-2'>Payment Details</h1>
                    <div className='grid grid-cols-2 gap-4 '>
                        <span className='text-start'>
                            Hotel
                        </span>
                        <span className='font-semibold text-end'>
                            {payment?.bookingId?.hotelId?.name}
                        </span>
                        <span className='text-start'>
                            CheckIn
                        </span>
                        <span className='font-semibold text-end'>
                            {new Date(payment?.bookingId.checkIn).toLocaleDateString()}
                        </span>
                        <span className='text-start'>
                            CheckOut
                        </span>
                        <span className='font-semibold text-end'>
                            {new Date(payment?.bookingId.checkOut).toLocaleDateString()}
                        </span>
                        <span className='text-start'>
                            Amount
                        </span>
                        <span className='font-semibold text-end'>
                            {payment?.amount} $
                        </span>
                        <span className='text-start'>
                            PaidAt
                        </span>
                        <span className='font-semibold text-end'>
                            {new Date(payment?.paidAt!).toDateString()}
                        </span>
                        <span className='text-start'>
                            Payment Method
                        </span>
                        <span className='font-semibold text-end'>
                            {payment?.paymentMethod!}
                        </span>

                    </div>

                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">


                    <Button
                        variant="bordered"
                        color="primary"
                        onPress={() => {
                            reset();
                            router.push("/");
                        }}
                    >
                        Back to home
                    </Button>
                    <Button

                        color="primary"
                        onPress={() => router.push(`/user/${user?._id}/bookings`)}
                    >
                        View my bookings
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



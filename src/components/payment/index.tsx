'use client';
import UserInfoForm from '../booking/user-info-form'
import PaymentDetailsForm from '../booking/payment-details'
import { Check, CircleDollarSign, DollarSignIcon } from 'lucide-react'
import BookingInfo from '../booking/booking-info'
import { useGetBookingById } from '@/hooks/use-booking';
import { Card, CardBody } from '@heroui/react';
import BookingLoading from '../booking/booking-loading';

type Props = {
    bookingId: string
}
const Payment = ({ bookingId }: Props) => {
    const { data: booking, isLoading } = useGetBookingById(bookingId)

    if (isLoading) {
        return <BookingLoading />
    }

    return (
        <section className='space-y-6'>
            <div>

                <h1 className="text-3xl font-semibold">Secure your booking</h1>
                <p>Complete the form below to comfirm your hotel reservation.</p>
            </div>


            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ">
                <div className="space-y-6 ">

                    <UserInfoForm />
                    <PaymentDetailsForm
                        bookingId={bookingId}
                        userId={booking?.user._id!}
                        amount={booking?.totalPrice!}
                    />
                    <Card className='p-4'>
                        <CardBody className='space-y-4' >
                            <div className="head-1 flex gap-2 items-center">
                                <CircleDollarSign size={26} />
                                Free Cancellation
                            </div>
                            <p>
                                Book now and pay later!
                                You can cancel your reservation free of charge up to 24 hours before check-in.
                                No hidden fees, no upfront payment required.
                            </p>
                            <p className="flex gap-1 p-2 bg-green-100 rounded-sm text-sm"><Check className="text-green-500" /> You're booking is protect by SSL encryption.</p>

                        </CardBody>
                    </Card>

                </div>

                <BookingInfo booking={booking!} />
            </div>

        </section>
    )
}

export default Payment
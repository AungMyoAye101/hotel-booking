import { BookingInfoType } from '@/types'
import { Card, CardBody, CardHeader } from '@heroui/react'
import { Check, CircleDollarSign } from 'lucide-react'
import React from 'react'
type Props = {
    booking: BookingInfoType
}
const BookingDetails = ({ booking }: Props) => {
    return (
        <section className='space-y-4'>
            {/* Booking info */}
            <Card >
                <CardHeader className='pb-0'>
                    <h1 className='font-semibold'>
                        Your Booking Information
                    </h1>

                </CardHeader>
                <CardBody className='pt-2 pb-4 grid grid-cols-2 gap-2'>
                    <div className='bg-slate-200 p-2 rounded-md flex-col gap-2'>
                        <p>Check In </p>
                        <p className='font-semibold'>{new Date(booking.checkIn).toDateString()}</p>
                    </div>
                    <div className='bg-slate-200 p-2 rounded-md flex-col gap-2'>
                        <p>Check Out </p>
                        <p className='font-semibold'>{new Date(booking.checkOut).toDateString()}</p>
                    </div>
                    <div className='bg-slate-200 p-2 rounded-md flex-col gap-2'>
                        <p>Quantity </p>
                        <p className='font-semibold'>{booking.quantity}</p>
                    </div>
                    <div className='bg-slate-200 p-2 rounded-md flex-col gap-2'>
                        <p>Price</p>
                        <p className='font-semibold text-warning-500'>{booking.totalPrice}  $</p>
                    </div>


                </CardBody>
            </Card>

            {/* Promotion */}
            <Card>
                <CardBody >
                    <div className="head-1 flex gap-2 items-center">
                        <CircleDollarSign size={26} />
                        Free Cancellation
                    </div>
                    <p className='text-sm py-2'>
                        Book now and pay later!
                        You can cancel your reservation free of charge up to 24 hours before check-in.
                        No hidden fees, no upfront payment required.
                    </p>
                    <p
                        className="flex gap-1 p-2 bg-green-100 rounded-sm text-sm">
                        <Check className="text-green-500" />
                        You're booking is protect by SSL encryption.
                    </p>

                    {/* <div className="flex gap-1 text-sm text-slate-800">
                        <CircleDollarSign />
                        You're getting the best price!
                        we guarantee it.
                    </div>
                    <div className="flex gap-1 text-sm p-2 bg-green-100 rounded">
                        <Check className="text-green-500" />
                        Free cancellation
                    </div> */}
                </CardBody>
            </Card>
        </section>
    )
}

export default BookingDetails
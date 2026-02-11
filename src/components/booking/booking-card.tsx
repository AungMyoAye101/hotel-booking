"use client";
import { useGetetBookingByUserId } from '@/hooks/use-booking';
import { useAuth } from '@/stores/auth-store'
import { Card, CardBody } from '@heroui/react';
import Image from 'next/image';
import FiveStars from '../star';
import { BedDouble, Calendar, CreditCard, UserRound } from 'lucide-react';


const BookingCard = () => {
    const userId = useAuth(s => s.user?._id)
    const { data: bookings, isLoading, isError, error } = useGetetBookingByUserId(userId as string)

    console.log(bookings, error)
    return (
        <section>
            <div className='space-y-6'>
                {


                    bookings && bookings.map(booking => (
                        <Card
                            key={booking._id}
                            className=' border border-slate-300' >

                            <CardBody>
                                <div className='flex flex-col md:flex-row gap-4'>
                                    <div>
                                        <Image
                                            src={booking.hotel?.photo?.secure_url || '/hotel-bg.png'}
                                            alt={booking?.hotel?.name + "photo "}
                                            width={300}
                                            height={260}
                                            className='object-cover aspect-video rounded-lg w-full md:max-w-sm'
                                        />
                                    </div>

                                    <div className='flex-1 flex flex-col gap-2'>
                                        <div>
                                            <h1 className='text-2xl font-bold'>
                                                {booking.hotel?.name}
                                            </h1>
                                            <p className='text-slate-700'>
                                                {booking.hotel?.city} City
                                            </p>
                                            <FiveStars count={booking.hotel?.star} />
                                        </div>
                                        <div className='w-full h-0.5 bg-slate-200' />

                                        {/* Checkin and out */}
                                        <div className='flex gap-4 '>
                                            <div className='flex items-center gap-1'>
                                                <Calendar />
                                                <span className='font-semibold text-sm'>
                                                    Check in :  {new Date(booking.checkIn).toDateString()}
                                                </span>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <Calendar />
                                                <span className='font-semibold text-sm'>
                                                    Check Out : {new Date(booking.checkOut).toDateString()}
                                                </span>
                                            </div>
                                        </div>
                                        <div className='w-full h-0.5 bg-slate-200' />

                                        {/* guest*/}
                                        <div className='flex items-center gap-1'>
                                            <UserRound />
                                            <span className='font-semibold text-sm'>
                                                Guest : {3} Adults
                                            </span>
                                        </div>
                                        <div className='w-full h-0.5 bg-slate-200' />
                                        {/* room */}
                                        <div className='flex items-center gap-1'>
                                            <BedDouble />
                                            <span className='font-semibold text-sm'>
                                                Room : {booking.room?.name}
                                            </span>
                                        </div>

                                        <div className='w-full h-0.5 bg-slate-200' />
                                        {/* Payment */}

                                        <div className='flex items-center gap-1'>
                                            <CreditCard />
                                            <span className='font-semibold '>
                                                Total : ${booking.totalPrice}
                                            </span>
                                        </div>
                                    </div>


                                </div>
                            </CardBody>



                        </Card>
                    ))
                }

            </div>
        </section>
    )
}

export default BookingCard
'use client'

import FiveStars from '@/components/star'
import { useGetPaymentById } from '@/hooks/use-payment'
import { useAuth } from '@/stores/auth-store'
import { useBookingStore } from '@/stores/booking-store'
import { Button, Card, CardBody, CardHeader } from '@heroui/react'
import { BedDouble, Calendar, CalendarCheck, CalendarHeart, CheckCircle2, CreditCard, Mail, Settings, UserRound } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'


const Complete = () => {

    const router = useRouter()





    return (
        <div className="px-4 py-8 space-y-6">
            <div className='flex flex-col  justify-center items-center'>
                <Button color='success' radius='full' size='lg' className='mx-auto' isIconOnly><CheckCircle2 className='text-white ' /></Button>
                {/* Heading */}
                <h1 className="text-3xl font-semibold text-success">
                    Booking Confirmed!
                </h1>
                <p>Your reservation is complete</p>
            </div>

            <div className='bg-primary-50 rounded flex gap-4 items-center p-2'>
                <Mail />
                <span>


                    <span className='font-semibold'>Thanks you, Jhon!</span>{' '}
                    your booking is now confirmed.
                    A confirmation email has been sent to {' '}
                    <span className='font-semibold'>example.com</span>
                    .
                </span>
            </div>

            {/* Booking details */}
            <Card className="" radius='sm' shadow='sm'>
                <CardHeader className='text-lg font-semibold'>
                    Booking Details
                </CardHeader>
                <CardBody>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div>
                            <Image
                                src={'/hotel-bg.png'}
                                alt='hotel background'
                                width={300}
                                height={260}
                                className='object-cover aspect-video rounded-lg'
                            />
                        </div>

                        <div className='flex-1 flex flex-col gap-2'>
                            <div>
                                <h1 className='text-lg font-bold'>Hotel name</h1>
                                <p className='text-sm'>Mandalay city </p>
                                <FiveStars count={4} />
                            </div>
                            <div className='w-full h-0.5 bg-slate-200' />

                            {/* Checkin and out */}
                            <div className='flex gap-4 '>
                                <div className='flex items-center gap-1'>
                                    <Calendar />
                                    <span className='font-semibold text-sm'>
                                        Check in :  {new Date().toDateString()}
                                    </span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <Calendar />
                                    <span className='font-semibold text-sm'>
                                        Check Out : {new Date().toDateString()}
                                    </span>
                                </div>
                            </div>
                            <div className='w-full h-0.5 bg-slate-200' />

                            {/* guest*/}
                            <div className='flex items-center gap-1'>
                                <UserRound />
                                <span className='font-semibold text-sm'>
                                    Guest : 2 Adults
                                </span>
                            </div>
                            <div className='w-full h-0.5 bg-slate-200' />
                            {/* room */}
                            <div className='flex items-center gap-1'>
                                <BedDouble />
                                <span className='font-semibold text-sm'>
                                    Room : King room
                                </span>
                            </div>

                            <div className='w-full h-0.5 bg-slate-200' />
                            {/* Payment */}

                            <div className='flex items-center gap-1'>
                                <CreditCard />
                                <span className='font-semibold '>
                                    Total : $400
                                </span>
                            </div>
                        </div>


                    </div>
                </CardBody>



            </Card>
            {/* 
            Payment info */}
            <Card radius='sm' shadow='sm' className='bg-success-50'>
                <CardBody>
                    <div className='flex gap-4 items-start '>
                        <CheckCircle2 className='size-12 text-success' />
                        <div>
                            <h2 className='font-semibold text-lg text-success'>Payment successful!</h2>
                            <p className='text-sm'>
                                Your payment has been comfrimed . We look forward to your stay.
                            </p>
                        </div>
                    </div>
                </CardBody>
            </Card>

            {/* actions sections */}
            <div className='flex flex-col gap-6 items-center py-6'>
                <h3 className='text-2xl text-center font-bold'>What's Next?</h3>
                <div className='flex flex-wrap gap-6'>
                    <Card>
                        <CardBody>
                            <div className='flex flex-col items-center gap-2'>


                                <Settings className='size-16 text-center' />
                                <h4 className='font-semibold'>
                                    Manage Booking
                                </h4>
                                <p>
                                    Make changes or request extra
                                </p>
                                <Button variant='solid' fullWidth color='primary' radius='sm' size='sm'>
                                    Modify Booking
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <div className='flex flex-col items-center gap-2'>


                                <CalendarCheck className='size-16 text-center' />
                                <h4 className='font-semibold'>
                                    View Booking
                                </h4>
                                <p>
                                    Check Booking information
                                </p>
                                <Button variant='solid' fullWidth color='primary' radius='sm' size='sm'>
                                    View Booking
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <div className='flex flex-col items-center gap-2'>


                                <CreditCard className='size-16 text-center' />
                                <h4 className='font-semibold'>
                                    Payment
                                </h4>
                                <p>
                                    Check Payment information
                                </p>
                                <Button variant='solid' fullWidth color='primary' radius='sm' size='sm'>
                                    View Payment
                                </Button>
                            </div>
                        </CardBody>
                    </Card>

                </div>

                <h5>
                    <span className='font-semibold'>
                        Need Help?
                    </span>  Our support team is 24/7 .
                    <span className='font-semibold'>

                        Contact Us
                    </span>
                </h5>
            </div>
        </div>
    )
}

export default Complete



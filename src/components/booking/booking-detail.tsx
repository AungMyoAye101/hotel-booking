import { useGetBookingById } from '@/hooks/use-booking'
import { useGetRoomById } from '@/hooks/use-room'
import { BookingRoomType } from '@/types'
import { Card, CardBody, CardHeader } from '@heroui/react'
import { BedDouble, Check, CircleDollarSign, Map, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'

type Props = {
    room: BookingRoomType,
    checkIn: string,
    checkOut: string,
    quantity: number,
    price: number

}
const BookingDetail = () => {
    const bookingId = useParams().id;
    console.log(bookingId)
    // const { data: booking, isLoading, error } = useGetBookingById(bookingId)
    // if (isLoading) {
    //     return <p>Loading...</p>
    // }

    return (
        <section className='w-full md:max-w-sm space-y-4'>

            {/* 
            <Card >
                <CardBody>

                    <div className="relative rounded-lg aspect-video w-full">
                        <Image
                            src={'/hotel-bg.png'}
                            alt="hotel photo"
                            fill

                            className='rounded-lg'
                        />
                    </div>
                    <div className='space-y-1 py-2'>
                        <h1 className='head-1'>{room.hotelId.name}</h1>

                        <p className='flex gap-1 text-sm items-center '><MapPin size={16} /> {room.hotelId.address}</p>
                        <p className='flex flex-wrap items-center  gap-1'>
                            <Map size={16} />
                            <span className='font-semibold'>

                            </span> {room.hotelId.city} city ;
                            <span className='font-semibold'>

                                {room.hotelId.country}


                            </span>
                        </p>
                    </div>

                </CardBody>
            </Card> */}

            {/* room detail  */}
            {/* 
            <Card >
                <CardHeader className='pb-0'>
                    <h1 className='font-semibold'>
                        Room Details
                    </h1>

                </CardHeader>
                <CardBody className='py-2 space-y-1'>
                    <h2 className='head-1'>{room.name}</h2>
                    <p className='flex gap-1 items-center '>  <BedDouble size={16} />Bed Type : {room.bedTypes}
                    </p>
                    <div>
                        <span className='text-warning-500 text-lg font-semibold'>$ {room.price} </span> / night
                    </div>
                </CardBody>
            </Card> */}

            {/* Booking info */}
            {/* <Card >
                <CardHeader className='pb-0'>
                    <h1 className='font-semibold'>
                        Your Booking Information
                    </h1>

                </CardHeader>
                <CardBody className='pt-2 pb-4 grid grid-cols-2 gap-2'>
                    <div className='bg-slate-200 p-2 rounded flex-col gap-2'>
                        <p>Check In </p>
                        <p className='font-semibold'>{new Date(checkIn).toDateString()}</p>
                    </div>
                    <div className='bg-slate-200 p-2 rounded flex-col gap-2'>
                        <p>Check Out </p>
                        <p className='font-semibold'>{new Date(checkOut).toDateString()}</p>
                    </div>
                    <div className='bg-slate-200 p-2 rounded flex-col gap-2'>
                        <p>Quantity </p>
                        <p className='font-semibold'>{quantity}</p>
                    </div>
                    <div className='bg-slate-200 p-2 rounded flex-col gap-2'>
                        <p>Price</p>
                        <p className='font-semibold text-warning-500'>{price * quantity} $</p>
                    </div>


                </CardBody>
            </Card> */}

            {/* Promotion */}
            {/* <Card>
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
                    </p> */}

            {/* <div className="flex gap-1 text-sm text-slate-800">
                        <CircleDollarSign />
                        You're getting the best price!
                        we guarantee it.
                    </div>
                    <div className="flex gap-1 text-sm p-2 bg-green-100 rounded">
                        <Check className="text-green-500" />
                        Free cancellation
                    </div> */}
            {/* </CardBody>
            </Card> */}

        </section >
    )
}

export default BookingDetail
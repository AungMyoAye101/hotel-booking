'use client'


import { BookingInfoType, BookingType } from "@/types"
import { Check, CircleDollarSign, DollarSign, MapPin, Star } from "lucide-react"
import Image from "next/image"
import FiveStars from "../star"
type Props = {
    booking: BookingInfoType,
    isLoading: boolean
}
const BookingInfo = ({ booking, isLoading }: Props) => {
    if (isLoading) {
        return <p>Loading,,,</p>
    }

    return (
        <div className='w-full max-w-md mx-auto bg-white rounded-lg border-2 border-slate-300 shadow-md h-fit overflow-hidden'>
            <div className="relative w-full aspect-video">


                <Image
                    src="/hotel-hero.png"
                    alt="Booking Information"
                    fill
                    className="aspect-video"
                />
                <div className="absolute left-0 bottom-0 p-2 text-white font-semibold text-shadow bg-black/10">
                    <h1 className="head-1">
                        {booking.hotel.name}
                    </h1>
                    <p className="flex items-center gap-1">
                        <MapPin size={18} />  {booking.hotel.adddress}
                    </p>
                    <FiveStars count={booking.hotel.star} />
                </div>
            </div>
            <div className="p-4 space-y-2">



                <div className="grid grid-cols-2 gap-4  place-content-between">
                    <span>Name </span>
                    <span className="font-semibold text-end"> {booking.user.name} </span>
                    <span >Check In </span>
                    <span className="font-semibold  text-end">{new Date(booking.checkIn).toDateString()}</span>

                    <span>Check Out </span>
                    <span className="font-semibold text-end">{new Date(booking.checkOut).toDateString()}</span>
                    <span>Guests </span>
                    <span className="font-semibold text-end"> 2 </span>

                    <span>Room </span>
                    <span className="font-semibold text-end">{booking.room.name} </span>

                </div>
                <div className="flex justify-between gap-4 text-lg  py-2 border-t border-slate-700">
                    <span >Total price</span>
                    <span className="font-semibold text-end text-2xl text-amber-600">$ {booking.totalPrice}</span>
                </div>


                <div className="flex gap-1 text-sm text-slate-800">
                    <CircleDollarSign />
                    You're getting the best price!
                    we guarantee it.
                </div>
                <div className="flex gap-1 text-sm p-2 bg-green-100 rounded">
                    <Check className="text-green-500" />
                    Free cancellation
                </div>


            </div>


        </div>
    )
}

export default BookingInfo
'use client'

import { Check, DollarSign, Star } from "lucide-react"
import Image from "next/image"

const BookingInfo = () => {
    return (
        <div className='max-w-lg bg-white rounded-lg border border-slate-200 shadow-md h-fit overflow-hidden'>

            <Image
                src="/hotel-hero.png"
                alt="Booking Information"
                width={320}
                height={200}
                className="aspect-video"
            />
            <div className="p-4 space-y-2">
                <h1 className="head-1">Hotel name</h1>
                <p>Downtown 2 km from hotel</p>
                <div className="flex items-center gap-1">
                    <Star fill=" oklch(79.5% 0.184 86.047)" size={16} className="text-yellow-500" />
                    <Star fill=" oklch(79.5% 0.184 86.047)" size={16} className="text-yellow-500" />
                    <Star fill=" oklch(79.5% 0.184 86.047)" size={16} className="text-yellow-500" />

                    <Star fill=" oklch(79.5% 0.184 86.047)" size={16} className="text-yellow-500" />
                    <Star fill=" oklch(79.5% 0.184 86.047)" size={16} className="text-yellow-500" />
                    <p>(120 reviews)</p>
                </div>

                <div className="flex justify-between gap-4">
                    <span>Check In </span>
                    <span>{new Date().toDateString()}</span>
                </div>
                <div className="flex justify-between gap-4">
                    <span>Check Out </span>
                    <span>{new Date().toDateString()}</span>
                </div>
                <div className="flex justify-between gap-4">
                    <span>Guests </span>
                    <span>2 </span>
                </div>
                <div className="h-0.5 w-full bg-slate-600/70 my-1"></div>
                <div className="flex justify-between gap-4">
                    <span className="text-lg font-medium">Total price</span>
                    <span className="font-semibold">$ 400</span>
                </div>
                <div className="flex justify-between gap-4">
                    <span>Taxes and fees </span>
                    <span>$15 </span>
                </div>     <div className="flex justify-between gap-4">
                    <span>Limited time offer </span>
                    <span>-$15</span>
                </div>
                <div className="flex gap-1 text-sm">
                    <DollarSign />
                    You're getting the best price! <br />
                    we guarantee it.
                </div>
                <div className="flex gap-1 text-sm">
                    <Check className="text-green-500" />
                    Free cancellation
                </div>


            </div>


        </div>
    )
}

export default BookingInfo
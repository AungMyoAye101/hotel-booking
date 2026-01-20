'use client'

import { AirVentIcon, Locate, LocateFixed, Pin, PlaneTakeoff, Pointer, Refrigerator, Star, Wifi } from "lucide-react"
import { LocaleRouteNormalizer } from "next/dist/server/normalizers/locale-route-normalizer"

import HotelReview from "./hotel-review"
import { useHotelDetail } from "@/hooks/use-hotel"
import { hotelType } from "@/types/hotel-types"
import Image from "next/image"



type Props = {
    hotel: hotelType;
}
const HotelDetails = ({ hotel }: Props) => {

    return (

        <section >
            <div className="h-screen max-w-7xl flex items-end  text-white">

                <Image
                    width={1400}
                    height={1024}
                    src={hotel.photo?.secure_url || 'hotel-bg.jfif'}

                    alt='hotel image'
                    className='  absolute h-screen inset-0 -z-20  object-center object-cover  brightness-60'
                />
                <div className="space-y-6 mb-12 px-4">
                    <h1 className="text-4xl sm:text-5xl text-white font-semibold">
                        {hotel.name}
                    </h1>
                    <div className="flex items-center">
                        {
                            Array(hotel.star).fill(0).map((_, i) => (
                                <Star fill="yellow" strokeWidth={0} key={i} />
                            ))
                        }
                        <span className="">{hotel.rating} (120 reviews)</span>
                    </div>
                    <p className="flex font-medium ">
                        <Locate /> {hotel.address}
                    </p>
                    <div className="bg-white rounded-lg p-4 text-black grid grid-cols-2 gap-4">



                        <div className="flex gap-1">
                            <Wifi /> Free Wi-Fi
                        </div>
                        <div className="flex gap-1">
                            <PlaneTakeoff /> Airport
                        </div>
                        <div className="flex gap-1">
                            <Refrigerator /> Mini Bar
                        </div>
                        <div className="flex gap-1">
                            <AirVentIcon /> Air Conditioning
                        </div>

                    </div>
                </div>


            </div>
            <div className="bg-white mt-4   py-6 flex flex-col md:flex-row gap-12 justify-between max-w-7xl px-4 md:px-0">
                <div className=" space-y-4">
                    <h1 className="head-1">Overview</h1>
                    <p className="text-balance">
                        {hotel.description}
                    </p>

                    <h1 className="head-1">Amenities highlight</h1>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex gap-1">
                            <Wifi /> Free Wi-Fi
                        </div>
                        <div className="flex gap-1">
                            <PlaneTakeoff /> Airport
                        </div>
                        <div className="flex gap-1">
                            <Refrigerator /> Mini Bar
                        </div>
                        <div className="flex gap-1">
                            <AirVentIcon /> Air Conditioning
                        </div>

                    </div>
                </div>
                <HotelReview />

            </div>
        </section>
    )
}

export default HotelDetails
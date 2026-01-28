'use client';

import { hotelType } from "@/types/hotel-types";
import { Card, CardBody, Button, Chip } from "@heroui/react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";



export default function HotelCardList({ hotels }: { hotels: hotelType[] }) {

    const containerRef = useRef<HTMLDivElement>(null);

    const handleSlide = (isRight: boolean) => {
        const container = containerRef.current;
        if (container) {
            container.scrollBy({
                left: isRight ? 400 : -400,
                behavior: 'smooth'
            })
        }

    }

    return (
        <section className="py-12 space-y-6 ">
            <h2 className="head-1 text-black">Featured stays</h2>
            <div

                className="relative "
            >
                <Button isIconOnly
                    variant='solid'
                    radius="full"
                    className="absolute left-0 top-1/2 bottom-1/2 z-10"
                    onPress={() => handleSlide(false)}
                ><ArrowLeft /></Button>
                <div
                    ref={containerRef}
                    className="flex gap-4 overflow-hidden overflow-x-scroll no-scrollbar px-4">

                    {
                        hotels.map(hotel => (
                            <Card
                                className="min-w-xs border-2 border-slate-200"
                                shadow='sm'
                                radius='sm'
                                key={hotel._id}
                            >

                                <CardBody className="p-0">
                                    <div className="relative w-full">

                                        <Image
                                            src={hotel.photo?.secure_url || '/hotel-bg.png'}
                                            alt="hotel photo"
                                            height={160}
                                            width={240}
                                            className="w-full rounded-none"
                                        />
                                    </div>
                                    <div className="px-4 py-2 space-y-1">
                                        <div className="flex justify-between">
                                            <h3 className="font-semibold truncate text-lg">{hotel.name}</h3>
                                            <Chip color='secondary' radius="sm">
                                                {hotel.rating}
                                            </Chip>

                                        </div>
                                        <p className="line-clamp-1">{hotel.address}</p>
                                        <div className="flex items-center gap-1">
                                            {
                                                Array(hotel.star).fill(null).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        fill=" oklch(79.5% 0.184 86.047)"
                                                        size={20}
                                                        strokeWidth={0}
                                                    />
                                                ))
                                            }

                                        </div>

                                        <div className="  flex items-center justify-between gap-4 ">

                                            <p>
                                                <span className="text-black font-bold text-xl">${hotel.price}</span>/night

                                            </p>


                                            <Button
                                                as={Link}
                                                href={`/hotel/${hotel._id}`}

                                                radius="sm"
                                                variant="solid"
                                                color="primary"
                                                className="py-2 mb-2 px-6">
                                                Book now <ArrowRight />
                                            </Button>
                                        </div>
                                    </div>

                                </CardBody>


                            </Card>
                        ))
                    }

                </div>
                <Button
                    isIconOnly
                    variant='solid'
                    radius="full"
                    className="absolute right-0 top-1/2 bottom-1/2 z-10"
                    onPress={() => handleSlide(true)}
                ><ArrowRight /></Button>
            </div >
        </section >

    );
}

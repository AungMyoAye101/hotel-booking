'use client';

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button, Badge } from "@heroui/react";
import { ArrowRight, Dot, DotIcon, LocateFixedIcon, LocateIcon, LocationEdit, Star } from "lucide-react";

export default function HotelCardList() {
    return (
        <section className="py-12 space-y-6 ">
            <h2 className="head-1 text-black">Featured stays</h2>
            <div className="flex gap-4 overflow-hidden overflow-x-scroll no-scrollbar ">


                {
                    Array(6).fill(null).map((_, index) => (
                        <Card className="min-w-xs border-2 border-slate-200" shadow='sm' radius='sm' key={index}>

                            <CardBody className="p-0">
                                <div className="relative w-full">

                                    <Image
                                        alt="heroui logo"
                                        height={160}
                                        radius="sm"
                                        src="/hotel-hero.png"
                                        width='100 %'
                                        className="w-full rounded-none"
                                    />
                                </div>
                                <div className="px-4 py-2 space-y-1">
                                    <div className="flex justify-between">
                                        <h3 className="font-semibold">Hotel name</h3>
                                        <Badge color="secondary">4</Badge>
                                    </div>
                                    <p>Downtown 2 km from hotel</p>
                                    <div className="flex items-center gap-1">
                                        <Star fill=" oklch(79.5% 0.184 86.047)" size={16} className="text-yellow-500" />
                                        <Star fill=" oklch(79.5% 0.184 86.047)" size={16} className="text-yellow-500" />
                                        <Star fill=" oklch(79.5% 0.184 86.047)" size={16} className="text-yellow-500" />

                                        <Star fill=" oklch(79.5% 0.184 86.047)" size={16} className="text-yellow-500" />
                                        <Star fill=" oklch(79.5% 0.184 86.047)" size={16} className="text-yellow-500" />
                                        <p>(120 reviews)</p>
                                    </div>
                                    <div className="flex items-center justify-between gap-4">

                                        <p>
                                            <span className="text-black font-bold text-xl">$150</span>/night

                                        </p>


                                        <Button size="sm" radius="full" variant="solid" color="primary" className="py-2 mb-2 px-6">
                                            Book now <ArrowRight />
                                        </Button>
                                    </div>
                                </div>

                            </CardBody>


                        </Card>
                    ))
                }
            </div >
        </section >

    );
}

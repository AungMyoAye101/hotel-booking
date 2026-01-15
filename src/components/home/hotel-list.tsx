'use client';

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button, Badge } from "@heroui/react";
import { Dot, DotIcon, LocateFixedIcon, LocateIcon, LocationEdit, Star } from "lucide-react";

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
                                <div className="px-4 py-2 space-y-2">
                                    <div className="flex justify-between">
                                        <h3 className="font-semibold">Hotel name</h3>
                                        <Badge color="secondary">4</Badge>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star fill=" oklch(79.5% 0.184 86.047)" size={16} className="text-yellow-500" />


                                        <Star fill=" oklch(79.5% 0.184 86.047)" size={16} className="text-yellow-500" />
                                        <Star fill=" oklch(79.5% 0.184 86.047)" size={16} className="text-yellow-500" />

                                        <Star fill=" oklch(79.5% 0.184 86.047)" size={16} className="text-yellow-500" />
                                        <Star fill=" oklch(79.5% 0.184 86.047)" size={16} className="text-yellow-500" />

                                    </div>

                                    <p className="text-black/90  text-sm flex gap-1">

                                        Make beautiful websites.</p>
                                    <div>
                                        <span className="font-semibold text-xl">$120</span>
                                        <span className="text-sm text-black/60"> / night</span>
                                    </div>
                                    <Button fullWidth size="sm" radius="full" variant="solid" color="primary" className="py-2 mb-2">
                                        Book now
                                    </Button>
                                </div>

                            </CardBody>


                        </Card>
                    ))
                }
            </div >
        </section >

    );
}

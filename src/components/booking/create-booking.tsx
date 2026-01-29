"use client";

import { Card, CardBody } from "@heroui/react";
import UserInfoForm from "./user-info-form";
import { Check, CircleDollarSign } from "lucide-react";
import Image from "next/image";
import { useGetRoomById } from "@/hooks/use-room";
import { useParams, useSearchParams } from "next/navigation";

const CreateBooking = () => {
    const searchParams = useSearchParams()
    const checkIn = searchParams.get('checkIn')
    const checkOut = searchParams.get('checkOut')
    const roomId = searchParams.get('room')
    const quantity = searchParams.get('quantity')
    console.log(roomId)
    const { data: room, isLoading } = useGetRoomById(roomId ?? "")
    console.log(room)
    if (isLoading) {
        return <p>loading</p>
    }
    return (
        <section className="space-y-6">
            <div>

                <h1 className="text-3xl font-semibold">Secure your booking</h1>
                <p>Complete the form below to comfirm your hotel reservation.</p>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ">
                <div className="space-y-6 ">

                    <UserInfoForm />


                    <Card className='p-4'>
                        <CardBody className='space-y-4' >
                            <div className="head-1 flex gap-2 items-center">
                                <CircleDollarSign size={26} />
                                Free Cancellation
                            </div>
                            <p>
                                Book now and pay later!
                                You can cancel your reservation free of charge up to 24 hours before check-in.
                                No hidden fees, no upfront payment required.
                            </p>
                            <p
                                className="flex gap-1 p-2 bg-green-100 rounded-sm text-sm">
                                <Check className="text-green-500" />
                                You're booking is protect by SSL encryption.
                            </p>

                        </CardBody>
                    </Card>

                </div>

                <Card>
                    <CardBody>
                        <div className="relative rounded-lg aspect-video">
                            <Image
                                src={'/hotel-bg.png'}
                                alt="hotel photo"
                                fill

                            />
                        </div>
                        <div className="space-y-4 mt-4">
                            <div className="flex justify-between gap-4">
                                <span>
                                    hotel
                                </span>
                                <span className="font-semibold">
                                    Name
                                </span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span>
                                    Room
                                </span>
                                <span className="font-semibold">
                                    {room?.name}
                                </span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span>
                                    hotel
                                </span>
                                <span className="font-semibold">
                                    Name
                                </span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span>
                                    hotel
                                </span>
                                <span className="font-semibold">
                                    Name
                                </span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span>
                                    hotel
                                </span>
                                <span className="font-semibold">
                                    Name
                                </span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span>
                                    hotel
                                </span>
                                <span className="font-semibold">
                                    Name
                                </span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span>
                                    hotel
                                </span>
                                <span className="font-semibold">
                                    Name
                                </span>
                            </div>
                        </div>
                    </CardBody>
                </Card>

            </div>

        </section>
    )
}

export default CreateBooking
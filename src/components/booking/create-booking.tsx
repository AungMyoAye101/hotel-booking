"use client";

import { Card, CardBody } from "@heroui/react";
import UserInfoForm from "./user-info-form";
import { Check, CircleDollarSign } from "lucide-react";
import Image from "next/image";
import { useGetRoomById } from "@/hooks/use-room";
import { useParams, useSearchParams } from "next/navigation";
import BookingDetail from "./booking-detail";

const CreateBooking = () => {
    const searchParams = useSearchParams()
    const checkIn = searchParams.get('checkIn')
    const checkOut = searchParams.get('checkOut')
    const roomId = searchParams.get('room')
    const quantity = searchParams.get('quantity')
    const { data: room, isLoading } = useGetRoomById(roomId ?? "")
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <section className="px-4 py-6 flex flex-col md:flex-row gap-4">
            <BookingDetail room={room!} />
            <Card className='p-4'>
                <CardBody className='space-y-4' >

                    <h1 className="text-3xl font-semibold">Secure your booking</h1>
                    <p>Complete the form below to comfirm your hotel reservation.</p>


                    <UserInfoForm
                        hotelId={room?.hotelId?._id!}
                        roomId={room?._id!}
                        checkIn={new Date(checkIn!).toISOString()}
                        checkOut={new Date(checkOut!).toISOString()}
                        quantity={Number(quantity)}
                        price={room?.price!}


                    />



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






        </section>
    )
}

export default CreateBooking
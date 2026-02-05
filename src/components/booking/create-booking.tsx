"use client";

import { Card, CardBody } from "@heroui/react";
import UserInfoForm from "./user-info-form";
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
            {/* <BookingDetail
                room={room!}
                checkIn={new Date(checkIn!).toISOString()}
                checkOut={new Date(checkOut!).toISOString()}
                quantity={Number(quantity)}
                price={room?.price!}

            /> */}
            <Card className='p-4 flex-1 h-fit'>
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


                </CardBody>
            </Card>






        </section>
    )
}

export default CreateBooking
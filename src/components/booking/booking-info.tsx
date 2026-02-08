'use client'


import { BookingInfoType, BookingType } from "@/types"
import { Check, CircleDollarSign, DollarSign, MapPin, Star } from "lucide-react"
import Image from "next/image"
import FiveStars from "../star"
import { Button, Card, CardBody, Skeleton } from "@heroui/react"
import { useGetBookingById } from "@/hooks/use-booking"
import { useParams } from "next/navigation"
import { PDFDownloadLink } from "@react-pdf/renderer"
import BookingPDF from "../ui/booking-pdf"
type Props = {
    booking: BookingInfoType,

}
const BookingInfo = () => {
    const { bookingId } = useParams()
    const { data: booking, isLoading } = useGetBookingById(bookingId as string)

    if (isLoading) {
        return <section className="flex justify-center mt-14 ">
            <div className="w-full max-w-sm">

                <Skeleton className="w-full max-w-md rounded-lg " />
                <div className="flex gap-4">
                    <Skeleton className="h-12 w-full rounded" />
                    <Skeleton className="h-12 w-full rounded" />
                </div>
            </div>
        </section>
    }

    return (
        <section className="space-y-4">


            {
                booking &&
                <>


                    <Card className="w-sm max-w-md  h-fit">
                        <CardBody>
                            <div className='  overflow-hidden'>
                                <div className="relative w-full aspect-video rounded-md">


                                    <Image
                                        src={booking.hotel?.photo?.secure_url || "/hotel-hero.png"}
                                        alt={booking.hotel?.name + "photo "}
                                        fill
                                        className="aspect-video rounded-md"
                                    />
                                    <div className="absolute left-0 bottom-0 p-2 text-white font-semibold text-shadow bg-black/10">
                                        <h1 className="head-1">
                                            {booking.hotel?.name}
                                        </h1>
                                        <p className="flex items-center gap-1">
                                            <MapPin size={18} />  {booking.hotel?.adddress}
                                        </p>
                                        <FiveStars count={booking.hotel?.star} />
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
                                        <span className="font-semibold text-end">{booking.room?.name} </span>

                                    </div>
                                    <div className="flex justify-between gap-4 text-lg  py-2 border-t border-slate-700">
                                        <span >Total price</span>
                                        <span className="font-semibold text-end text-2xl text-amber-600">$ {booking.totalPrice}</span>
                                    </div>




                                </div>


                            </div>
                        </CardBody>
                    </Card>
                    <div className="flex gap-4">

                        <Button
                            as={PDFDownloadLink}
                            document={<BookingPDF booking={booking} />}
                            fileName={booking.name + "booking.pdf"}
                            variant="solid"
                            radius="sm"
                            color="secondary"
                            fullWidth
                        >

                            Download PDF
                        </Button>




                        <Button
                            variant="solid"
                            color="primary"
                            radius="sm"
                            fullWidth
                        >
                            Update
                        </Button>
                    </div>
                </>
            }

        </section>
    )
}

export default BookingInfo
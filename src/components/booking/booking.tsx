"use client";
import { ReactNode } from "react"
import BookingDetail from "./booking-detail"
import Indicator from "./indicator"
import { useParams, useRouter } from "next/navigation";
import { useGetBookingById } from "@/hooks/use-booking";




const Booking = ({ children }: { children: ReactNode }) => {
  const bookingId = useParams().id;

  const { data: booking, isLoading, error } = useGetBookingById(bookingId as string)

  console.log(booking)
  if (isLoading) {
    return <p>loading...</p>
  }
  return (
    <section className="py-24 space-y-6 px-4">
      {
        booking && <>
          <Indicator status={booking?.status} />
          <main className="flex flex-col md:flex-row gap-6">

            <BookingDetail booking={booking} />


            <div className="flex-1">
              {
                children
              }
            </div>
          </main>
        </>
      }


    </section>
  )
}

export default Booking
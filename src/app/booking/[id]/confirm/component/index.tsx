"use client"


import { useGetBookingById } from '@/hooks/use-booking'

import { useBookingStore } from '@/stores/booking-store'

import BookingDetails from './booking-detail'
import PaymentDetailsForm from '@/components/booking/payment-details'




const ConfirmPage = () => {
    const { stage, setStage, paymentId, bookingId, confirmPayment } = useBookingStore(s => s);

    const { data: booking, isLoading, error } = useGetBookingById(bookingId!)


    if (isLoading) {
        return <p>Loading..........</p>
    }

    console.log(booking)





    // ==================Update payment status ============
    // const { mutate, isPending } = useConfirmPayment()
    // const handleSubmit = () => {
    //     if (booking && paymentId && booking.user._id) {
    //         mutate({
    //             bookingId,
    //             userId: booking.user?._id,
    //             paymentId,
    //         }, {
    //             onSuccess: (data) => {
    //                 router.push(`/booking/${bookingId}/complete`)
    //             }
    //         })
    //     }
    // }

    return (
        <section className="px-4 py-6 flex flex-col md:flex-row gap-4">
            <div className='w-full md:max-w-sm'>
                {
                    booking && (
                        <BookingDetails booking={booking} />
                    )
                }

            </div>
            <div className='flex-1 '>
                {
                    booking && booking.user._id && (
                        <PaymentDetailsForm bookingId={booking?._id} userId={booking?.user._id} amount={booking?.totalPrice} />

                    )
                }



            </div>
        </section>
    )
    // return (
    //     <div>
    //         <div className="max-w-6xl mx-auto px-4 py-6">


    //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    //                 {/* LEFT CONTENT */}
    //                 <div className="lg:col-span-2 space-y-6">
    //                     {/* Hotel Info */}
    //                     <Card className="p-4">
    //                         <div className="flex gap-4">
    //                             <Image
    //                                 src={'/hotel-bg.png'}
    //                                 alt={'hotel photo'}
    //                                 width={200}
    //                                 height={160}
    //                                 className="rounded-lg object-cover aspect-video"
    //                             />

    //                             <div className="flex-1 space-y-4">
    //                                 <h2 className="text-lg font-semibold">{booking?.hotel.name}</h2>
    //                                 <p className="text-sm text-muted flex items-center ap-1">
    //                                     <MapPin size={16} />
    //                                     {booking?.hotel.adddress},
    //                                     <span className='font-semibold'>
    //                                         {booking?.hotel.city}
    //                                     </span>

    //                                 </p>

    //                                 <FiveStars count={booking?.hotel.star || 0} />
    //                                 <p className='text-sm'>Rating <span className='font-semibold'>{booking?.hotel.rating}/10</span></p>
    //                             </div>
    //                         </div>
    //                     </Card>

    //                     {/* Stay Details */}
    //                     <Card className="p-4">
    //                         <h3 className="font-semibold mb-4">Your stay</h3>

    //                         <div className="grid grid-cols-2 gap-4 text-sm">
    //                             <div>
    //                                 <p className="text-muted">Check-in</p>
    //                                 <p className="font-semibold">
    //                                     {new Date(booking?.checkIn!).toDateString()}
    //                                 </p>
    //                             </div>

    //                             <div>
    //                                 <p className="text-muted">Check-out</p>
    //                                 <p className="font-semibold">
    //                                     {new Date(booking?.checkOut!).toDateString()}
    //                                 </p>
    //                             </div>

    //                             <div>
    //                                 <p className="text-muted">Guests</p>
    //                                 <p className="font-semibold">
    //                                     2 guest(s)
    //                                 </p>
    //                             </div>

    //                             <div>
    //                                 <p className="text-muted">Room</p>
    //                                 <p className="font-semibold">

    //                                     {
    //                                         booking?.room.name
    //                                     }
    //                                 </p>
    //                             </div>
    //                         </div>
    //                     </Card>

    //                     {/* Policy */}
    //                     <Card className="p-4 bg-success-50">
    //                         <h3 className="font-semibold mb-2">Cancellation policy</h3>
    //                         <p className="text-sm text-muted">
    //                             Free cancellation before check-in date. No refund after stay begins.
    //                         </p>
    //                     </Card>
    //                 </div>

    //                 {/* RIGHT SIDEBAR */}
    //                 <div className="lg:col-span-1">
    //                     <Card className="p-5 sticky top-24">
    //                         <h3 className="font-semibold mb-4">Price summary</h3>

    //                         <div className="space-y-3 text-sm">
    //                             <div className="flex justify-between">
    //                                 <span>Room price</span>
    //                                 <span className='font-semibold'>$ {booking?.room.price}</span>
    //                             </div>

    //                             <div className="flex justify-between">
    //                                 <span>Quantity</span>
    //                                 <span className='font-semibold'>x {booking?.quantity}</span>
    //                             </div>

    //                             <div className="flex justify-between">
    //                                 <span>Taxes & fees</span>
    //                                 <span className='font-semibold'>Included</span>
    //                             </div>

    //                             <hr />

    //                             <div className="flex justify-between font-semibold text-lg">
    //                                 <span>Total</span>
    //                                 <span className='font-semibold'>${booking?.totalPrice}</span>
    //                             </div>
    //                         </div>

    //                         <Button
    //                             isLoading={isPending}
    //                             color="primary"
    //                             radius='sm'
    //                             className="w-full mt-6"
    //                             onPress={handleSubmit}
    //                         >
    //                             Confirm & Pay
    //                         </Button>

    //                         <p className="text-xs text-muted mt-3 text-center">
    //                             You will not be charged until payment is confirmed.
    //                         </p>
    //                     </Card>
    //                 </div>
    //             </div>
    //         </div>

    //     </div>
    // )
}

export default ConfirmPage


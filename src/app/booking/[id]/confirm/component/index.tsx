"use client"
import { useConfirmPayment } from '@/hooks/use-payment'
import { useAuth } from '@/stores/auth-store'
import { useBookingStore } from '@/stores/booking-store'
import { Button } from '@heroui/button'
import { Card } from '@heroui/react'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation'
import { useEffect } from 'react'


const ConfirmPage = () => {
    const { stage, setStage, bookingId, paymentId, confirmPayment } = useBookingStore(s => s);
    const user = useAuth(s => s.user)
    const router = useRouter()
    console.log(bookingId, paymentId, stage)
    useEffect(() => {
        if (!paymentId) {
            router.push(`/booking/${bookingId}`)
        }
    }, [paymentId, router])

    const { mutate, isPending } = useConfirmPayment()
    const handleSubmit = () => {
        if (bookingId && paymentId && user?._id) {
            mutate({
                bookingId,
                userId: user?._id,
                paymentId,
            })
        }


    }
    return (
        <div>
            <div className="max-w-6xl mx-auto px-4 py-6">


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Hotel Info */}
                        <Card className="p-5">
                            <div className="flex gap-4">
                                <Image
                                    src={"/hotel-hero.png"}
                                    alt={'hotel naeme'}
                                    width={120}
                                    height={90}
                                    className="rounded-lg object-cover"
                                />

                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold">Yangon Hotel</h2>
                                    <p className="text-sm text-muted">
                                        yangon, Myanmar
                                    </p>

                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-sm font-medium">
                                            ⭐ 8
                                        </span>
                                        <span className="text-sm text-muted">
                                            (4-star hotel)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Stay Details */}
                        <Card className="p-5">
                            <h3 className="font-semibold mb-4">Your stay</h3>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-muted">Check-in</p>
                                    <p className="font-medium">
                                        {new Date().toDateString()}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-muted">Check-out</p>
                                    <p className="font-medium">
                                        {new Date().toDateString()}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-muted">Guests</p>
                                    <p className="font-medium">
                                        2 guest(s)
                                    </p>
                                </div>

                                <div>
                                    <p className="text-muted">Room</p>
                                    <p className="font-medium">
                                        {/* {typeof booking.roomId === "string"
                    ? "Standard Room"
                    : booking.roomId.name} */}
                                        Deluxe room
                                    </p>
                                </div>
                            </div>
                        </Card>

                        {/* Policy */}
                        <Card className="p-5 bg-muted/30">
                            <h3 className="font-semibold mb-2">Cancellation policy</h3>
                            <p className="text-sm text-muted">
                                Free cancellation before check-in date. No refund after stay begins.
                            </p>
                        </Card>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="lg:col-span-1">
                        <Card className="p-5 sticky top-24">
                            <h3 className="font-semibold mb-4">Price summary</h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span>Room price</span>
                                    <span>$ 300</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Guests</span>
                                    <span>x 2</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Taxes & fees</span>
                                    <span>Included</span>
                                </div>

                                <hr />

                                <div className="flex justify-between font-semibold text-base">
                                    <span>Total</span>
                                    <span>$1000</span>
                                </div>
                            </div>

                            <Button
                                isLoading={isPending}
                                color="primary"
                                size="lg"
                                className="w-full mt-6"
                                onPress={handleSubmit}
                            >
                                Confirm & Pay
                            </Button>

                            <p className="text-xs text-muted mt-3 text-center">
                                You will not be charged until payment is confirmed.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ConfirmPage


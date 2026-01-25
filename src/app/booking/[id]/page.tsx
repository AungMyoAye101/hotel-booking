
import BookingInfo from "@/components/booking/booking-info"
import PaymentDetailsForm from "@/components/booking/payment-details"
import UserInfoForm from "@/components/booking/user-info-form"
import { useBookingStore } from "@/stores/booking-store"
import { BadgeDollarSign, Check } from "lucide-react"

const page = () => {

    return (
        <section >
            <div>

                <h1 className="text-3xl font-semibold">Secure your booking</h1>
                <p>Complete the form below to comfirm your hotel reservation.</p>
            </div>


            <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6 ">

                    <UserInfoForm />
                    <PaymentDetailsForm />
                    <div className="bg-white p-6 rouded-lg shadow-md border border-slate-200  space-y-4">

                        <div className="head-1 flex gap-2 items-center">
                            <BadgeDollarSign fill="yellow" size={26} />
                            Free Cancellation
                        </div>
                        <p>
                            Book now and pay later!
                            You can cancel your reservation free of charge up to 24 hours before check-in.
                            No hidden fees, no upfront payment required.
                        </p>
                        <p className="flex gap-1"><Check className="text-green-500" /> You're booking is protect by SSL encryption.</p>
                    </div>
                </div>

                <BookingInfo />
            </div>

        </section>
    )
}

export default page
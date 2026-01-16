import BookingInfo from "@/components/booking/booking-info"
import PaymentDetailsForm from "@/components/booking/payment-details"
import UserInfoForm from "@/components/booking/user-info-form"
import { BadgeDollarSign, Check } from "lucide-react"

const page = () => {
    return (
        <section className="py-24 space-y-6 ">
            <div>

                <h1 className="text-3xl font-semibold">Secure your booking</h1>
                <p>Complete the form below to comfirm your hotel reservation.</p>
            </div>
            <div className="flex flex-col  md:flex-row gap-6  ">

                <div className="space-y-6">



                    <UserInfoForm />
                    <PaymentDetailsForm />
                    <div className="bg-white p-6 rouded-lg shadow-md border border-slate-200 max-w-lg space-y-4">

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
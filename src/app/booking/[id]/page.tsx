import Payment from "@/components/payment"

type ParamsType = {
    id: string
}
const page = async ({ params }: { params: Promise<ParamsType> }) => {
    const bookingId = (await params).id

    return (
        <>
            <Payment bookingId={bookingId} />
        </>
    )
}

export default page
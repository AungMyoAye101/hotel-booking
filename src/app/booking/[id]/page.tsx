import Payment from "@/components/payment"

type ParamsType = {
    id: string
}
const page = async ({ params }: { params: Promise<ParamsType> }) => {
    const bookingId = (await params).id
    if (!bookingId) return;

    return (
        <>
            <Payment bookingId={bookingId} />
        </>
    )
}

export default page
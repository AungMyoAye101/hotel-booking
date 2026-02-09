
import AvaliableRooms from "@/components/hotel/avaliable-rooms";
import HotelDetails from "@/components/hotel/hotel-details";
import { serverFetch } from "@/hooks/api";
import { APIResponse } from "@/types";
import { hotelType } from "@/types/hotel-types";




type Params = {
    hotelId: string;
}

const page = async ({ params }: { params: Promise<Params> }) => {

    const hotelId = (await params).hotelId;

    const data = await serverFetch<APIResponse<{ hotel: hotelType }>>('/hotel/' + hotelId)


    return (
        <section className="p-4">
            <HotelDetails hotel={data.result.hotel} />
            <AvaliableRooms hotelId={hotelId} />
        </section>
    )
}

export default page;






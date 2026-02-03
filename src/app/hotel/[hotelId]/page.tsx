
import AvaliableRooms from "@/components/hotel/avaliable-rooms";
import HotelDetails from "@/components/hotel/hotel-details";
import { Hotel } from "@/components/hotel/hotel-review";
import { serverFetch } from "@/hooks/api";
import api from "@/hooks/axios-api";
import { useHotelDetail } from "@/hooks/use-hotel";
import { APIResponse } from "@/types";
import { hotelType } from "@/types/hotel-types";
import { useQuery } from "@tanstack/react-query";
import { resolveSoa } from "dns";



type Params = {
    hotelId: string;
}

const page = async ({ params }: { params: Promise<Params> }) => {

    const hotelId = (await params).hotelId;

    const data = await serverFetch<APIResponse<{ hotel: hotelType }>>('/hotel/' + hotelId)
    console.log(data);

    return (
        <section className="p-4">

            <HotelDetails hotel={data.result.hotel} />
            <AvaliableRooms hotelId={hotelId} />
        </section>
    )
}

export default page;






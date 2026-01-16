import AvaliableRooms from "@/components/hotel/avaliable-rooms";
import HotelDetails from "@/components/hotel/hotel-details";

type Params = {
    hotelId: string;
}

const page = async ({ params }: { params: Promise<Params> }) => {
    const hotelId = (await params).hotelId;
    console.log("HotelDetail rendered", hotelId);
    return (
        <>
            <HotelDetails />
            <AvaliableRooms />
        </>
    )
}

export default page
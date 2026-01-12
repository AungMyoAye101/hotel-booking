type Params = {
    hotelId: string;
}

const HotelDetail = async ({ params }: { params: Promise<Params> }) => {
    const hotelId = (await params).hotelId;
    console.log("HotelDetail rendered", hotelId);
    return (
        <div>HotelDetail </div>
    )
}

export default HotelDetail 
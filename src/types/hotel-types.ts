export type hotelTypes = "hotel" | "motel" | "guest-house"

export type hotelType = {
    _id: string,
    name: string,
    description: string,
    rating: number,
    star: number,
    type: hotelTypes,
    address: string,
    price: number,
    amenities: string[],
    city: string,
    country: string,
    createdAt: Date,
    photo?: photoType
}
export type photoType = {
    _id: string,
    secure_url: string,
    public_id: string,

}
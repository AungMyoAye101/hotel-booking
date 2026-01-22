"use client";

import { useSearchParams } from "next/navigation";
import SideBar from "./filter-sidebar";
import HotelCard from "./hotel-card"

const hotel = {
    name: "Yangon",
    address: "balabla",
    photo: null,
    star: 4,
    rating: 8,
    price: 200
}
const Search = () => {
    const searchParams = useSearchParams()
    return (
        <section className="min-h-screen ">
            <div className="flex gap-6">
                <div className="max-w-xs">

                    <SideBar searchParams={searchParams} />
                </div>
                <div className="flex-1 flex flex-col gap-4">

                    <HotelCard hotel={hotel} />
                    <HotelCard hotel={hotel} />
                    <HotelCard hotel={hotel} />
                    <HotelCard hotel={hotel} />
                    <HotelCard hotel={hotel} />
                </div>
            </div>
        </section>
    )
}

export default Search
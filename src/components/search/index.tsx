"use client";

import { useRouter, useSearchParams } from "next/navigation";
import SideBar from "./filter-sidebar";
import HotelCard from "./hotel-card"


const hotel = {
    name: "Yangon",
    _id: "ssss",
    address: "balabla",
    photo: null,
    star: 4,
    rating: 8,
    price: 200,
    city: 'ffff',
    description: "ffff",
    country: 'dd',
    type: "hotel",
    amenities: [''],
    createdAt: new Date(),
    updatedAt: new Date()
}
const Search = () => {
    const searchParams = useSearchParams()
    const router = useRouter();
    const updateParams = (key: string, value?: string | string[]) => {
        const params = new URLSearchParams(searchParams.toString());

        if (!value || (Array.isArray(value) && value.length === 0)) {
            params.delete(key);
        } else if (Array.isArray(value)) {
            params.delete(key);
            value.forEach(v => params.append(key, v));
        } else {
            params.set(key, value);
        }
        router.replace(`/hotel?${params.toString()}`, { scroll: false });
    }
    return (
        <section className="min-h-screen ">
            <div className="flex gap-6">
                <div className="max-w-xs">

                    <SideBar searchParams={searchParams} updateParams={updateParams} />
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
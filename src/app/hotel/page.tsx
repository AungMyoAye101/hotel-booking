import Search from "@/components/search"
import { serverFetch } from "@/hooks/api"
import { APIResponse } from "@/types"
import { hotelType } from "@/types/hotel-types"
import { url } from "inspector"


type HotelQueryProps = {
    destination?: string,
    minPrice?: number,
    maxPrice?: number,
    priceOrder?: 'asc' | 'desc'
    ratingOrder?: 'asc' | 'desc',
    star?: string | string[]

}

const page = async ({ searchParams }: { searchParams: Promise<HotelQueryProps> }) => {
    const params = await searchParams;


    const urlParams = new URLSearchParams();
    if (params.destination?.trim()) {
        urlParams.set('destination', params.destination);
    } else {
        urlParams.delete('destination');
    }

    urlParams.set('minPrice', String(params.minPrice ?? 100),);
    urlParams.set('maxPrice', String((params.maxPrice ?? 500)));
    urlParams.set('priceOrder', params.priceOrder ?? "asc");
    urlParams.set('ratingOrder', params.ratingOrder ?? "asc");
    urlParams.delete('star');
    if (Array.isArray(params.star)) {
        params.star.forEach(star => {
            urlParams.append("stars", star.toString())
        })
    }

    const data = await serverFetch<APIResponse<{ hotels: hotelType[] }>>(`/hotel?${urlParams.toString()}`);


    return (
        <section className="py-20 px-4">
            <Search hotels={data.result.hotels} />
        </section>
    )
}

export default page
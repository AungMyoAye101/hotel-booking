import Search from "@/components/search"
import { serverFetch } from "@/hooks/api"
import { APIResponse } from "@/types"
import { hotelType } from "@/types/hotel-types"
import { de } from "zod/locales"

type HotelQueryProps = {
    desitination?: string,
    minPrice?: number,
    maxPrice?: number,
    priceOrder?: 'asc' | 'desc'
    ratingOrder?: 'asc' | 'desc',
    star?: string | string[]

}

const page = async ({ searchParams }: { searchParams: Promise<HotelQueryProps> }) => {
    const params = await searchParams;
    const query = {
        desitination: params.desitination ?? "",
        minPrice: Number(params.minPrice ?? 100),
        maxPrice: Number(params.maxPrice ?? 500),
        priceOrder: params.priceOrder ?? 'asc',
        ratingOrder: params.ratingOrder ?? 'desc',
        stars: Array.isArray(params.star) ? params.star : params.star ? [params.star] : []

    };

    const urlParams = new URLSearchParams();
    urlParams.set('desitination', query.desitination);
    urlParams.set('minPrice', String(query.minPrice));
    urlParams.set('maxPrice', String(query.maxPrice));
    urlParams.set('priceOrder', query.priceOrder);
    urlParams.set('ratingOrder', query.ratingOrder);
    query.stars.forEach(s => urlParams.append('stars', s));

    const data = await serverFetch<APIResponse<{ hotels: hotelType[] }>>(`/hotel?${urlParams.toString()}`);


    return (
        <section className="py-20 px-4">
            <Search hotels={data.result.hotels} />
        </section>
    )
}

export default page

import HotelCardList from "@/components/home/hotel-list";
import Destination from "@/components/home/destination";
import Hero from "@/components/home/hero";
import Promotion from "@/components/home/promotion";
import About from "@/components/home/about";
import Testmonial from "@/components/home/testmonial";
import { serverFetch } from "@/hooks/api";
import { APIResponse } from "@/types";
import { hotelType } from "@/types/hotel-types";


export default async function Home() {
  const data = await serverFetch<APIResponse<{ hotels: hotelType[] }>>('/hotel')

  return (
    <section className="max-w-7xl mx-auto px-4">
      <Hero />
      <About />
      <Destination />
      <HotelCardList hotels={data.result.hotels} />
      <Promotion />
      <Testmonial />
    </section>
  );
}

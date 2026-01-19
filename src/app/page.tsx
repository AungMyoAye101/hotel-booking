
import HotelCardList from "@/components/home/hotel-list";
import Destination from "@/components/home/destination";
import Hero from "@/components/home/hero";
import Promotion from "@/components/home/promotion";
import About from "@/components/home/about";
import Testmonial from "@/components/home/testmonial";
import { refresh, serverFetch } from "@/hooks/api";
import { APIResponse } from "@/types";
import { hotelType } from "@/types/hotel-types";
import { cookies } from "next/headers";


export default async function Home() {
  // const token = await refresh();
  const cookieStore = await cookies();
  const token = cookieStore.get("refresh_token")?.value;
  console.log("Home token:", token);
  const data = await serverFetch<APIResponse<{ hotels: hotelType[] }>>('/hotel')
  await refresh();
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

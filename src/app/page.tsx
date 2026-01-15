
import HotelCardList from "@/components/home/hotel-list";
import Destination from "@/components/home/destination";
import Hero from "@/components/home/hero";
import Promotion from "@/components/home/promotion";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <Hero />
      <Destination />
      <HotelCardList />
      <Promotion />
    </section>
  );
}


import HotelCardList from "@/components/home/card";
import Destination from "@/components/home/destination";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <section>
      <Hero />
      <Destination />
      <HotelCardList />
    </section>
  );
}

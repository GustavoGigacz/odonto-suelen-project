import CustomerReview from "./components/home/CustomersReviews";
import Hero from "./components/home/Hero";
import Values from "./components/home/Values";
import Service from "@/app/components/home/OurServices";

export default function Home() {
  return (
    <main>
      <Hero />
      <CustomerReview />
      <Values />
      <Service />
    </main>
  );
}

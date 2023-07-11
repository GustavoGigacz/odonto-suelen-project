import ContactUs from "./components/home/ContactUs";
import CustomerReview from "./components/home/CustomersReviews";
import Hero from "./components/home/Hero";
import Maps from "./components/home/Maps";
import OurAttendment from "./components/home/OurAttendment";
import Values from "./components/home/Values";
import Service from "@/app/components/home/OurServices";

export default function Home() {
  return (
    <main>
      <Hero />
      <CustomerReview />
      <Values />
      <Service />
      <OurAttendment />
      <Maps />
      <ContactUs />
    </main>
  );
}

import HeroBanner from "@/components/HeroBanner";
import MonthlyMenu from "@/components/MonthlyMenu";
import HowToOrder from "@/components/HowToOrder";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <MonthlyMenu />
      <HowToOrder />
      <AboutUs />
    </>
  );
}

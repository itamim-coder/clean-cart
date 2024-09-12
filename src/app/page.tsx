import Categories from "@/components/Categories/Categories";
import FlashSale from "@/components/FlashSale/FlashSale";
import TopeRated from "@/components/TopRated/TopeRated";
import AnimatedText from "@/components/ui/AnimatedText";
import Container from "@/components/ui/Container";
import HeroSlider from "@/components/ui/HeroSlider";
import NavBar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <div className="">
        <HeroSlider />
      </div>
      <Container>
        <FlashSale />

        <Categories />
        <TopeRated />
      </Container>
    </div>
  );
}

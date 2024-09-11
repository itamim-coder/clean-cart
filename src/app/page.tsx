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
        <div>
          {" "}
          <h1 className="text-xl animate-flip-down">
            Whereas disregard and contempt for human rights have resulted
          </h1>
          <AnimatedText text="animated text with framer-motion"/>
        </div>
      </Container>
    </div>
  );
}

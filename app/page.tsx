import About from "@/components/Home/About";
import Certifications from "@/components/Home/Certifications";
import Industries from "@/components/Home/Industries";
import Products from "@/components/Home/Products";
import DynamicHero from "@/components/Reusable/DynamicHero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <DynamicHero
        mediaType="video"
        mediaSrc="/bg.mp4"
        title="Powering Progress"
        subtitle="Driving Change"
        description="Built with breakthrough engineering and a legacy of trust. Explore Adwin's cutting-edge solutions across power storage, electric mobility, and energy-efficient lighting."
        buttonText="Know more"
        buttonLink="/about"
      />
      <About />
      <Products />
      <Industries />
      <Certifications />
    </div>
  );
}

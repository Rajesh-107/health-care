import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import { Button } from "@mui/material";
import Specialist from "../Specialist/Specialist";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctor/TopRatedDoctors";
import WhyUs from "@/components/UI/HomePage/Whyus/WhyUs";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Specialist />
      {/* <TopRatedDoctors /> */}
      <WhyUs />
    </div>
  );
};

export default page;
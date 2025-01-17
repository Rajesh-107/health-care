import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import { Button } from "@mui/material";
import Specialist from "../Specialist/Specialist";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctor/TopRatedDoctors";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
    </div>
  );
};

export default page;
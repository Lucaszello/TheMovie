import { Box } from "@mantine/core";
import HeroSection from "./Home/HeroSection";
import Popular from "./Popular/Popular";
import UpComing from "./UpComing/UpComing";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Popular />
      <UpComing />
    </div>
  );
};

export default Home;

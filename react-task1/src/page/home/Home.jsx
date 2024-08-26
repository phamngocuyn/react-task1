import { BannerProvider } from "../../context/BannerContext";
import Banner from "./banner/Banner";
import "./Home.scss"
import Slider from "./slider/Slider";

const Home = () => {
  return (
    <>
      <BannerProvider>
        <Banner />
        <Slider />
      </BannerProvider>
    </>
  );
}

export default Home;

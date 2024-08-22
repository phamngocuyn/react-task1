import Header from "@/components/header/Heder";
import Banner from "./banner/Banner";
import "./Home.scss"
import Slider from "./slider/Slider";

const Home = () => {
  return (
    <>
        <Header />
        <Banner />
        <Slider />
    </>
  );
}

export default Home;

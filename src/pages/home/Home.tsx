import { FC } from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Advertisement from "../../components/advertisement/Advertisement";
import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";

const Home: FC = () => {
  return <div>
    <Header/>
    <Hero/>
    <Advertisement/>
    <Products/>
    <Footer/>
  </div>;
};

export default Home;

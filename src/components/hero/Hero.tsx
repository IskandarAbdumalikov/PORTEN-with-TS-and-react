import { FC } from "react";
import "./hero.scss";

const Hero: FC = () => {
  return (
    <div id="hero" className="huge__container">
      <div className="hero">
        <div className="hero__top">
          <h1>PORTEN</h1>
          <h3>санкт-петербург</h3>
        </div>
        <div className="hero__bottom">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            interdum purus, est tortor  <br /> pulvinar ut in. Fringilla a diam enim sed
            justo, sed iaculis sagittis. Tortor id eu interdum <br /> nec ut iaculis.
            Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. <br />
            Tortor nibh magna feugiat id nunc, dui nisl viverra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

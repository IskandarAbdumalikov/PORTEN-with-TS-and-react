import axios from "axios";
import { FC, useEffect, useState } from "react";
import adsRight from "../../assets/adsTopRight.jpg";
import adsLeft from "../../assets/adsBottomLeft.jpg";
import "./advertisement.scss";

const Advertisement: FC = () => {
  let [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=3")
      .then((res) => setData(res?.data?.products));
  }, []);

  return (
    <div className="huge__container adv">
      <div className="adv__top__left">
        <h2>СЕЗОН 2020/21</h2>
        <div className="adv__cards">
          {data?.map(
            (el: any): JSX.Element => (
              <div className="ads__card" key={el.id}>
                <img src={el.thumbnail} alt="" />
                <div className="ads__card__info">
                  <h2>{el.title}</h2>
                  <p>${el.price}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="adv__top__right">
        <div className="adv__top__right__menu">
          <h2>Новая коллекция</h2>
          <button>Каталог</button>
        </div>
        <img src={adsRight} alt="" />
      </div>
      <div className="adv__bottom__left">
        <img src={adsLeft} alt="" />
      </div>
      <div className="adv__bottom__right">
        <h2>коллекция 2018</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum
          ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis
          nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna
          consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus
          facilisi habitasse ipsum interdum dictum aliquet. Velit quis
          ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra
          nulla nullam natoque volutpat curabitur auctor. Viverra viverra
          ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam
          egestas leo orci pharetra sed diam.{" "}
        </p>
        <button>посмотреть коллекцию</button>
      </div>
    </div>
  );
};

export default Advertisement;

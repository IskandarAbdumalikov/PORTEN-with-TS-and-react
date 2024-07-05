import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import './products.scss'

const Products: FC = () => {
  let [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=8")
      .then((res) => setData(res?.data?.products));
  }, []);
  return (
    <div className="container products">
      <h2 className="h2">новые поступления</h2>
      <div className="products__cards">
        {data?.map(
          (el: any): JSX.Element => (
            <div className="products__card" key={el.id}>
              <img src={el.thumbnail} alt="" />
              <div className="products__card__info">
                <h2>{el.title}</h2>
                <p>${el.price}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Products;

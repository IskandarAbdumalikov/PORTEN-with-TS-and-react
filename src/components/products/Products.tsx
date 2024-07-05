import axios from "axios";
import { FC, useEffect, useState } from "react";
import "./products.scss";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const Products: FC = () => {
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=8")
      .then((res) => setData(res.data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="container products">
      <h2 className="h2">новые поступления</h2>
      <div className="products__cards">
        {data?.map((el) => (
          <div className="products__card" key={el.id}>
            <img src={el.thumbnail} alt={el.title} />
            <div className="products__card__info">
              <h2>{el.title}</h2>
              <p>${el.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

import React, { useState, useEffect } from "react";
import { API } from "../backend";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const laoadAllProducts = () =>
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });

  useEffect(() => {
    laoadAllProducts();
  }, []);

  return (
    <Base title="" description="The T-Shirt Store">
      <div className="row text-center">
        {/* <h1>All of the T-Shirts</h1> */}
        {products &&
          products.map((product, index) => (
            <div key={index} className="col-md-4 mb-4">
              <Card product={product} />
            </div>
          ))}
      </div>
    </Base>
  );
};

export default Home;

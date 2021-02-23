import React, { useState, useEffect } from "react";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import { getProducts } from "./helper/coreapicalls";
import StripeCheckout from "./StripeCheckout";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  const loadAllProducts = (products) => {
    return (
      <div>
        <h2>Products in Cart</h2>
        {products &&
          products.map((product, index) => (
            <Card
              key={index}
              product={product}
              removeFromCart={true}
              addToCart={false}
              setReload={setReload}
              reload={reload}
            />
          ))}
      </div>
    );
  };

  const loadCheckout = () => {
    return (
      <div>
        <h2>This section is for checkout</h2>
      </div>
    );
  };

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  return (
    <Base title="Cart Page" description="Ready to checkout">
      <div className="row text-center">
        <div className="col-md-6">{loadAllProducts(products)}</div>
        <div className="col-md-6">
          {products && (
            <StripeCheckout products={products} setReload={setReload} />
          )}
        </div>
      </div>
    </Base>
  );
};

export default Cart;

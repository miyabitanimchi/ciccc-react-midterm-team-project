import React from "react";

const CartItem = (props) => {
  const { product, size, color, quantity } = props;
  console.log(props);
  return (
    <>
      <p>Hello Taichi and Kit</p>
      <h3>{product[0].title}</h3>
      <img
        style={{ width: "300px" }}
        src={product[0].image}
        alt={product[0].title}
      />
      <p>{size}</p>
      <p>{color}</p>
      <p>{quantity}</p>
    </>
  );
};

export default CartItem;

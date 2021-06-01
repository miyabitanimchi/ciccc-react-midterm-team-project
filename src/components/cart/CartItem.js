import React from "react";
import { IoMdClose } from "react-icons/io";
import "./CartItem.scss";

const CartItem = (props) => {
  const { product, size, color, quantity } = props;

  const removeProduct = (id) => {
    console.log(id);
    props.handleFunc(id);
  };
  return (
    <div className="product-container">
      <div className="img-wrap">
        <img src={product[0].image} alt={product[0].title} />
      </div>
      <div className="product-info-wrap">
        <h3 className="title">{product[0].title}</h3>
        <p className="size">Size: {size}</p>
        <p className="color">Colour: {color}</p>
        <p className="quantity">Quantity: {quantity}</p>
        <p className="subtotal">Subtotal: ${product[0].price}</p>
      </div>
      <IoMdClose
        className="close-icon"
        onClick={() => removeProduct(product[0].id)}
      />
    </div>
  );
};

export default CartItem;

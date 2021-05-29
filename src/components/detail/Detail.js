// import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useProductsContext } from "../../context/products-context";
import "./Detail.scss";

const Detail = (props) => {
  props = 2;

  const { products } = useProductsContext();
  console.log(products);

  const clickedProduct = products.filter((product) => product.id === props);
  console.log(clickedProduct);

  return (
    <main>
      {/* products...state */}
      {products.length !== 0 && (
        <div className="detail-container">
          <div className="img-wrap">
            <img src={clickedProduct[0].image} alt={clickedProduct[0].title} />
          </div>
          <div className="description-wrap">
            <h3 className="product-name">{clickedProduct[0].title}</h3>
            <p className="category">{clickedProduct[0].category}</p>
            <span className="rating-star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </span>
            <p>Price:</p>
            <p className="price">${clickedProduct[0].price}</p>
            <p>Size:</p>
            <div className="size-wrap">
              <input className="size-btn" type="submit" value="XXS" />
              <input className="size-btn" type="submit" value="XS" />
              <input className="size-btn" type="submit" value="S" />
              <input className="size-btn" type="submit" value="M" />
              <input className="size-btn" type="submit" value="L" />
              <input className="size-btn" type="submit" value="XL" />
              <input className="size-btn" type="submit" value="XXL" />
            </div>
            <p className="description">{clickedProduct[0].description}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Detail;

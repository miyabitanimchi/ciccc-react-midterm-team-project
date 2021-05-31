import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useProductsContext } from "../../context/products-context";
import "./Detail.scss";

const Detail = (props) => {
  props = 14;
  const { products } = useProductsContext();
  const [detail, setDetail] = useState([]);
  const [chosenSize, setChosenSize] = useState("");
  const [chosenColor, setChosenColor] = useState("");
  // information which will be saved in Cart
  const chosenProductInfo = {
    product: detail[0],
    size: chosenSize,
    color: chosenColor,
  };
  console.log(chosenProductInfo);
  console.log(detail);
  console.log(chosenSize);
  console.log(chosenColor);

  const filterChosenProduct = () => {
    const chosenProduct = products.filter((product) => product.id === props);
    setDetail(chosenProduct);
  };

  const showChosenSize = (val) => {
    setChosenSize(val);
  };

  const showChosenColor = (val) => {
    setChosenColor(val);
  };

  useEffect(() => {
    filterChosenProduct();
  }, [products]);

  return (
    <main>
      {detail.length !== 0 && (
        <div className="detail-container">
          <div className="img-wrap">
            <img src={detail[0].image} alt={detail[0].title} />
          </div>
          <div className="description-wrap">
            <p className="category">{detail[0].category}</p>
            <h2 className="product-name">{detail[0].title}</h2>
            <span className="rating-star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </span>
            <p>Price:</p>
            <p className="price">${detail[0].price}</p>
            <p className="description">{detail[0].description}</p>
            <p className="size">
              Size: <span>{chosenSize}</span>
            </p>
            <div className="size-wrap">
              <input
                className="size-btn"
                type="submit"
                value="XXS"
                onClick={(e) => showChosenSize(e.target.value)}
              />
              <input
                className="size-btn"
                type="submit"
                value="XS"
                onClick={(e) => showChosenSize(e.target.value)}
              />
              <input
                className="size-btn"
                type="submit"
                value="S"
                onClick={(e) => showChosenSize(e.target.value)}
              />
              <input
                className="size-btn"
                type="submit"
                value="M"
                onClick={(e) => showChosenSize(e.target.value)}
              />
              <input
                className="size-btn"
                type="submit"
                value="L"
                onClick={(e) => showChosenSize(e.target.value)}
              />
              <input
                className="size-btn"
                type="submit"
                value="XL"
                onClick={(e) => showChosenSize(e.target.value)}
              />
              <input
                className="size-btn"
                type="submit"
                value="XXL"
                onClick={(e) => showChosenSize(e.target.value)}
              />
            </div>
            <p>
              Colour: <span>{chosenColor}</span>
            </p>
            <div className="color-wrap">
              <input
                className="color-btn beige"
                type="submit"
                value="beige"
                onClick={(e) => showChosenColor(e.target.value)}
              />
              <input
                className="color-btn navy"
                type="submit"
                value="navy"
                onClick={(e) => showChosenColor(e.target.value)}
              />
              <input
                className="color-btn gray"
                type="submit"
                value="gray"
                onClick={(e) => showChosenColor(e.target.value)}
              />
              <input
                className="color-btn black"
                type="submit"
                value="black"
                onClick={(e) => showChosenColor(e.target.value)}
              />
              <input
                className="color-btn brown"
                type="submit"
                value="brown"
                onClick={(e) => showChosenColor(e.target.value)}
              />
              <input
                className="color-btn off-white"
                type="submit"
                value="white"
                onClick={(e) => showChosenColor(e.target.value)}
              />
            </div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Detail;

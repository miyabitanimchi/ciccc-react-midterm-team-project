import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useProductsContext } from "../../context/products-context";

import "./Detail.scss";

const storedProducts = JSON.parse(localStorage.getItem("addedProductsArr"));

const Detail = (props) => {
  const { products } = useProductsContext();
  const [chosenProductInfo, setchosenProductInfo] = useState({
    product: [],
    size: "",
    color: "",
    quantity: 1,
  });
  const [addedProductsArr, setAddedProductsArr] = useState(
    storedProducts || []
  );

  const filterChosenProduct = () => {
    const chosenProduct = products.filter(
      (product) => product.id === Number(props.match.params.id)
    );
    setchosenProductInfo({ ...chosenProductInfo, product: chosenProduct });
  };

  const showChosenSize = (targetedEl) => {
    // targetedEl.classList.add("selected-size");
    setchosenProductInfo({ ...chosenProductInfo, size: targetedEl.value });
  };

  const showChosenColor = (targetedEl) => {
    setchosenProductInfo({ ...chosenProductInfo, color: targetedEl.value });
  };

  const changeQuantity = (selectedQuantity) => {
    setchosenProductInfo({ ...chosenProductInfo, quantity: selectedQuantity });
  };

  useEffect(() => {
    filterChosenProduct();
  }, [products]);

  const addToCart = () => {
    // for loaclStorage
    console.log("add cart is clicked");
    setAddedProductsArr((addedProductsArr) => {
      return [...addedProductsArr, chosenProductInfo];
    });
    console.log(chosenProductInfo);
  };

  useEffect(() => {
    localStorage.setItem("addedProductsArr", JSON.stringify(addedProductsArr));
  }, [addedProductsArr]);
  console.log(addedProductsArr);

  return (
    <main>
      {chosenProductInfo.product.length !== 0 && (
        <div className="detail-container">
          <div className="img-wrap">
            <img
              src={chosenProductInfo.product[0].image}
              alt={chosenProductInfo.product[0].title}
            />
          </div>
          <div className="description-wrap">
            <p className="category">{chosenProductInfo.product[0].category}</p>
            <h2 className="product-name">
              {chosenProductInfo.product[0].title}
            </h2>
            <span className="rating-star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </span>
            <p className="price-title">Price:</p>
            <p className="price">${chosenProductInfo.product[0].price}</p>
            <p className="description">
              {chosenProductInfo.product[0].description}
            </p>
            <p className="size-title">
              Size: <span>{chosenProductInfo.size}</span>
            </p>
            <div className="size-wrap">
              <input
                className="size-btn"
                type="submit"
                value="XXS"
                onClick={(e) => showChosenSize(e.target)}
              />
              <input
                className="size-btn"
                type="submit"
                value="XS"
                onClick={(e) => showChosenSize(e.target)}
              />
              <input
                className="size-btn"
                type="submit"
                value="S"
                onClick={(e) => showChosenSize(e.target)}
              />
              <input
                className="size-btn"
                type="submit"
                value="M"
                onClick={(e) => showChosenSize(e.target)}
              />
              <input
                className="size-btn"
                type="submit"
                value="L"
                onClick={(e) => showChosenSize(e.target)}
              />
              <input
                className="size-btn"
                type="submit"
                value="XL"
                onClick={(e) => showChosenSize(e.target)}
              />
              <input
                className="size-btn"
                type="submit"
                value="XXL"
                onClick={(e) => showChosenSize(e.target)}
              />
            </div>
            <p className="color-title">
              Colour: <span>{chosenProductInfo.color}</span>
            </p>
            <div className="color-wrap">
              <input
                className="color-btn beige"
                type="submit"
                value="Beige"
                onClick={(e) => showChosenColor(e.target)}
              />
              <input
                className="color-btn navy"
                type="submit"
                value="Navy"
                onClick={(e) => showChosenColor(e.target)}
              />
              <input
                className="color-btn gray"
                type="submit"
                value="Gray"
                onClick={(e) => showChosenColor(e.target)}
              />
              <input
                className="color-btn black"
                type="submit"
                value="Black"
                onClick={(e) => showChosenColor(e.target)}
              />
              <input
                className="color-btn brown"
                type="submit"
                value="Brown"
                onClick={(e) => showChosenColor(e.target)}
              />
              <input
                className="color-btn off-white"
                type="submit"
                value="Off-white"
                onClick={(e) => showChosenColor(e.target)}
              />
            </div>
            <div className="quantity-wrap">
              <p className="quantity-title">Quantity: </p>
              <select
                name="quantity"
                onChange={(e) => changeQuantity(Number(e.target.value))}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <button
              className="add-to-cart-btn"
              disabled={
                chosenProductInfo.size && chosenProductInfo.color ? false : true
              }
              onClick={() => addToCart()}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Detail;

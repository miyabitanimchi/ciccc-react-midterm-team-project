import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useProductsContext } from "../../context/products-context";
import { useAuthContext } from "../../context/auth-context";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./Detail.scss";

const Detail = (props) => {
  const { products } = useProductsContext();
  const { user } = useAuthContext();

  const [chosenProductInfo, setchosenProductInfo] = useState({
    product: [],
    productUid: uuidv4(),
    size: "",
    color: "",
    quantity: 1,
    subTotal: 0,
  });
  const [addedProductsArr, setAddedProductsArr] = useState([]);

  useEffect(() => {
    if (user) {
      // Get user's own array (cart list) or create new
      localStorage.hasOwnProperty(user.uid) &&
        setAddedProductsArr(JSON.parse(localStorage.getItem(user.uid)));
    } else {
      const unknownData = localStorage.getItem("unknown");
      // If unknown user has put items to cart, set those items
      !!unknownData && setAddedProductsArr(JSON.parse(unknownData));
    }
  }, [user]);

  useEffect(() => {
    console.log(addedProductsArr);
    if (user) {
      localStorage.setItem(user.uid, JSON.stringify(addedProductsArr));
    } else if (addedProductsArr.length !== 0) {
      localStorage.setItem("unknown", JSON.stringify(addedProductsArr));
    }
  }, [addedProductsArr]);

  useEffect(() => {
    products.length !== 0 && filterChosenProduct();
  }, [products]);

  const filterChosenProduct = () => {
    const chosenProduct = products.filter(
      (product) => product.id === Number(props.match.params.id)
    );
    setchosenProductInfo((prevInfo) => ({
      ...prevInfo,
      product: chosenProduct,
      subTotal: (
        (Math.round(chosenProduct[0].price * 10) / 10) *
        prevInfo.quantity
      ).toFixed(2),
    }));
  };

  const showChosenSize = (targetedEl) => {
    setchosenProductInfo({ ...chosenProductInfo, size: targetedEl.value });
  };

  const showChosenColor = (targetedEl) => {
    setchosenProductInfo({ ...chosenProductInfo, color: targetedEl.value });
  };

  const changeQuantity = (selectedQuantity) => {
    setchosenProductInfo({
      ...chosenProductInfo,
      quantity: selectedQuantity,
      subTotal: (
        (Math.round(chosenProductInfo.product[0].price * 10) / 10) *
        selectedQuantity
      ).toFixed(2),
    });
  };

  // When click Add to Cart button
  const addToCart = (e) => {
    e.preventDefault();
    // for loaclStorage
    setAddedProductsArr((addedProductsArr) => {
      return [...addedProductsArr, chosenProductInfo];
    });
  };

  return (
    <main>
      {chosenProductInfo.product.length !== 0 && (
        <>
          <Link to="/" className="back-to-main-btn">
            Go Back to Main Page
          </Link>
          <div className="detail-container">
            <div className="img-wrap">
              <img
                src={chosenProductInfo.product[0].image}
                alt={chosenProductInfo.product[0].title}
              />
            </div>
            <div className="description-wrap">
              <p className="category">
                {chosenProductInfo.product[0].category}
              </p>
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
              <p className="price">
                $
                {(
                  Math.round(chosenProductInfo.product[0].price * 10) / 10
                ).toFixed(2)}
              </p>
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
                  value={chosenProductInfo.quantity}
                  className="quantity"
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
                className="add-to-cart-btn "
                disabled={
                  chosenProductInfo.size && chosenProductInfo.color
                    ? false
                    : true
                }
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Detail;

import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Specification from "./Specification";
import PopUp from "./PopUp";

const DetailMobile = (props) => {
  const {
    chosenProductInfo,
    setChosenColor,
    setChosenSize,
    changeQuantity,
    addToCart,
    popUp,
    popUpClose,
    setPopUp,
    addedProductsArr
  } = props;

  return (
    <>
      <div className="detail-container">
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
        </div>
        <div className="img-wrap">
          <img
            src={chosenProductInfo.product[0].image}
            alt={chosenProductInfo.product[0].title}
          />
        </div>
        <div className="description-wrap">

          <Specification
            {...chosenProductInfo}
            setChosenColor={setChosenColor}
            setChosenSize={setChosenSize}
          />
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

          {popUp === true && (
            <div className="popUp" onClick={() => popUpClose()}>
              <div
                className="popUpWrap"
                onClick={(e) => e.stopPropagation()}
              >
                <PopUp
                  open={() => setPopUp(true)}
                  close={() => setPopUp(false)}
                  qty={addedProductsArr.length}
                  price={addedProductsArr}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}


export default DetailMobile;

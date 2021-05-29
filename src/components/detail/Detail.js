import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useProductsContext } from "../../context/products-context";
import "./Detail.scss";

const Detail = (props) => {
  props = 3;
  const { products } = useProductsContext();
  const [detail, setDetail] = useState([]);
  console.log(detail);

  const filterClickedProduct = () => {
    if (products !== 0) {
      const clickedProduct = products.filter((product) => product.id === props);
      setDetail(clickedProduct);
      console.log(clickedProduct);
    } else {
      console.log("whyyy");
    }
  };

  useEffect(() => {
    filterClickedProduct();
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
            <p className="size">Size:</p>
            <div className="size-wrap">
              <input className="size-btn" type="submit" value="XXS" />
              <input className="size-btn" type="submit" value="XS" />
              <input className="size-btn" type="submit" value="S" />
              <input className="size-btn" type="submit" value="M" />
              <input className="size-btn" type="submit" value="L" />
              <input className="size-btn" type="submit" value="XL" />
              <input className="size-btn" type="submit" value="XXL" />
            </div>
            <p>Colour: </p>
            <div className="color-wrap">
              <input className="color-btn beige" type="submit" value="beige" />
              <input className="color-btn navy" type="submit" value="navy" />
              <input className="color-btn gray" type="submit" value="gray" />
              <input className="color-btn black" type="submit" value="black" />
              <input className="color-btn brown" type="submit" value="brown" />
              <input
                className="color-btn off-white"
                type="submit"
                value="white"
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

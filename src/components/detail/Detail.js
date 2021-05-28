import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Detail = (props) => {
  const [detail, setDetail] = useState({});
  props = 1;

  // for now, just fetch data here to see how detail page looks like
  const getDetail = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${props}`);
    const detail = await response.json();
    setDetail(detail);
    console.log(detail);
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <>
      <div className="detail-container">
        <div className="img-wrap">
          <img src={detail.image} alt={detail.title} />
        </div>
        <div className="description-wrap">
          <h3 className="product-name">{detail.title}</h3>
          <p className="category">{detail.category}</p>
          <span>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </span>
          <p className="price">${detail.price}</p>
        </div>
        <p className="description">{detail.description}</p>
      </div>
    </>
  );
};

export default Detail;

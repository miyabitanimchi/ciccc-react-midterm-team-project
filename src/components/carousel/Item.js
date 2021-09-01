import React, { useState } from "react";
import "./ItemModal.scss";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

const Item = (props) => {
  const [hover, setHover] = useState(false);
  

  return (
    <>

    <div className="item">
      <Link to={"/detail/" + props.item.id} style={{ textDecoration: 'none' }}>
        <img
          src={props.item.image}
          alt="product_image"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />

        <MediaQuery maxDeviceWidth={1024}>
            <div className="description"><p>{props.item.title}</p></div>
          </MediaQuery>

       
      </Link>

        {hover !== false && (
          <div style={{ pointerEvents: "none" }} className="modal">
            <div className="modalInfo">
              <ul>
                <li>From "{props.item.category}"</li>
                <li>{props.item.title}</li>
                <li>
                  Price: ${(Math.round(props.item.price * 10) / 10).toFixed(2)}
                </li>
              </ul>
            </div>
          </div>
        )}
    </div>
    </>
      );
};

      export default Item;

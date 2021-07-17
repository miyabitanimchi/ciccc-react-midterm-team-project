import React, { useState } from "react";
import "./ItemModal.scss";
import { Link } from "react-router-dom";
import { useProductsContext } from '../../context/products-context';

const Item = (props) => {
  const [hover, setHover] = useState(false);
  const {itemDescription} = useProductsContext();
  
  return (
    <div className="item">
      <Link to={"/detail/" + props.item.id} style={{textDecoration:'none'}}>
        <img
          src={props.item.image}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        {itemDescription === true && 
         <div className="description"><p>{props.item.title}</p></div>
        } 
       
      </Link>
      
      {hover !== false && (
        <div style={{ pointerEvents: "none" }} className="modal">
          <div className="modalInfo">
            <ul>
              <Link
                style={{ pointerEvents: "auto" }}
                to={"/category/" + props.item.category}
                style={{
                  pointerEvents: "none",
                  textDecoration: "none",
                  margin: 0,
                }}
              >
                <li>From "{props.item.category}"</li>
              </Link>
              <li>{props.item.title}</li>
              <li>
                Price: ${(Math.round(props.item.price * 10) / 10).toFixed(2)}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;

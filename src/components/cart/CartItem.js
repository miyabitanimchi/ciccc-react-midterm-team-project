import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./CartItem.scss";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStyles } from "./style-materialUi";

// child

const CartItem = (props) => {
  const {
    firebaseId,
    product,
    productUid,
    size,
    color,
    quantity,
    subTotal,
    getNewAddedProductsArr,
    user,
  } = props;
  const [testQty, setTestQty] = useState(quantity);
  const classes = useStyles();

  const handleChange = (event) => {
    setTestQty(event.target.value);
  };

  const removeProduct = (id) => {
    getNewAddedProductsArr(id);
  };
  return (
    <>
      <div className="product-container">
        <div className="img-wrap">
          <img src={product[0].image} alt={product[0].title} />
        </div>
        <div className="product-info-wrap">
          <h3 className="title">{product[0].title}</h3>
          <p className="size">Size: {size}</p>
          <p className="color">Colour: {color}</p>
          {/* <p className="quantity">Quantity: {quantity}</p> */}
          <p className="unitPrice">
            CAD $ {(Math.round(product[0].price * 10) / 10).toFixed(2)}
          </p>
          <p className="subtotal">
            Subtotal: CAD ${Number(subTotal).toFixed(2)}
          </p>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Quantity
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={testQty}
              onChange={handleChange}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value={quantity}>{quantity}</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
            <FormHelperText>Label + placeholder</FormHelperText>
          </FormControl>
        </div>
        <IoMdClose
          className="close-icon"
          onClick={() => removeProduct(user ? firebaseId : productUid)}
        />
      </div>
    </>
  );
};

export default CartItem;

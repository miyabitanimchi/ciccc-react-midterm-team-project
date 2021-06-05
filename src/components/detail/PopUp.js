import React from 'react';
import './PopUp.scss';
import { GrFormClose } from "react-icons/gr";
import { Link } from 'react-router-dom';

const PopUp = ({ close, qty, price }) => {

    return (

        <div className="popUp">
            <div className="popUpWrap">
                <GrFormClose className="closeBtn" size={30} onClick={close} />

                <h3>1 ITEM ADDED TO YOUR CART</h3>
                <div className="qtyPrice">
                    <span>SUBTOTAL | {qty}item(s)</span>
                    <span>CAD $ {price.reduce((acc, productObj) => {
                        return acc + productObj.subTotal;
                    }, 0)}</span>
                </div>
                <Link to={"/cart"}><button className="viewCartBtn">View Cart</button> </Link>
                <button className="continueBtn" onClick={close}>Continue Shopping</button>

            </div>
        </div >
    )
}

export default PopUp
import React, { useState, useContext, useEffect } from 'react';
import './Header.scss';
import { FaUserCircle, FaShoppingCart, FaBookOpen } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { useAuthContext } from '../../context/auth-context';
import { useProductsContext } from '../../context/products-context';
import { Link } from 'react-router-dom';
import CartQty, { CartContext } from '../cart/CartQty';
// import  from '../cart/CartQty';

const Header = () => {
  const { user } = useAuthContext();
  const { cartQuantity } = useProductsContext();
  const [searchInput, setSearchInput] = useState("")
  const [categoryMenu, setCategory] = useState(false)
  const CartContextQty = useContext(CartContext)

  const clearInput = () => {
    let searchInputValue = document.getElementsByClassName("searchInput")[0]
    searchInputValue.value = ""
  }

  // console.log(CartContextQty)
  // const storageChange = () => {
  //   console.log("storage change")
  // }

  // useEffect(() => {
  //   window.addEventListener('storage', storageChange())
  // }, [CartContextQty]);





  return (
    <>
      <nav>
        <div className="logo"><Link to={"/"}><img src="/banner.png" alt="logo" /><span>BCshop</span></Link></div>
        <div className="searchBar">
          <input className="searchInput" type="text" placeholder="search item...."
            onChange={(e) => setSearchInput(e.target.value)}></input>
          <Link to={searchInput === "" ? "/" : "/search/" + searchInput} onClick={clearInput} ><ImSearch className="searchBtn" size={20} color={"white"} /></Link>
        </div>
        <div className="iconWrap">
          <ul onMouseLeave={() => setCategory(false)}>
            <li onMouseEnter={() => setCategory(true)}>
              <FaBookOpen className="navIcon" /><p>Category</p></li>
            <li onMouseEnter={() => setCategory(false)}><Link to={"/cart"}><FaShoppingCart className="navIcon" /></Link><p>Cart</p>
            {/* <CartQty><p>{CartContextQty}</p></CartQty> */}
            <p>{cartQuantity}</p>
            </li>
            <li onMouseEnter={() => setCategory(false)}><Link to={"/account/"}><FaUserCircle className="navIcon" /></Link>
              <p>{user === null ? "Account" : user.providerData[0].displayName}</p></li>
            {categoryMenu === true &&
              <div className="categoryDropdown" >
                <ul>
                  <Link to={"/category/clothes"} style={{ textDecoration: 'none', backgroundColor: 'orange' }} name={"Clothes"}><li>Clothes</li></Link>
                  <Link to={"/category/accessories"} style={{ textDecoration: 'none' }} name={"Accessories"}><li>Accessories</li></Link>
                  <Link to={"/category/electronics"} style={{ textDecoration: 'none' }} name={"Electronics"}><li>Electronics</li></Link>
                </ul>
              </div>
            }
          </ul>

        </div>
      </nav>
    </>
  );
}

export default Header;

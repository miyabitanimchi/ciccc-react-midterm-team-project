import React, { useState } from 'react';
import './Header.scss';
import { FaUserCircle, FaShoppingCart, FaBookOpen } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { useAuthContext } from '../../context/auth-context';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user } = useAuthContext();
  const [searchInput, setSearchInput] = useState("")
  const [categoryMenu, setCategory] = useState(false)

  const clearInput = () => {
    let searchInputValue = document.getElementsByClassName("searchInput")[0]
    searchInputValue.value = ""
    console.log(searchInputValue)
  }

  return (
    <>
      <nav>
        <div className="logo"><Link to={"/"}><img src="/banner2.png" alt="logo" /><span>BCshop</span></Link></div>
        <div className="searchBar">
          <input className="searchInput" type="text" placeholder="search item...."
            onChange={(e) => setSearchInput(e.target.value)}></input>
          <Link to={searchInput === "" ? "/" : "/search/" + searchInput} onClick={clearInput} ><ImSearch className="searchBtn" size={20} color={"white"} /></Link>
        </div>
        <div className="iconWrap">
          <ul>
            <li onMouseEnter={() => setCategory(true)}>
              <FaBookOpen className="navIcon" /><p>Category</p>
            </li>
            <li><Link to={"/cart"}><FaShoppingCart className="navIcon" /></Link><p>Cart</p></li>
            <li><Link to={"/account/"}><FaUserCircle className="navIcon" /></Link>
              <p>{user === null ? "Account" : user.providerData[0].displayName}</p></li>
          </ul>
          {categoryMenu === true &&
            <div className="categoryDropdown" onMouseLeave={() => setCategory(false)}>
              <ul>
                <Link to={"/category/clothes"} style={{ textDecoration: 'none', backgroundColor: 'orange' }} name={"Clothes"}><li>Clothes</li></Link>
                <Link to={"/category/accessories"} style={{ textDecoration: 'none' }} name={"Accessories"}><li>Accessories</li></Link>
                <Link to={"/category/electronics"} style={{ textDecoration: 'none' }} name={"Electronics"}><li>Electronics</li></Link>
              </ul>
            </div>
          }
        </div>
      </nav>
    </>
  );
}

export default Header;

import React, { useState, useEffect } from 'react';
import './Header.scss';
import { FaUserCircle, FaShoppingCart, FaBookOpen } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { useAuthContext } from '../../context/auth-context';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user } = useAuthContext();
  const [searchInput, setSearchInput] = useState("")
  const [categoryMenu, setCategory] = useState(false)

  return (
    <>
      <nav>
        <div className="logo"><Link to="/"><img src="https://via.placeholder.com/300x80" alt="logo" /></Link></div>
        <div className="searchBar">
          <input className="searchInput" type="text" placeholder="search item...."
            onChange={(e) => setSearchInput(e.target.value)}></input>
          <Link to={"/search/" + searchInput} onClick={()=>setSearchInput("")}><ImSearch className="searchBtn" size={20} color={"white"} /></Link>
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
                <Link to={"/category/men%27s%20clothing"} style={{ textDecoration: 'none',backgroundColor:'orange' }} name={"Men's clothing"}><li>Men's clothing</li></Link>
                <Link to={"/category/women%27s%20clothing"} style={{ textDecoration: 'none' }} name={"Women's clothing"}><li>Women's clothing</li></Link>
                <Link to={"/category/electronics"} style={{ textDecoration: 'none' }} name={"Electronics"}><li>Electronics</li></Link>
                <Link to={"/category/jewelery"} style={{ textDecoration: 'none' }} name={"Jewelery"}><li>Jewelery</li></Link>
              </ul>
            </div>
          }
        </div>
      </nav>
    </>
  );
}

export default Header;

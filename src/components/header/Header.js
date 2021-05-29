import React from 'react';
import './Header.scss';
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";
import { ImSearch } from "react-icons/im";


const Header = () => {
  return (
    <>
      <nav>
        <div className="logo"><img src="https://via.placeholder.com/300x120" alt="logo"/></div>
               This is header

              {/* <div className="searchBar"><input type="text"></input></div> */}
        <div className="iconWrap">
          <ul>
            <li><input type="text" placeholder="search item...."></input><ImSearch/></li>
            <li><a href=""><GrCatalog className="userIcon"/></a><p>Catagory</p></li>
            <li><a href=""><FaShoppingCart className="userIcon"/></a><p>Cart</p></li>
            <li><a href=""><FaUserCircle className="userIcon"/></a><p>Account</p></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;

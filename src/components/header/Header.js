import React from 'react';
import './Header.scss';



const Header = () => {
  return (
    <>
      <nav>
        <div className="logo"><img src="https://via.placeholder.com/300x120" alt="logo"/></div>
               This is header

              {/* <div className="searchBar"><input type="text"></input></div> */}
        <div className="iconWrap">
          <ul>
            <li><input type="text" placeholder="search item...."></input></li>
            <li><button>Catagory</button></li>
            <li><button>Cart</button></li>
            <li><button>Login</button></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;

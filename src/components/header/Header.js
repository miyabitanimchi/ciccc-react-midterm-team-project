import React,{useState} from 'react';
import './Header.scss';
import { FaUserCircle, FaShoppingCart, FaBookOpen } from "react-icons/fa";
// import { GrCatalog } from "react-icons/gr";
import { ImSearch } from "react-icons/im";


const Header = () => {

const [searchInput,setSearchInput] = useState("")

const searchBtnClick = () =>{
  
}

  return (
    <>
      <nav>
        <div className="logo"><a href="/"><img src="https://via.placeholder.com/300x80" alt="logo" /></a></div>
        <div className="searchBar">
          <input className="searchInput" type="text" placeholder="search item...." 
             onChange={(e)=>setSearchInput(e.target.value)}></input>
          <a href={"./search?"+searchInput}><ImSearch className="searchBtn" color={"white"}/></a>
          </div> 
        <div className="iconWrap">
          <ul>
            {/* <li><div className="searchBar"><input type="text" placeholder="search item...."></input><ImSearch color={"white"} /></div></li> */}
            <li><a href=""><FaBookOpen className="navIcon" /></a><p>Catagory</p></li>
            <li><a href="./cart"><FaShoppingCart className="navIcon" /></a><p>Cart</p></li>
            <li><a href=""><FaUserCircle className="navIcon" /></a><p>Account</p></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;

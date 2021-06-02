import React,{useState} from 'react';
import './Header.scss';
import { FaUserCircle, FaShoppingCart, FaBookOpen } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { useAuthContext } from '../../context/auth-context';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user } = useAuthContext();
  const [searchInput,setSearchInput] = useState("")
  console.log(searchInput)

  return (
    <>
      <nav>
        <div className="logo"><a href="/"><img src="https://via.placeholder.com/300x80" alt="logo" /></a></div>
        <div className="searchBar">
          <input className="searchInput" type="text" placeholder="search item...." 
             onChange={(e)=>setSearchInput(e.target.value)}></input>
          <Link to={"/search/" + searchInput }><ImSearch className="searchBtn" color={"white"}/></Link>
          </div> 
        <div className="iconWrap">
          <ul>
            <li><Link to={""}><FaBookOpen className="navIcon" /></Link><p>Catagory</p></li>
            <li><Link to={"/cart"}><FaShoppingCart className="navIcon" /></Link><p>Cart</p></li>
            <li><Link to={"/account/"}><FaUserCircle className="navIcon" /></Link>
            <p>{user === null?"Account" : user.providerData[0].displayName}</p></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;

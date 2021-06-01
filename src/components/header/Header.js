import React,{useState} from 'react';
import './Header.scss';
import { FaUserCircle, FaShoppingCart, FaBookOpen } from "react-icons/fa";
// import { GrCatalog } from "react-icons/gr";
import { ImSearch } from "react-icons/im";
import { firebase, googleAuthProvider } from '../../firebase/firebase';
import { useAuthContext } from '../../context/auth-context';

const Header = () => {
  const { user } = useAuthContext();
  const [searchInput,setSearchInput] = useState("")

  const searchBtnClick = () =>{
    
  }

const startLogin = () => {
  firebase.auth().signInWithPopup(googleAuthProvider).then(() => {
    console.log('Sign in successful!');
  }).catch((error) => {
    console.error(`An error happened : ${error}`);
  })
}
const startLogout = () => {
  firebase.auth().signOut().then(() => {
    console.log('Sign out successful!');
  }).catch((error) => {
    console.error(`An error happened : ${error}`);
  })
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
            { user ? (
              <li><div onClick={startLogout} className="auth-button">Log out</div></li>
            ) : (
              <li><div onClick={startLogin} className="auth-button">Log in</div></li>
            )}
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

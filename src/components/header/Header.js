import React, { useState } from 'react';
import './Header.scss';
import { FaUserCircle, FaShoppingCart, FaBookOpen } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { useAuthContext } from '../../context/auth-context';
import { useProductsContext } from '../../context/products-context';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Avatar, Typography, InputBase, Grid, Paper } from '@material-ui/core/';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  color: {
    "background-color": "rgb(0, 40, 87)"
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      // marginLeft: theme.spacing(3),
      // marginRight: theme.spacing(3),
      width: '100%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '100px',
    },
  },
  image: {
    height: "100px",
    width: "100px"
  }
}))



const Header = () => {
  const { user } = useAuthContext();
  const { cartQuantity } = useProductsContext();
  const [searchInput, setSearchInput] = useState("")
  const [categoryMenu, setCategory] = useState(false)
  const classes = useStyles()

  const clearInput = () => {
    let searchInputValue = document.getElementsByClassName("searchInput")[0]
    searchInputValue.value = ""
  }



  return (
    <>
      <AppBar>
        <Toolbar className={classes.color}>
          <div>
            <Typography variant="h6" >
              BCshop
            </Typography>
           
          </div>
          {/* <Paper variant="outlined" ></Paper> */}
          <img src="banner3.png" className={classes.image} />
          <MenuBookIcon />
          <ShoppingCartIcon />
          <AccountCircleIcon />
          {/* <Grid container spacing={0}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid> */}

        </Toolbar>
        <Toolbar className={classes.color}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>

      </AppBar>
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

import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

{/* Header function */}
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <>
      <nav className="header">
        {/* Header Top */}
        <div className="header_top">
          {/* Header Left Nav */}
          <div className="header_left_nav">
            {/* menu icon */}
            <MenuIcon />
          </div>
          {/* Amazon Logo */}
          <Link to="/">
            <img
              className="header__logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
          </Link>

          <div className="header__search">
            {/* Search Box */}
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon" />
          </div>
          <div className="header__nav">
            {/* Header Nav */}
          <Link to={!user && '/login'}>
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
              <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
          </Link>
          {/* Orders */}
          <Link to='/orders'>
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          {/* Checkout */}
          <Link to="/checkout">
            <div className="header__optionBasket">
              {/* Shopping Basket */}
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
          </div>
        </div>
        {/* Header Bottom */}
        <div className="headerBottom">
          {/* Address */}
          <div className="headerAddress">
            <div className="headerAddress_icon">
              {/* Location Icon */}
              <LocationOnIcon />
            </div>
            <div className="header__option">
              <span className="header__optionLineOne">Deliver To</span>
              <span className="header__optionLineTwo">Addis Ababa</span>
            </div>
          </div>
          {/* Bottom Nav */}
          <div className="headerBottom_Navbar">
            <span>
                <Link to='/' className="headerlink">
                  All Products
                </Link>
              </span>
              <span>Books</span>
              <span>New Release</span>
              <span>Gift Ideas</span>
              <span>Amazon adds</span>
              <span>Amazon Pay</span>
            </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

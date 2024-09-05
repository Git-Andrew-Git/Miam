import React, { useState } from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { products } = useSelector((state) => state.cart);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to="/" className={classes.title}>
            Miam Miam Miam
          </Link>
        </div>
        <div className={classes.center}>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <a href="#">Home</a>
            </li>
            <li className={classes.listItem}>
              <a href="#contacts">Contacts</a>
            </li>
            <li className={classes.listItem}>
              <a href="#foods">Foods</a>
            </li>
            <li className={classes.listItem}>
              <a href="#faq">Faq</a>
            </li>
            <li className={classes.listItem}>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </div>

        {/* delete Aioutline.. closing tag */}
        <div className={classes.right}>
          <AiOutlineUser className={classes.userIcon}></AiOutlineUser>
          <Link to="/cart" className={classes.cartContainer}>
            <AiOutlineShoppingCart
              className={classes.cartIcon}
            ></AiOutlineShoppingCart>
            <div className={classes.cartQuantity}>{products.length}</div>
          </Link>
          <button onClick={handleLogout} className={classes.logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

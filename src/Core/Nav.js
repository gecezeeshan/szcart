import React from 'react'
import {  NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
import CartCount from '../ShoppingCart/Cart/CartCount';

import {  GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { profileActions } from '../Store/index';

import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
function Nav(props) {

  const clientId = '414875063153-7eol3pr9pgce6kj3plkr3b5elo2cau3k.apps.googleusercontent.com';
  const dispatch = useDispatch();
  let activeStyle = {
    textDecoration: "underline",
  };

    const navigate = useNavigate();  
  
  const signOut = () => {


  }

  const logOut = () => {
    dispatch(profileActions.Logout());
    
      navigate('/login');   
    
};
const hideStyle={
  display: 'none'
}
  return (
    <>
   
  
    <nav className={classes.nav}>
<ul>
<li>
          <NavLink
            to="/home"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Products
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/cart"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Cart &nbsp;
            <CartCount></CartCount>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/abouts"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <div style={{display:'none !important'}}>
           {/* <GoogleLogout  /> */}
           </div>
        {/* <input type="link"  clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} value="sign out" /> */}
        </li>
</ul>
     </nav>

    </>

  )
}

export default Nav;

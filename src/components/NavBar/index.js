import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';
import {FaUmbrellaBeach} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" >
          <FaUmbrellaBeach></FaUmbrellaBeach>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">SignIn</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar;


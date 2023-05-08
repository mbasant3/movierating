import React from "react";
import { PrimaryNav, MenuLink, Menu, Hamburger } from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/movie" activeStyle>
          Favourite Movie
        </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  );
};
export default Navbar;

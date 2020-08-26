import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavItem = styled(Link)`
  color: #ffffff;
  text-decoration: None;
  white-space: nowrap;
  margin: 0 1vw;
  text-size: 24px;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    color: #000000;
  }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Blog</NavItem>
      <NavItem to="/about">About</NavItem>
    </>
  )
}

export default NavbarLinks
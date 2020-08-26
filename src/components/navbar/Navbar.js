import React, { useState } from "react"
import NavbarLinks from "./NavbarLinks"
import styled from 'styled-components'

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  position: relative;
  justify-content: space-between;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 35%;
  z-index: 2;
  align-self: center;
  text-decoration: none;
  

  @media (max-width: 768px) {
    position: sticky;
    text-decoration: none;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`



const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar
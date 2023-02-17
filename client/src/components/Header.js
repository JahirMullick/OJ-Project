import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader style={{ fontFamily: "Bebas Neue, sans-serif" }} >
      <NavLink to="/">
        {/* <img src="./images/logo.png" alt="my logo img" style={{ height: "46px" }} /> */}
        <div style={{ fontSize: "40px", fontWeight: "bold", color: "#000", marginTop: '10px' }}>OJ FASHIONS</div>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  background: transparent;
  z-index: 5;

  .logo {
    height: 5rem;
  }
`;
export default Header;

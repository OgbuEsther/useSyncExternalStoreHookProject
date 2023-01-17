import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import logo from "./Assests/logo.webp";

const Header = () => {
  const myRef = React.useRef();

  return (
    <div>
      <Container>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <Button>
          <AddToCart>Add to Cart</AddToCart>
          <OrderNow>Order Now</OrderNow>
        </Button>
      </Container>
    </div>
  );
};

export default Header;

const Button = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderNow = styled.button`
  margin-right: 17px;
  height: 40px;
  width: 100px;
  background-color: black;
  color: white;
  border: 0px;
  outline: none;
  border-radius: 7px;
  font-weight: bold;
  transition: all 360ms;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    height: 35px;
    width: 80px;
    font-size: 12px;
    margin-right: 3px;
  }
`;

const AddToCart = styled.button`
  margin-right: 17px;
  height: 40px;
  width: 100px;
  background-color: #ff002f;
  border: 0px;
  outline: none;
  border-radius: 7px;
  font-weight: bold;
  transition: all 360ms;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    height: 35px;
    width: 80px;
    font-size: 12px;
    margin-right: 7px;
  }
`;

const Logo = styled.div`
  width: 100px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
    margin-left: 20px;
    object-fit: cover;
  }
  @media screen and (max-width: 500px) {
    height: 50px;
    width: 90px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  justify-content: space-between;
`;

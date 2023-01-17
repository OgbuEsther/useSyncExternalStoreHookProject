import React from "react";
import styled from "styled-components";
import img1 from "./Assests/backImage1.jpg";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <h1>
            Buy Quality, Cheap and Faster <br /> with <span> JOEST </span> store
          </h1>
          <p>Get you order in 10minutes</p>
          <button>Explore</button>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    color: #ff002f;
  }

  h1 {
    color: white;
    text-align: center;
  }

  p {
    color: white;
    font-weight: bold;
  }

  button {
    padding: 15px 40px;
    background-color: #ff002f;
    color: white;
    border: none;
    outline: none;
    border-radius: 7px;
    font-weight: bold;
    transition: all 360ms;
    :hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
  position: absolute;
`;

const Container = styled.div`
  height: 400px;
  width: 1200px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-right: 20px;
  position: relative;
  background-image: url(${img1});
  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(65, 63, 63, 0.5);
  }

  @media screen and (max-width: 960px) {
    width: 500px;
  }

  @media screen and (max-width: 500px) {
    width: 280px;
    margin-right: 0px;
    /* margin-left: 10px; */
    background-color: red;
  }
`;

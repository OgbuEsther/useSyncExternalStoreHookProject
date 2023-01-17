import React, { useEffect } from "react";
import { useSyncExternalStore } from "react";
import Hero from "./Hero";
import styled from "styled-components";
import axios from "axios";
import { BiWifi } from "react-icons/bi";
import { BiWifiOff } from "react-icons/bi";

const ChatIndicator = () => {
  const [data, setdata] = React.useState([]);
  const myRef = React.useRef();
  const myRef2 = React.useRef();

  const getData = async () => {
    await axios
      .get("https://fakestoreapi.com/products?limit=15")
      .then((res) => {
        setdata(res.data);
      });
  };

  const isOnline = useSyncExternalStore(subscribe, getSnapshot);

  useEffect(() => {
    getData();
  }, [isOnline]);

  useEffect(() => {
    const changeStatus = () => {
      if (isOnline === true) {
        setTimeout(() => {
          myRef.current.style.display = "none";
        }, 5000);
      } else if (isOnline === false) {
        setTimeout(() => {
          myRef2.current.style.display = "none";
        }, 5000);
      }
    };

    return changeStatus();
  }, [isOnline]);

  return (
    <Container>
      <NetworkStatus>
        {isOnline ? (
          <Online dp={isOnline ? "1" : ""} bg={isOnline ? "1" : ""} ref={myRef}>
            <span id="icon">
              {" "}
              <BiWifi />
            </span>
            <span id="offline">you are online</span>
          </Online>
        ) : (
          <Offline
            ref={myRef2}
            dp={isOnline ? "" : "1"}
            bg={isOnline ? "1" : ""}
          >
            <span id="icon">
              {" "}
              <BiWifiOff />
            </span>
            <span id="offline">you are offline</span>
          </Offline>
        )}
      </NetworkStatus>
      <Hero />
      <ItemHold>
        {data.map((props) => (
          <Card key={props.id}>
            <Category>{props.category}</Category>
            <ImageHold>
              <img src={props.image} />
            </ImageHold>

            <TitleHold>
              <Title>
                <span>Title: </span>

                {props.title}
              </Title>
              <Price>
                <span>Price: </span>
                {props.price}
              </Price>

              <Desc></Desc>
            </TitleHold>
          </Card>
        ))}
      </ItemHold>
    </Container>
  );
};

const getSnapshot = () => {
  return navigator.onLine;
};

const subscribe = (callback) => {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);

  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
};

export default ChatIndicator;

const ItemHold = styled.div`
  width: 100%;
  background-color: aliceblue;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Offline = styled.div`
  display: ${(props) => (props.dp ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => (props.bg ? "green" : "black")};
`;

const Online = styled.div`
  display: ${(props) => (props.dp ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => (props.bg ? "green" : "black")};
`;

const NetworkStatus = styled.div`
  transition: all 5s;

  #offline {
    margin-left: 10px;
    margin-bottom: 10px;
    font-weight: 500;
  }

  #icon {
    font-size: 27px;
  }

  padding: 3px 0px 3px 0px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

const Desc = styled.div``;

const Price = styled.div`
  width: 100px;
  margin-bottom: 30px;

  span {
    font-weight: bold;
  }
`;
const Title = styled.p`
  margin: 0;
  span {
    font-weight: bold;
  }
`;
const TitleHold = styled.div`
  margin-bottom: 40px;
`;
const ImageHold = styled.div`
  width: 290px;
  height: 250px;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
const Category = styled.button`
  margin-left: 10px;
  position: absolute;
  top: 10px;
  border: none;
  outline: none;
  width: 150px;
  height: 50px;
  border-radius: 30px;
  font-weight: bold;

  cursor: pointer;
  background-color: black;
  color: white;

  :hover {
    background-color: darkgray;
    color: black;
  }
`;

const Card = styled.div`
  width: 300px;

  margin-top: 10px;
  position: relative;

  margin: 10px;
  border-radius: 10px;

  @media screen and (max-width: 500px) {
    margin: 5px;
    width: 250px;
    height: 290px;
  }
`;

const Container = styled.div`
  background-color: aliceblue;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

import React from "react";
import styled from "styled-components";
import hero from "./hero.svg";
import "./Landing.css";

const Wrapper = styled.div`
  width: 100vw;
  height: 75vh;
  background-color: #000000;
`;

const ColorHead = styled.div`
  width: 100%;
  height: 10px;
  position: absolute;
  background-color: #606060;
`;

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background-image: url(${hero});
`;

const HeroColumn = styled.div`
  padding: 30px;
  width: 45%;
`;

const BigButton = styled.div`
  width: 250px;
  height: 50px;
  border-radius: 25px;
  background-color: #ffffff;
  color: #000000;
  border: none;
  font-family: IBM Plex Mono;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  &:focus {
    outline: none;
  }
`;

export default () => (
  <Wrapper>
    <ColorHead />
    <HeroContainer>
      <HeroColumn>
        <h1
          style={{
            fontFamily: "Muli",
            color: "#FFFFFF",
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "30px"
          }}
        >
          Build great software
          <br />
          in the open.
        </h1>
        <p
          style={{
            fontFamily: "Muli",
            fontSize: "18px",
            color: "#D3D3D3",
            marginBottom: "30px"
          }}
        >
          Overt is an alliance of open-source developers, to change the way the
          world's software is built.
        </p>
        <a href="/" style={{ textDecoration: "none" }}>
          <BigButton>Sign Up</BigButton>
        </a>
      </HeroColumn>
      <HeroColumn />
    </HeroContainer>
  </Wrapper>
);

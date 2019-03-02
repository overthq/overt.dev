import React from "react";
import styled from "styled-components";
import hero from "./hero.svg";
import "./Landing.css";
import limage from "../../assets/images/Overt_Landing1.jpg";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const ColorHead = styled.div`
  width: 100%;
  height: 10px;
  position: absolute;
  background-color: #606060;
`;

const HeroContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background-image: url(${hero});
`;

const Tile = styled.div`
  width: 100%;
  height: 75%;
  background-color: #d3d3d3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeroColumn = styled.div`
  margin: 30px;
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
    opacity: 0.8;
  }
  &:focus {
    outline: none;
  }
`;

const LandingImages = styled.div`
  background-image: url(${limage});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: blur(2px);
  transition: all 0.5s;
  &:focus,
  &:hover {
    transform: scale(1.2);
    filter: blur(0);
  }
  &::before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(52, 73, 94, 0.75);
  }
`;

const LandingImageHolder = styled.div`
  height: 100%;
  width: 100%;
  &:hover & > *:before,
  &:focus & > *:before {
    display: block;
  }
  overflow: hidden;
`;

const Landing = () => (
  <Wrapper>
    <ColorHead />
    <HeroContainer>
      <HeroColumn>
        <h1
          style={{
            fontFamily: "Muli",
            color: "#FFFFFF",
            fontSize: "48px",
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
          Making the world better, one line of open-source code at a time.
        </p>
        <a href="/" style={{ textDecoration: "none" }}>
          <BigButton>Sign Up</BigButton>
        </a>
      </HeroColumn>
      <HeroColumn />
    </HeroContainer>
    <Tile>
      <LandingImageHolder>
        <LandingImages>
          <h1 style={{ color: "#FFFFFF" }}>Code is the way forward</h1>
        </LandingImages>
      </LandingImageHolder>
    </Tile>
    <Tile>
      <LandingImageHolder>
        <LandingImages>
          <h1 style={{ color: "#FFFFFF" }}>Code is the way forward</h1>
        </LandingImages>
      </LandingImageHolder>
    </Tile>
    <Tile>
      <LandingImageHolder>
        <LandingImages>
          <h1 style={{ color: "#FFFFFF" }}>Code is the way forward</h1>
        </LandingImages>
      </LandingImageHolder>
    </Tile>
  </Wrapper>
);

export default Landing;

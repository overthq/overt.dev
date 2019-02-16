import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SideBarWrapper = styled.div`
  width: 17.5%;
  height: 100%;
  background-color: #100100;
`;

const MainWrapper = styled.div`
  width: 87.5%;
  height: 100%;
  background-color: #d3d3d3;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const MainSection = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  padding: 10px;
  overflow-y: scroll;
`;

const TopNav = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 1;
  background-color: #ffffff;
  border-bottom: 1px solid #a5a5a5;
`;

export default () => (
  <Wrapper>
    <SideBarWrapper />
    <MainWrapper>
      <TopNav />
      <MainSection />
    </MainWrapper>
  </Wrapper>
);

import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  padding: 20px;
`;

const LearnMore = () => (
  <Wrapper>
    <h1 style={{ fontSize: "40px" }}>We're building the future in the open</h1>
  </Wrapper>
);

export default LearnMore;

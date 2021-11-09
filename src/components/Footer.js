import React from "react";
import styled from "styled-components";

/**
  * Footer component contains all copyright and legal information
  * as well as additional navigational links.
  */
function Footer() {
  return (
    <Container>
      <a href="#">Tesla © 2021</a>
      <a href="#">Privacy &amp; Legal</a>
      <a href="#">Contact</a>
      <a href="#">Careers</a>
      <a href="#">News</a>
      <a href="#">Engage</a>
      <a href="#">Locations</a>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  height: 20px;
  z-index: 1000;
  height: 2vh;
  font-size: 13px;

  a {
    margin: 0px 10px;
  }
`;

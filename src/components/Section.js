import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

/**
  * Section component displays all information about a section
  * as well as a navigational arrow urging the customer down the page.
  */
function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImage,
}) {
  return (
    <Wrapper bgImage={backgroundImage}>
      <Fade bottom>
        <ProductText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ProductText>
      </Fade>
      <ButtonContainer>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="images/down-arrow.svg" />
      </ButtonContainer>
    </Wrapper>
  );
}

export default Section;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

const ProductText = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-size: 25px;

  p {
    font-weight: 400;
    font-size: 15px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 10px;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

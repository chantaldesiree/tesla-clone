import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import LanguageIcon from "@material-ui/icons/Language";

import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="#">
        <Logo src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-In</a>
          </li>
          <li>
            <a href="#">Test Drive</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>
          <li>
            <a href="#">Charging</a>
          </li>
          <li>
            <a href="#">Powerwall</a>
          </li>
          <li>
            <a href="#">Commercial Energy</a>
          </li>

          <li>
            <a href="#">Utilities</a>
          </li>

          <li>
            <a href="#">Find Us</a>
          </li>

          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <GlobeWrapper>
            <CustomGlobe />
            <GlobeText>
              <h4>United States</h4>
              <h5>English</h5>
            </GlobeText>
          </GlobeWrapper>
        </BurgerNav>
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Logo = styled.img`
  padding-left 20px;
  width: 150px;
  height: 18px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    padding: 0 20px;
    flex-wrap: no-wrap;
    letter-spacing: 1px;
  }

  @media (max-width: 1111px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    padding: 0 20px;
    flex-wrap: no-wrap;
    letter-spacing: 1px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  font-weight: 600;
  font-size: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 30px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s;

  li {
    margin: 15px 0px;
    border-radius: 10px;
    padding: 10px 0px;
  }

  li:hover {
    background: #eeeeee;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
`;

const CustomGlobe = styled(LanguageIcon)`
  height: 20px
  margin: 15px 40px;
  border-radius: 10px;
`;

const GlobeWrapper = styled.div`
  display: flex;
  padding: 8px 18px;
  border-radius: 10px;
  :hover {
    background: #eeeeee;
  }
`;

const GlobeText = styled.div`
  padding: 5px 8px;

  h5 {
    padding-top: 5px;
  }
`;

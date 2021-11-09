import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import LanguageIcon from "@material-ui/icons/Language";

import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

/**
  * Header component contains links to navigation 
  * as well as hamburger menu for additional content.
  */
function Header() {
  /**
	  * Sets the status of the buger menu to open or closed.
	  */
  const [burgerStatus, setBurgerStatus] = useState(false);

  /**
	  * Retrieves the cars loaded into Redux.
	  */
  const cars = useSelector(selectCars);

  /**
  * An array of all of the links in the burger menu.
  */
  const burgerMenuLinks = ["Existing Inventory", "Used Inventory", "Trade-In", "Test Drive", "Cybertruck", "Roadster", "Semi", "Charging", "Powerwall", "Commercial Energy", "Utilities", "Find Us", "Support", "Investor Relations"];

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
        <MenuLink>
          <a href="#">Shop</a>
        </MenuLink>
        <MenuLink>
          <a href="#">Account</a>
        </MenuLink>

        <CustomMenu onClick={() => setBurgerStatus(true)} />
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>

          {burgerMenuLinks.forEach((link, index) => {
            return (<li key={index}>
            <a href="#">Existing Inventory</a>
          </li>);
          })}

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
    padding: 8px 15px;
    margin: 8px;
    flex-wrap: no-wrap;
    letter-spacing: 1px;
    border-radius: 10px;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }

  @media (max-width: 1169px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    padding: 8px 15px;
    margin: 8px;
    flex-wrap: no-wrap;
    letter-spacing: 1px;
    border-radius: 10px;
  }
`;

const MenuLink = styled.div`
  a {
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
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

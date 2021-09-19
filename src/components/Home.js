import React from "react";
import styled from "styled-components";

import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImage="model-s.jpg"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImage="model-3.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImage="model-x.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImage="model-y.jpg"
      />

      <Section
        title="Solar and Powerwall"
        description="Power Everything"
        backgroundImage="solar-panel.jpg"
        leftBtnText="Learn More"
      />

      <Section
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;

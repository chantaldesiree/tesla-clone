import React from "react";
import styled from "styled-components";

import Section from "./Section";
import Footer from "./Footer";

/**
  * Home component is a container for all of the sections
  */
function Home() {

  /**
  * sectionInfo is an array of objects that contains all of the information
  * for every section, including titles, descriptions, button text and background images.
  */
  const sectionInfo = [
    {
      title: "Model S",
      description: "Order Online for Touchless Delivery",
      leftBtnText: "Custom Order",
      rightBtnText: "Existing Inventory",
      backgroundImage: "model-s.jpg",
    },{
      title: "Model 3",
      description: "Order Online for Touchless Delivery",
      leftBtnText: "Custom Order",
      rightBtnText: "Existing Inventory",
      backgroundImage: "model-3.jpg",
    },{
      title: "Model X",
      description: "Order Online for Touchless Delivery",
      leftBtnText: "Custom Order",
      rightBtnText: "Existing Inventory",
      backgroundImage: "model-x.jpg",
    },{
      title: "Model Y",
      description: "Order Online for Touchless Delivery",
      leftBtnText: "Custom Order",
      rightBtnText: "Existing Inventory",
      backgroundImage: "model-y.jpg",
    },{
      title: "Solar and Powerwall",
      description: "Power Everything",
      leftBtnText: "Learn More",
      rightBtnText: null,
      backgroundImage: "solar-panel.jpg",
    },{
      title: "Accessories",
      description: "",
      leftBtnText: "Shop Now",
      rightBtnText: null,
      backgroundImage: "accessories.jpg",
    },
  ]
  return (
    <Container>

    {sectionInfo.map((section) => {
      <Section
      title={section.title}
      description={section.description}
      leftBtnText={section.leftBtnText}
      rightBtnText={section.rightBtnText}
      backgroundImage={section.backgroundImage}
    />
    })}
      
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;

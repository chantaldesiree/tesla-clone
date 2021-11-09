import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

/**
 * Main component of the application. Container for all components.
 */
function App() {
  return (
    <div className="App">
      {/**
		    * Header component contains navigation links.
		    */}
      <Header />
      
      {/**
		    * Home component contains content/section information.
		    */}
      <Home />

      {/**
		    * Footer component contains copyright information and navigational links.
		    */}
      <Footer />
    </div>
  );
}

export default App;

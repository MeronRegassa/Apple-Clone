import React, { Component } from "react";

// import {  Route } from "react-router";
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
// BrowserRouter
// To add the ability to add routing functionality
// Switch
// Checks provided paths and stops checking all as soon as it finds a match
// Route
// Renders components based on the URL

// Home page
import Navigation from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

// Pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/ProductPage";

// import general css
import "./css/styles.css";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/mac" element={<Mac/>} />
          <Route path="/iphone" element={<Iphone/>} />
          <Route path="/iphone/:pid" element={<Productpage/>} />
          <Route path="*" elementt={<Four04/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

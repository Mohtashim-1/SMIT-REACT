import "./App.css";
// import Nav from "./components/Nav/Nav";
// import "./react-router-dom";
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Nav from "./components/Nav/Nav"
import Carousel from "./components/carousel/Carousel";
import Card from "./components/Card/Card";


function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel />
      <Card />
    </div>
  );
}
export default App;

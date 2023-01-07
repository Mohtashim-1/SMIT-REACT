import "./App.css";
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Nav from "./components/Nav/Nav";
// import Nav-css  from "./components/Nav/Nav.css";
import React from "react";
import { createRoot } from "react-dom/client";
import MainPage from "./components/MainPage/MainPage";
import {Link} from 'react-router-dom'
import Contact from "./components/Contact/Contact";
import About from "./components/About-us/About-us";
import Coarses from "./components/Coarses/Coarses";
import Card from  './components/Card/Card'
import Post1 from "./components/Post/Post1";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register1";
// import Register from "./components/Register/Register";

function App() {
  return (
  
  <BrowserRouter>
  <Nav/>
  <Routes>
    
<Route path="/" element={<MainPage/>}/>
<Route path="/Contact/Contact.tsx" element={<Contact/>}/>
<Route path="/About-us/About-us.tsx" element={<About/>}/>
<Route path="/Coarses/Coarses.tsx" element={<Coarses/>}/>
<Route path="/Post/Post1.tsx" element={<Post1/>}/>
<Route path="/Login/Login.tsx" element={<Login/>}/>
<Route path="/Register/Register.tsx" element={<Register/>}/>

  </Routes>

  
  </BrowserRouter>
    );
}
export default App;

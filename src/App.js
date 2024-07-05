import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";

import  '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'
import ContactPage from "./Components/ContactPage/ContactPage";
import About from "./Components/AboutPage/About";
import Services from "./Components/ServicesPage/Services";
import Portfolio from "./Components/PortfolioPage/Portfolio";
import Blog from "./Components/BlogPage/Blog";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navbar />}>
         <Route index element={<HomePage/>}/> 
         <Route path="/contact" element={<ContactPage/>}/> 
         <Route path="/about" element={<About/>}/> 
         <Route path="/services" element={<Services/>}/> 
         <Route path="/portfolio" element={< Portfolio/>}/> 
         <Route path="/blog" element={< Blog/>}/> 
        </Route>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

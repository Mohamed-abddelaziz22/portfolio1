import React from "react";
import "./index.css";
import Nave from "./Nave";
import Home from "./Home";
import Services from "./Services";
import ContactUs from "./ContactUs";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nave />
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/Services" element={<Services />} />
          <Route  path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

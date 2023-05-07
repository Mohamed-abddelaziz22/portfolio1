import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Nave = () => {
  const body = document.querySelector("body")
  function bb (){
body.classList.toggle("dark")

  }
  return (
    <BrowserRouter>
      <div className="all-nav">
        <Navbar bg="" variant="light" className="nav">
          <Container>
            <Navbar.Brand id="Home" href="/">
              الصفحة الرئيسية
            </Navbar.Brand>
        <Nav.Link  className="darkmode" onClick={bb} to="">Change Mode</Nav.Link>
            <Nav className="me-right" id="nave-r">
              <Nav.Link href="/Services">خدماتي</Nav.Link>
              <Nav.Link href="/ContactUs">تواصل معي</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </BrowserRouter>
  );
};

export default Nave;

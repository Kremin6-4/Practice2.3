import React, { Component } from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "./logo192.png";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contacts from "../Pages/Contacts";
import About from "../Pages/About";
import News from "../Pages/News";
import Products from "../Pages/Products";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt="logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="/Contacts">Contacts</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/news">News</Nav.Link>
                <Nav.Link href="/Products">Products</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/news" component={News} />
            <Route exact path="/products" component={Products} />
          </Switch>
        </Router>
      </>
    );
  }
}

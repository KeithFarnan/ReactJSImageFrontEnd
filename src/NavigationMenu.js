import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavigationMenu() {
  return (
    <Navbar bg="primary" variant="dark" fixed="bottom">
      <Nav>
        <Nav.Link href="#All-Pictures">
          <b>Pictures</b>
        </Nav.Link>
        <Nav.Link href="#Albums">
          <b>Picture Albums</b>
        </Nav.Link>
        <Nav.Link href="#Videos">
          <b>Videos</b>
        </Nav.Link>
        <Nav.Link href="#Upload">
          <b>Upload</b>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationMenu;

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
import Col from "react-bootstrap/Col";

function SearchBar() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Navbar bg="primary" variant="dark" fixed="top">
          <FormControl type="text" placeholder="Search" />
          <Button variant="success">Search</Button>
        </Navbar>
      </Row>
    </Container>
  );
}

export default SearchBar;

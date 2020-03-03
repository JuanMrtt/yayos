import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import AuthServices from "../../../services/auth.services";

import { Link } from "react-router-dom";
import "./nav-module.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.services = new AuthServices();
  }

  logout = () => {
    this.services
      .logout()
      .then(response => {
        this.props.setTheUser(false);
      })
      .catch(err => console.log(err));
  };

  render() {
    return this.props.loggedInUser ? (
      <Navbar expand="lg" className="general-nav">
          <Navbar.Brand>
              <Link to="/"> <p>YAYOS</p> </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as="div">
                <Link to="/main"><p>Inicio</p></Link>
              </Nav.Link>
              <Nav.Link as="div">
                <Link to="/profile"><p>Perfil</p></Link>
              </Nav.Link>
              <Nav.Link onClick={this.logout}><p>Cerrar sesión</p></Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    ) : (
      <Navbar expand="lg" className="general-nav">
          <Navbar.Brand>
              <Link to="/"><p>YAYOS</p></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as="div">
                <Link to="/login"><p>Iniciar Sesion</p></Link>
              </Nav.Link>
              <Nav.Link as="div">
                <Link to="/signup"><p>Registro</p></Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;

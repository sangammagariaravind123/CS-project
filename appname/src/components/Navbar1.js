import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem
} from "react-bootstrap";

export default class Navbar1 extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
          </Nav>
        </Navbar>
        ;
      </div>
    );
  }
}

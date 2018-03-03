import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const maybeAnchor = (path) => window.location.pathname.includes('about') ? '/' : path

export default () => (
  <Navbar inverse collapseOnSelect fluid>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav>
        <NavItem className="nav-item" eventKey={1} href={maybeAnchor("/#product")}>product</NavItem>
        <NavItem className="nav-item" eventKey={1.1} href={maybeAnchor("/#visual")}>visual</NavItem>
        <NavItem className="nav-item" eventKey={1.2} href={maybeAnchor("/#on-the-side")}>on the side</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem className="nav-item" to="/about" href="/about">about</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

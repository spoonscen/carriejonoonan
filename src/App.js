import React, { Component } from 'react'
import './App.css'
import homeImage from './assets/home-image.svg'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import ScrollableAnchor from 'react-scrollable-anchor'

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>
)

const Navigation = () => (
  <Navbar inverse collapseOnSelect fluid>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/#product">Product</NavItem>
        <NavItem eventKey={1.1} href="/#visual">Visual</NavItem>
        <NavItem eventKey={1.2} href="/#on-the-side">On the side</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem to="/about" href="/about">About</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

const Page = ({ children }) => (
  <div id="container">
    {children}
  </div>
)


const Home = () => (
  <Page>
    <div>
      <img className="banner" src={homeImage} />
    </div>
    <ScrollableAnchor id={'product'}>
      <h2>Product</h2>
    </ScrollableAnchor>
    <ScrollableAnchor id={'visual'}>
      <h2>Visual</h2>
    </ScrollableAnchor>
    <ScrollableAnchor id={'on-the-side'}>
      <h2>On the side</h2>
    </ScrollableAnchor>
  </Page>
)

const About = () => (
  <Page>
    <p>foo</p>
  </Page>
)

export default App


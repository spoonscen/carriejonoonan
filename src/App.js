import React, { Component } from 'react'
import styled from 'styled-components'

import homeImage from './assets/home-image.svg'
import { BrowserRouter as Router, Route } from "react-router-dom"
import ScrollableAnchor from 'react-scrollable-anchor'
import Navigation from './Navigation'
import Page from './Page'
import { ThemeProvider } from 'styled-components'

const theme = {
  black: '#1B1723',
  pink: '#FFA4F6',
  green: '#86EDDF',
  blue: '#5D76DD',
}

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  </ThemeProvider>
)


class Home extends Component {

  render() {
    return (
      <div>
        <Page image={homeImage}>
          <ProductDesign />
          <VisualDesign />
          <OnTheSide />
        </Page>
      </div>
    )
  }
}

const About = () => (
  <Page image={homeImage}>
    <p>foo</p>
  </Page>
)

const LabelWrapper = styled.div`
  color: white;
`

const Label = ({ label }) => <LabelWrapper><span><i >{label}</i></span></LabelWrapper>

const AnchorBox = styled.div`
  padding-bottom: 3000px;
  padding-top: 70px;
  margin-top: -60px;
  &:nth-child(3) {
    background-color: ${props => props.theme.pink}
  }
  &:nth-child(4) {
    background-color: ${props => props.theme.green}
  }
  &:nth-child(5) {
    background-color: ${props => props.theme.blue}
  }
`

class OnTheSide extends Component {
  render() {
    return (
      <AnchorBox id="on-the-side">
        <Label label="on the side" />
      </AnchorBox >
    )
  }
}
class VisualDesign extends Component {
  render() {
    return (
      <AnchorBox id="visual">
        <Label label="visual design" />
      </AnchorBox >
    )
  }
}

// Must be a class to have a ref
class ProductDesign extends Component {
  render() {
    return (
      <AnchorBox id="product">
        <Label label="product design" />
      </AnchorBox >
    )
  }
}

export default App


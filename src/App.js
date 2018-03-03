import React, { Component } from 'react'
import './App.css'
import homeImage from './assets/home-image.svg'
import { BrowserRouter as Router, Route } from "react-router-dom"
import ScrollableAnchor from 'react-scrollable-anchor'
import productsImage1 from './assets/product-design/1.png'
import productsImage2 from './assets/product-design/2.png'
import productsImage3 from './assets/product-design/3.png'
import Navigation from './Navigation'
import Page from './Page'

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>
)




const Home = () => (
  <Page image={homeImage}>
    <ScrollableAnchor id={'product'}>
      <ProductDesign />
    </ScrollableAnchor>
    <ScrollableAnchor id={'visual'}>
      <VisualDesign />
    </ScrollableAnchor>
    <ScrollableAnchor id={'on-the-side'}>
      <OnTheSide />
    </ScrollableAnchor>
  </Page>
)

const About = () => (
  <Page image={homeImage}>
    <p>foo</p>
  </Page>
)

const Label = ({ label }) => <div className="design-label"><span><i>{label}</i></span></div>

class OnTheSide extends Component {
  render() {
    return (
      <div id="product-design">
        <Label label="on the side" />
      </div >
    )
  }
}
class VisualDesign extends Component {
  render() {
    return (
      <div id="product-design">
        <Label label="visual design" />
      </div >
    )
  }
}


// Must be a class to have a ref
class ProductDesign extends Component {
  render() {
    return (
      <div id="product-design">
        <Label label="product design" />
        <div className="products-container">
          <div className="row">
            <div className="col-md-12 behind">
              <img src={productsImage1} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 no-padding">
              <img src={productsImage2} />
            </div>
            <div className="col-md-6 no-padding">
              <img src={productsImage3} />
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default App


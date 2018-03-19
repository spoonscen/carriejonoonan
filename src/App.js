import React, { Component } from 'react'
import styled from 'styled-components'

import carrieBanner from './assets/Carrie-Banner.svg'
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
  grey: '#D7DBDE',
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
        <Page image={carrieBanner}>
          <ProductDesign />
          <VisualDesign />
          <OnTheSide />
        </Page>
      </div>
    )
  }
}

const About = () => (
  <Page image={carrieBanner}>
    <p>foo</p>
  </Page>
)

const Section = styled.div`
  /* padding-bottom: 3000px; */
  padding-top: 70px;
  margin-top: -60px;
  padding-bottom: 70px;
  background-color: white;
`

const ProductCardWrapper = styled.div`
  width: 90%;
  height: 500px;
  margin: 20px auto;
  border: 1px solid ${props => props.theme.grey};
  &:nth-child(1) {
    margin-top: 60px;
  }
  display: flex;
  align-items: stretch;
`

const ProductTextContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 40%;
  padding-left: 42px;
`

const ProductImage = styled.div`
  background-color: papayawhip;
  width: 60%;
`

const ProductHeader = styled.span`
  color: ${props => props.theme.blue};
  height: 17px;
  width: 249px;
  font-size: 14px;
  line-height: 17px;
  margin-top: 72px;
  flex-grow: 10;
  order: 1;
`

const CompanyName = styled.span`
  color: ${props => props.theme.blue};
  height: 17px;
  width: 249px;
  font-size: 14px;
  line-height: 17px;
  order: 2;
`

const Project = styled.span`
  height: 48px;
  color: ${props => props.theme.black};;
  font-size: 40px;
  line-height: 48px;
  order: 3;
  margin-bottom: 60px;
  font-weight: 100;
`

const ProductCard = ({ companyName, projectName }) => (
  <ProductCardWrapper>
    <ProductTextContainer>
      <ProductHeader>/UX Design /UI Design /User Research</ProductHeader>
      <CompanyName>{companyName}</CompanyName>
      <Project>{projectName}</Project>
    </ProductTextContainer>
    <ProductImage />
  </ProductCardWrapper>
)


const ProductDesign = () => (
  <Section id="product">
    <ProductCard companyName="Yesware" projectName="Campaigns" />
    <ProductCard companyName="Yesware" projectName="Email Tracking" />
    <ProductCard companyName="Maxwell Health" projectName="Tempo" />
  </Section >
)

const SmallCardRow = styled.div`
  height: 427px;
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  align-items: stretch;
  margin: 0 auto;
`

const SmallCardWrapper = styled.div`
  width: 33.2%;
  min-width: 427px;
  border: 1px solid ${props => props.theme.grey};
  &:nth-child(2) {
    border-left: none;
    border-right: none;
  }
`



const VisualDesign = () => (
  <Section id="visual">
    <SmallCardRow>
      <SmallCardWrapper>
      </SmallCardWrapper>
      <SmallCardWrapper>
      </SmallCardWrapper>
      <SmallCardWrapper>
      </SmallCardWrapper>
    </SmallCardRow>
  </Section >
)

const OnTheSide = () => (
  <Section id="on-the-side">
  </Section >
)

export default App


import React from 'react'
import styled, { className } from 'styled-components'
import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';
import { camelCase } from 'lodash'


const Nav = styled.table`
  padding-top: 1em;
  padding-left: 4em;
  padding-right: 4em;
  padding-bottom: 1em;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${props => props.theme.black};
`

const NavItem = styled.td`
  min-width: 82px;
  font-size: 18px;
  line-height: 22px;
  &:nth-child(1) {
    width: 8%;
    text-align: center;
  }
  &:nth-child(2) {
    width: 8%;
    text-align: center;
  }
  &:nth-child(3) {
    width: 8%;
    text-align: center;
  }
  &:nth-child(4) {
    width: 88%;
    text-align: right;
  }
`

const maybeAnchor = (path) => window.location.pathname.includes('about') ? '/' : path

const BaseLink = styled(NavHashLink) `
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 2px;
  text-decoration: none;
`
const ProductLink = styled(BaseLink) `
  color: ${props => props.active ? props.theme.black : props.theme.blue};
  background-color: ${props => props.active ? props.theme.blue : props.theme.black};
`
const VisualLink = styled(BaseLink) `
  color: ${props => props.active ? props.theme.black : props.theme.green};
  background-color: ${props => props.active ? props.theme.green : props.theme.black};
`
const OnTheSideLink = styled(BaseLink) `
  color: ${props => props.active ? props.theme.black : props.theme.pink};
  background-color: ${props => props.active ? props.theme.pink : props.theme.black};
`

const AboutLink = styled(BaseLink) `
  color: ${props => props.active ? props.theme.black : props.theme.pink};
  background-color: ${props => props.active ? props.theme.pink : props.theme.black};
`

const initialState = {
  productActive: 0,
  visualActive: 0,
  onTheSideActive: 0,
  aboutActive: 0,
}

export default class extends React.Component {
  state = initialState
  observer
  componentDidMount() {
    window.scroll(0, 0)
    window.history.pushState('', document.title, window.location.pathname);

    this.observer = new IntersectionObserver(([entry], observer) => {
      const hash = '#' + entry.target.id
      if (entry.isIntersecting) {
        if (entry.target.id === 'secret') {
          if (window.history.pushState) {
            window.history.pushState('', document.title, window.location.pathname);
          } else {
            window.location.hash = '';
          }
          this.setState(initialState)
        } else if (window.history.pushState) {
          window.history.pushState(null, null, hash);
        } else {
          window.location.hash = hash;
        }
        this.setState({ ...initialState, [camelCase(entry.target.id) + 'Active']: 1 })
      }
    }, {
        rootMargin: '0px',
        root: null,
        threshold: [0, 0.5]
      })
    this.observer.observe(document.getElementById('product'))
    this.observer.observe(document.getElementById('visual'))
    this.observer.observe(document.getElementById('on-the-side'))
    this.observer.observe(document.getElementById('secret'))
  }

  componentWillUnmount() {
    this.observer && this.observer.disconnect
  }

  render() {
    const { productActive, visualActive, onTheSideActive, aboutActive } = this.state
    return (

      <Nav>
        <tbody>
          <tr>
            <NavItem>
              <ProductLink
                scroll={this.scroll}
                active={productActive}
                to={maybeAnchor('#product')}>product
                </ProductLink>
            </NavItem>
            <NavItem><VisualLink active={visualActive} scroll={this.scroll} to={maybeAnchor('#visual')}>visual</VisualLink></NavItem>
            <NavItem><OnTheSideLink active={onTheSideActive} scroll={this.scroll} to={maybeAnchor('#on-the-side')}>on the side</OnTheSideLink></NavItem>
            <NavItem><AboutLink active={aboutActive} to='/about'>about</AboutLink></NavItem>
          </tr>
        </tbody>
      </Nav>
    )
  }

  scroll = (el) => {
    el.scrollIntoView({ block: "start", inline: "nearest", behavior: 'smooth' })
  }
}


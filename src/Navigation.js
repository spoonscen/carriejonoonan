import React from 'react'
import styled, { className } from 'styled-components'
import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';
import { camelCase, range, debounce } from 'lodash'

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
  min-width: 112px;
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

export default class extends React.Component {
  initialState = {
    productActive: 0,
    visualActive: 0,
    onTheSideActive: 0,
    aboutActive: 0,
    bannerActive: 0,
  }
  state = this.initialState
  navHeight = 60
  anchors = []


  componentDidMount() {
    window.addEventListener('scroll', this.debouncedHandleScroll);
    this.anchors = [
      document.getElementById('banner'),
      document.getElementById('product'),
      document.getElementById('visual'),
      document.getElementById('on-the-side'),
    ]

    if (window.location.hash.includes('#')) {
      const id = window.location.hash.replace('#', '')
      this.setState({ ...this.initialState, [camelCase([id, 'Active'])]: 1 })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.debouncedHandleScroll);
  }



  handleScroll = () => {
    this.anchors.forEach(el => {
      const { top } = el.getBoundingClientRect()
      if (top < this.navHeight && top > -10) {
        if (el.id === 'banner') {
          window.history.pushState('', document.title, window.location.pathname);
        } else {
          window.history.pushState(null, null, '#' + el.id);
        }
        this.setState({ ...this.initialState, [camelCase([el.id, 'Active'])]: 1 })
      }
    })
  }

  debouncedHandleScroll = debounce(this.handleScroll, 5)

  render() {
    const { productActive, visualActive, onTheSideActive, aboutActive } = this.state
    return (

      <Nav id="nav">
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


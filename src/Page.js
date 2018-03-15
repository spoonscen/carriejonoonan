import React from 'react'
import styled from 'styled-components'

const Banner = styled.img`
  width: 100%;
`

const Page = ({ children, image }) => (
  <div id="container">
    <div id="secret"></div>
    <Banner alt="Carrie Noonan" id="banner" src={image} />
    {children}
  </div>
)

export default Page

import React from 'react'

const Page = ({ children, image }) => (
  <div id="container">
    <div>
      <img alt="loading" className="banner" src={image} />
      <div className="arrow"></div>
    </div>
    {children}
  </div>
)

export default Page

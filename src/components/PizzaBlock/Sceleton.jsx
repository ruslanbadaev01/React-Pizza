import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="135" cy="137" r="126" /> 
    <rect x="0" y="NaN" rx="0" ry="0" width="250" height="NaN" /> 
    <rect x="-1" y="282" rx="10" ry="10" width="280" height="33" /> 
    <rect x="-2" y="329" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="451" rx="10" ry="10" width="95" height="30" /> 
    <rect x="126" y="442" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Sceleton
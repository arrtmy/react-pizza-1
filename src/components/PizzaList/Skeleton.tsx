import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="2" y="277" rx="10" ry="10" width="279" height="23" /> 
    <rect x="2" y="326" rx="10" ry="10" width="278" height="88" /> 
    <circle cx="137" cy="129" r="128" /> 
    <rect x="5" y="428" rx="15" ry="15" width="97" height="29" /> 
    <rect x="139" y="421" rx="20" ry="20" width="137" height="43" />
  </ContentLoader>
)

export default Skeleton


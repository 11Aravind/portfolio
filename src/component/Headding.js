// import React from 'react'
export default function Headding({number,headding}) {
  return (
    <>
      <div className="headingContainer">
  <h2 className="headding"><span className="number">{number} </span> {headding}</h2>
  <div className="hr"></div>
  </div>
    </>
  )
}

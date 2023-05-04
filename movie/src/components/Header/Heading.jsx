import React from "react"

const Heading = ({ title, subtitle }) => {
  return (
    <div>
      <div className='heading'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default Heading
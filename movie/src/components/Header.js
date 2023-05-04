import React from "react"
import "./header.css"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
const Header = () =>{
  return(
      <div className="header">
        <div>
          <img src={logo} alt="logo"/>
        </div>
        <div className="list">
        <Link to="/">Home</Link>
        <Link to ="/awards">Awards</Link>
        <Link to="/">List</Link>
        </div>
      </div>
  )
}

export default Header

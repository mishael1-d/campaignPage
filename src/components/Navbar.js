import React from 'react'
import logo from "../assets/logo.png"
import profileImage from "../assets/profile-pic.png"
import caretDown from "../assets/caret-down.png"
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Flytant" />
          </Link>
        </div>
        <div className="profile">
            <img src={profileImage} alt="Profile Pics" className="profile_pic"/>
            <img src={caretDown} alt="Profile Pics" className="caret_down"/>
        </div>
    </div>
  )
}

export default Navbar
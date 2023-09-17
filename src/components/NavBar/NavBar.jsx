import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <ol>
            <li> <NavLink to={"/"}>Home</NavLink> </li>
            <li><NavLink to={"/about"}>About</NavLink> </li>
            <li><NavLink to={"/airplanes"}>Airplanes</NavLink> </li>
        </ol>
    </div>
  )
}

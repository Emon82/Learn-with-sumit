import React from 'react'
import logo from '../Images/logo-bg.png'
import '../Styles/Navmoudul.css'
import Account from './Account'

export default function Nav() {
  return (
<div>
 <nav className="nav">
    <ul>
      <li>
        <a href="index.html" className="brand">
          <img src={logo} alt="Learn with Sumit Logo" />
          <h3>Learn with Sumit</h3>
        </a>
      </li>
    </ul>
    <Account/>
  </nav>
  </div>
  )
}

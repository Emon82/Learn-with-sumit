import React from 'react'
import logo from '../Images/logo-bg.png'
import '../Styles/Navmoudul.css'
import Account from './Account';
import {Link} from "react-router-dom";

export default function Nav() {
  return (
<div>
 <nav className="nav">
    <ul>
      <li>
        <Link to="/" className="brand">
          <img src={logo} alt="Learn with Sumit Logo" />
          <h3>Learn with Sumit</h3>
        </Link>
      </li>
    </ul>
    <Account/>
  </nav>
  </div>
  )
}

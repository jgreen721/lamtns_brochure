import React from 'react'
import {Link} from "react-router-dom"
import "./MobileMenu.css"

const MobileMenu = ({showMenu}) => {
  return (
    <div className={showMenu ? "mobile-menu show-mobile" : "mobile-menu"}>
        <li className="mobile-item">
            <Link className="mobile-link" to="/history">History</Link>
        </li>
        <li className="mobile-item">
            <Link className="mobile-link" to="/team">Team</Link>
        </li>
    </div>
  )
}

export default MobileMenu
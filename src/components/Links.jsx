import React from 'react'
import { Link } from 'react-router-dom'

export default function Links() {
  return (
    <div>
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/general"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            {/* <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
    </ul>
    
  </div>

  )
}

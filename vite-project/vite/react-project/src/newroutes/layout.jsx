import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './layout.css'


export default function layout() {
  return (
    <div>
          <div>
            <nav>
                <ul className='nav'>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/contactus">Contact</Link></li>
                </ul>
            </nav>
          </div>
          <div> 
            <Outlet />
          </div>
    </div>
  )
}

import React from 'react';
import {NavLink} from 'react-router-dom'
import './Links.css'

const Links = props => {
    return(
        <ul className='nav-links'>
           <li>
             <NavLink to='/' exact>
              <button className='Link-btn'>
                Home
              </button>
             </NavLink>
           </li>
           <li>
             <NavLink to='/home'>
             <button className='Link-btn'>
                Releases
              </button>
             </NavLink>
           </li>
           <li>
             <NavLink to='/profile'>
              <button className='Link-btn'>
                About
              </button>
             </NavLink>
           </li>
        </ul>
    )
} 

export default Links; 
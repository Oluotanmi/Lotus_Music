import React from "react";
import  ReactDOM  from "react-dom";
import { NavLink } from "react-router-dom";
import './SideDrawer.css'


const SideDrawer =( { closeDrawer } )=> { 

 

const content = 
  <aside className="side-drawer">
     <ul className="side-link" >
           <li>
             <NavLink to='/' exact  onClick={closeDrawer}>
                 Home 
             </NavLink>
           </li>
           <li>
             <NavLink to='/home' onClick={closeDrawer}>
                 All songs
             </NavLink>
           </li>
           <li>
             <NavLink to='/profile'  onClick={closeDrawer} >
                 Profile
             </NavLink>
           </li>           
        </ul>       
 </aside>
 
 return ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
    
}


export default SideDrawer;
import * as React from 'react';
import '../MainNavigation/MainNavigation.css'
import { useState } from 'react';
import Link from './LinkNaviagation/Links.js'
import SideDrawer from './LinkNaviagation/SideDrawer.js';


export default function MainNavigation() {

  const [ Drawer, setcloseDrawer] =useState(false);

  const openDrawer= () =>{
     setcloseDrawer(true)
  }
  const closeDrawer =() => {
    setcloseDrawer(false)
  }

  return (
   <React.Fragment>
 
     { Drawer && <SideDrawer  closeDrawer={closeDrawer}/>}
       
<div className='main-navigation'>
  <div className='div-container' onClick={openDrawer}>
   <div className='div'></div>
   <div className='div'></div>
   <div className='div'></div>
  </div>
  <div className='lotus'>
  
  </div>
  <div className='main-navigation-link'>
          <Link />
  </div>
 </div>     
   </React.Fragment>
  );
}
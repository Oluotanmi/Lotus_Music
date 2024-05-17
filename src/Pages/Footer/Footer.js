import React from 'react'
import footer from './Footer.module.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Links from '../../MainNavigation/LinkNaviagation/Links';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export default function Footer (){
   return (
    <div className={footer.container}>
       {/* <div>
         <h1>Lotus Music</h1>
       </div>
       */}
       	<Link to='/Home'>
           <button className='button'>Listen More</button>
			</Link>
       <div className={footer.con2} >
        <div>
         <img src='facebookk.png' className={footer.facebook} alt='facebook' />
        </div>
        <div>
         <img src='instagramm.png' className={footer.instagram} alt='instagram'/>
        </div>
        <div>
         <img src='twitterr (1).png' className={footer.twitter} alt='twitter'/>
        </div>
        <div>
         <img src='whatsappp.png' className={footer.whatsapp} alt='whatsapp'/>  
        </div>  
       </div>
       <div style={{ }}>
       <h6 style={{ fontSize:'10px',color:'white',textAlign: 'center'}}>@2024 RayTech.Alright reserved</h6>
       </div>
    </div>
   )
}
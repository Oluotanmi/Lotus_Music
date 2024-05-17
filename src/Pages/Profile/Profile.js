import React from 'react'
import profile from './Profile.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';


function Profile(){
    return (
      <div className={profile.contain}>
        <h1 className={profile.profile}>About</h1>
        
         <div className={profile.main_container}>           
            <img  src="lotus.jpg"  className={profile.profile_img} alt='pic'/>
           
            <div>
              <div style={{ textAlign: 'center' }}>
                  <p className={profile.profile_txt}>Oluotanmi tosin damilola</p>
                  <p className={profile.lotus_txt3}>Lotus music is a sound birthed from the inspiration of God.  
                  <br />Oluotanmi Lotus is a multi talented gospel vocalist, instrumentalist 
                  and<br /> musician who creates music filled with God's inspiration. </p> 
             </div>
              <div className={profile.icon_container}>
               
               <a href='https://web.facebook.com/?_rdc=1&_rdr'>
                <div className={profile.div}>
                 <img className={profile.icon} src='instagram.png' alt='instagram' />
                </div> 
               </a>
                <div className={profile.div} >
                 <img className={profile.icon} src='facebook.png' alt='facebook' />
                 
                </div>

                <div className={profile.div}>
                 <img className={profile.icon}  src='whatsapp.png' alt='whatsapp' />
                 
                </div>

                <div className={profile.div}>
                 <img className={profile.icon} src='twitterr (1).png' alt='twitter' />
                
                </div>
                 
              </div>

            </div>

         </div>

      </div>  
    )
 }
 
 export default Profile;
import React, { useState } from 'react'
import classes from './Home.module.css'
import { PauseFill, PlayFill,} from 'react-bootstrap-icons';



function Control(props){
  const [audio, setAudio]=useState(new Audio(props.source))
  // let player = new Audio(props.source)

     
		 if(props.playState === true)
		   audio.play()
     else
		  audio.pause()
	  
  return(
    <div>
      {
				props.playState === true ? 
					<button 
						className={classes.centerButton}
						onClick={x => props.setPlayState(false)}>
						<PauseFill />
					</button>  
          :
					 <button 
						className={classes.centerButton}
					  onClick={x => props.setPlayState(true)}>
					  <PlayFill />
					</button>
        }
    </div>
  )
}

function Container(props){
	let [playState, setPlayState] = React.useState(false); 
 
  
  return(
    <div>
     <Control 
        source={props.source}
				playState={playState} 
				setPlayState={setPlayState}
     />   
    </div>   
   )
  }
function HomeSetup(props){
	let [playState, setPlayState] = React.useState(false); 

  console.log(props.source)
    return(
        <div className={classes.card} style={{ backgroundImage: `${props.img}` }}>
          <img  className={classes.img} src={props.img} alt={props.name}/>
          <Container 
            className={classes.playerContain}
            source={props.source}
            playState={playState} 
            setPlayState={setPlayState}
          />       
          <h2 className={classes.text_hover} style={{ color: 'white' }}>Title: {props.name}</h2>        
        </div>
      
    )
}
export default HomeSetup;

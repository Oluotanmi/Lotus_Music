import React, { useEffect } from 'react'
import img from '../Music/silivan-munguarakarama-NrR9gn3lFKU-unsplash.jpg'

import './NewRelease.css'

import { 
	PauseFill, 
	PlayFill, } from 'react-bootstrap-icons';



  const tracks = [
    {
      name: "Here",
      artist: "Lotus",
      cover: "IMG-20221005-WA0017.jpg",
      source: 'Lotus - Here.mp3',
     
    }
  ]

  const player = new Audio(tracks[0].source)
  player.setAttribute('preload', 'metadata')
  const userOptions = React.createContext({
    shuffle: false,
    repeat: false,
  })


function Control(props){
  return(
    <div>
      {
		props.playState === true ? 
		 <button 
			className="centerButton"
			  onClick={x => props.setPlayState(false)}>
				<PauseFill />
		</button> : 
		<button
			className="centerButton"
			 onClick={x => props.setPlayState(true)}>
			<PlayFill />
		</button>
		}
    </div>
  )
}

function Progress(props){
	let [currLength, setCurrLength] = React.useState(0)
	let [length, setLength] = React.useState(0)
	let options = React.useContext(userOptions)
	const progressBar = document.querySelector('.progressBar')
	
	function updateProgress(e){
		let offset = e.target.getBoundingClientRect().left
		let newOffSet = e.clientX
		let newWidth = newOffSet - offset
		progressBar.style.width = newWidth+"px"
		let secPerPx = length / 280
		player.currentTime = secPerPx * newWidth
	}
	
	
	
	function formatTime(s){
		return Number.isNaN(s) ? '0:00' : (s-(s%=60))/60+(9<s?':':':0')+s
	}
	
	return(
		<div className="progress">
			<div className="currentTime">
				<p className='currentTime_txt'>{formatTime(currLength)}</p>
			</div>
			<div 
			className="progressCenter" 
			onClick={(e) => updateProgress(e)}>
				<div className="progressBar">
				</div>
			</div>
			<div className="lastTime">
				<p className='currentTime_txt2'>{formatTime(length)}</p>
			</div>
		</div>
	);
}


function Avatar(props){	
	return(
		<>
      <img src={tracks[props.idx].cover} className="avatar1"/>
			<img src={tracks[props.idx].cover} className="avatar"/>
			<h4 className="name">{tracks[props.idx].artist}</h4>
			<h1 className="title">{tracks[props.idx].name}</h1>
		</>
	);
}



function Container(){
	let [idx, setIdx] = React.useState(0);
	let [playState, setPlayState] = React.useState(false);
	let oldIdx = React.useRef(idx)
	React.useEffect(() => {
		
		if(playState === true)
			player.play()
		else
			player.pause()
		
			
	})
	
	return(
		<div className="playerContaier">
			<Avatar 
			idx={idx}/>
			<Progress 
				setIdx={setIdx} 
				idx={idx} 
			/> 
			<Control 
				setIdx={setIdx} 
				idx={idx}  
				playState={playState} 
				setPlayState={setPlayState}
			/>
			
		</div>
	);
}




function NewRelease(){


   return (
     <div className='newrelease_container'>
        <div className='contain'>
            <div className='flex1'>          
              <h1 className='lotus_txt2'>Oluotanmi Lotus </h1>
			  <h4 className='lst_rel_txt'>Latest Release</h4>           
            </div>
        </div>   
      <div>
        <Container />
      </div>
     </div>     
   )
}

export default NewRelease;
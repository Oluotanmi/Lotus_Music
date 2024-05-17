import {useState, useEffect} from 'react'
import Axios from 'axios'

import CommentUI from "./CommentUI/CommentUI.js"

import './Container.css'

const Container = () => {

  const [commentdata, setCommentData] =useState([])
 
  const url = 'http://localhost:5000/commentStore';
 
 useEffect( () => {
   Axios.get(url)
    .then(response => {
     console.log(response.data)
      setCommentData(response.data)
    })
    .catch( err =>{
       console.log(err)
     } 
    )
 },[])


 const ele = commentdata.map( each => {
  return <CommentUI 
    key={each._id}
    name={each.name}
    usercomment={each.usercomment} 
    date={each.date} 
  />
 })

   return( 
        <div className="container">
         {ele}
        </div>
    )
}

export default Container;
import React from "react";

import './commentUI.css'

function CommentUI (props) {

  return (
    <div>
       <div>
         <div className="commentUI-container" alt={props._id}>
           <div className="commentUI-div">
             <img className="imag" src="user.png"  alt="name"/>
           </div>
        
           <p className="comment-name">{props.name}</p>  
         </div>
         <div>
          <p className="user_date">
            {props.date}
          </p>
          <p className="user_comment">
           {props.usercomment} 
          </p>
        </div>
        </div>
        
    </div>
   )
}


export default CommentUI;
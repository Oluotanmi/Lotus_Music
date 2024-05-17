import React,{useState} from 'react';
import Axios from 'axios'

import './Comment.css'

const Comment =()=> {

 const [name, setName]= useState('');
 const [usercomment, setUserComment ] = useState('')
 const [openWarning, setOpenWarning] = useState(true)

const handleSubmit =(e) => { 
  if(name === ''){
    setOpenWarning(false)
   }if(name.trim() === ''){
    e.preventDeafault()
    alert('input cannot be empty')

   }
  
   setName('')
   setUserComment('')
   console.log(name, usercomment)
  

   Axios.post('http://localhost:5000/commentStore',{ 
    fullName: name,
    userComment: usercomment,
  })
    .then( res => {
       console.log( res )
    }).catch(err => {
        console.log(err.res.fullName)
    })
    setName('');
    setUserComment('')
  }

  const refreshPage=() => {
     window.location.reload(false)
  }

 function Warning(){
   return(
    (<div>
      <h4 style={{ color:'blue' }}>Sorry ,please input something</h4>
      <button style={{ color: '#7a4de1',borderRadius: '30px' }} className='submit' onClick={() => setOpenWarning(true)}>Try Aain</button>
    </div>)
   )
 }

return (
  <div>
    { openWarning ?
    <div>
    <h1 className='comments'>Comments</h1>
      <form   onSubmit={handleSubmit}>
      <div className='input'>
        <p style={{ color: 'white' }}>Name</p>
        <input 
          style={{ padding: '15px', borderRadius: '20px', borderStyle: 'none',margin:'5px',width:'250px'  }}
          id='name'
          type='text'
          name='name'
          value={name}
          onChange={ (e) => setName(e.target.value)}
        />
        <p style={{ color: 'white' }}>Comment </p>
         <input 
           style={{ padding: '15px', borderRadius: '20px', borderStyle: 'none', margin:'10px', width:'250px'  }}
           id='UserComment'
           type='text'
           name='name'
           value={usercomment}
           onChange={ (e) => setUserComment(e.target.value)}
        />
      </div>
        {/* <TextField 
          autoFocus
          fullWidth
          label='Name'
          id='name'
          type='text'
          name='name'
          value={name}
          onChange={ (e) => setName(e.target.value)}
        />
         <TextField 
          autoFocus
          fullWidth
          label='Say Something'
          id='UserComment'
          type='text'
          name='name'
          value={usercomment}
          onChange={ (e) => setUserComment(e.target.value)}
      /> */}
      
      <button style={{ color: '#7a4de1',borderRadius: '30px' }} className='submit'> Send </button>
      </form>
     </div>
     :
     <Warning />
   }
 </div>
 )
}

export default Comment; 
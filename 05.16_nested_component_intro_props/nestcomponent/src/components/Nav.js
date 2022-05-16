import React from 'react'

export default function Nav({myToggle,username}) {
  return (   
   <ul style={ myToggle ?
     {backgroundColor: "rgb(111,111,111)", position: 'relative'}
     : {backgroundColor: "rgb(20,20,20)"
      , position: 'relative', color: 'rgb(255,255,255)'} 
   }> 
       <li>{username}</li>
       <li>About</li>
       <li>Contact</li>
   </ul>      
  )
}

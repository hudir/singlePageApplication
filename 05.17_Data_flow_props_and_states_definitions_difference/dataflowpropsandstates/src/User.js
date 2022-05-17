import React, { useState } from 'react'

let data = [{userName: "john1", email: "qqqq", city: "wwwwww"}, {userName: "john2", email: "xxxx", city: "wwwwww"},{userName: "john3", email: "qqqq", city: "wwwwww"},{userName: "john", email: "qqqq", city: "wwwwww"},{userName: "john4", email: "qqqq", city: "wwwwww"},{userName: "max", email: "dfgdfgdfg", city: "hjh"}];

// let i = 0

export default function User() {

    
    
    console.log(Boolean(data === data)) 

    let [user, setUser ] = useState(data[0])
   
    

   const eventFunction = e =>{
    let i = data.indexOf(user)
    
    console.log(user);
    console.log(i);

    if(i===data.length-1) setUser(data[0])
    else setUser(data[i + 1])

    // i++
   }

  return (
    <div onClick={eventFunction}>
        <div>next user</div>
        <h2>{user.userName}</h2>
        <h3>{user.email}</h3>
        <h4>{user.city}</h4>
    </div>
  )
}

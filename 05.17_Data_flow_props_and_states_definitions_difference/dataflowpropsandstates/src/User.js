// import React, { useState } from 'react';

// let i = 0;

// export default function User() {

//     let [users, setUser ] = useState([{userName: "john1", email: "qqqq", city: "wwwwww"}, {userName: "john2", email: "xxxx", city: "wwwwww"},{userName: "john3", email: "qqqq", city: "wwwwww"},{userName: "john", email: "qqqq", city: "wwwwww"},{userName: "john4", email: "qqqq", city: "wwwwww"},{userName: "max", email: "dfgdfgdfg", city: "hjh"}])
   
//    const eventFunction = e =>{
//     // let i = user.indexOf(user[i])
//      if(i===users.length-1) i=0
//     else  i++
//     setUser(users)
//     console.log(i);
//    }
  
//   return (
//     <div onClick={eventFunction}>
//         <div>next user</div>
//         <h2>{users[i].userName}</h2>
//         <h3>{users[i].email}</h3>
//         <h4>{users[i].city}</h4>
//     </div>
//   )
// }

import React, { useState } from "react";

// const users=[
//     { username: "John", email: "qqqqqq", city: "wwwwwwwww" },
//     { username: "rrrrr", email: "zzzzz", city: "oooooo" },
//     { username: "ddddddd", email: "ffffff", city: "hhhhh" },
//   ]

export default function User() {
    const [users, setUsers] = useState([
        { username: "John", email: "qqqqqq", city: "wwwwwwwww" },
        { username: "rrrrr", email: "zzzzz", city: "oooooo" },
        { username: "ddddddd", email: "ffffff", city: "hhhhh" },
      ])
  const [user, setUser] = useState(users[0]);


 const handleNext= ()=>{

     let i = users.indexOf(user)

     if (i === users.length - 1) {
        setUser(users[0]);
        } else {
        setUser(users[i + 1]);
        } 
     
 }

  return (
    <div>
    <div onClick={handleNext}>Next</div>
        <div>
          <h2> {user.username} </h2>
          <h3> {user.email} </h3>
          <h4> {user.city} </h4>
          <hr/>
        </div>
     
    </div>
  );
}
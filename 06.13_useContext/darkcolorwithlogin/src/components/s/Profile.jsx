import React, { useContext } from 'react'
import Context from '../../store/context'

export default function Profile() {
    const {user:u} = useContext(Context)
  return (
    <div>
        <h1>{u.name}</h1>
        <h2>{u.email}</h2>

        <hr />

        <h4>{u.address.street}</h4>
        <h4>{u.address.city}</h4>
 
        <hr />
        <ul>interests:
            {u.interests && u.interests.map((x,i)=>(
                <li key={i}>{x}</li>
            )) }
        </ul>

       

    </div>
  )
}

import React from 'react'

export default function UserData({user}) {
  return (
    <><h4>User data</h4>
    <p >User Name: <span className='text-danger'>{user.name}</span></p>
    <p >User Email: <span className='text-danger'>{user.email}</span></p>
    <p >User Address: <span className='text-danger'>{user.address}</span></p></>
  )
}

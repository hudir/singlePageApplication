import React, { Component } from 'react'

export default class UserData extends Component {
  render() {
    return (
      <>
         <h4>User data</h4>
         <p >User Name: <span className='text-danger'>{this.props.user.name}</span></p>
         <p >User Email: <span className='text-danger'>{this.props.user.email}</span></p>
         <p >User Address: <span className='text-danger'>{this.props.user.address}</span></p>
      </>
    )
  }
}

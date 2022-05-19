import React, { Component } from 'react'
import Form from './Form'
import UserData from './UserData'

export default class UserClass extends Component {
  constructor(){
    super();
    this.state = {
      name:'',
      email: '',
      address: ''
  }

  }

  moreData ='Berlin Deutschland';

  changeHandler=(e, str)=>{
        str= !str ? '' : str 
        // console.log(e.target.name);
        // console.log(e.target.value);
        this.setState({...this.state,
            [e.target.name]: e.target.value+' '+str
        })
    }


  render() {
      return(
        <section className="border text-center">
        <h2> user with class component</h2>
        <Form changeHandler={this.changeHandler} moreData={this.moreData}/>
        <UserData user={this.state}/>
      </section>
      )
    }
  }
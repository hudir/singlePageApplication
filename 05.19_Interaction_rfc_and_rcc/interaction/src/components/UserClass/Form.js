import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
        <form >
        <div>
            Name: <input type='text' name='name' required onChange={this.props.changeHandler}></input>
        </div>

        <div>
            Email: <input type='email' name='email' required onChange={this.props.changeHandler}></input>
        </div>

        <div>
            Address: <input type='text' name='address' required onChange={e=>this.props.changeHandler(e, this.props.moreData)}></input>
        </div>

        
    </form>
    )
  }
}

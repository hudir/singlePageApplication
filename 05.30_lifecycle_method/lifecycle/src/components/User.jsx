import React, { Component } from 'react'

export default class User extends Component {
    constructor(props){
        super(props);

        this.state= {
            username: props.username || 'John Doe',
            anotherOne : 'DJ khaled'

        }

        this.anotherFunc=this.anotherFunc.bind(this)
    };

    // myFunc(){
    //     console.log('Hi my Func');
    // }

    anotherFunc(){
        this.setState(prev=>({...prev, hi: 'sd'}));
    }

    componentDidMount(){
        console.log('from ComponentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response) => response.json())
        .then((data) => this.setState({users: data}));
    }

    componentDidUpdate(){
        console.log("from ComponentDidUpdate")
    }

    shouldComponentUpdate(nextProps, nextState){
        // return true to re-render || false not to
        console.log("from shouldComponentUpdate");
        console.log(nextProps,nextState)
        return true
    }

    componentWillUnmount(){
        console.log("from componentWillUnmount");
    }

    static getDerivedStateFromProps(props,state){
        console.log("from getDerivedStateFromProps");
        if(props.myProp==='cat'){
            return {x:123}
        } else return null
    }
  
    render() {
        console.log('from render', this.state)
        return (
            <div>User
                <button onClick={this.anotherFunc}>say hi</button>
                {this.state.hi && (<p>{this.state.anotherOne}</p>)}
                {this.state.users && this.state.users.map((el,i)=>( <p key={i}>{JSON.stringify({username:el.username/* ,name:el.name,email:el.email */})}</p>  ))}
            </div>
    )
  }
}

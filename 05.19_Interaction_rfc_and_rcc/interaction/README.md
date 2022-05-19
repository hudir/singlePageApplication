# Events in React(JSX)

```
<button onClick={doSomething}></button>
```

- Written in camel-case
- Usee React's curly brace syntax, rather than a string
- Passes a pointer to the function you want to run, rather than calling the function



### how to pass another parameter(not event) to the event handler function, if we give that function a name and declare it somewhere outside the JSX? 

```
const [user, setUser] = React.useState({
        name:'',
        email: '',
        address: ''
    })

const moreData ='Berlin Deutschland';

function changeHandler(e, str){
        str= !str ? '' : str 
        // console.log(e.target.name);
        // console.log(e.target.value);
        setUser({...user,
            [e.target.name]: e.target.value+' '+str
        })
}

return <div>
 Address: <input type='text' name='address' required onChange={e=>changeHandler(e, moreData)}></input>
 </div>
```

### Use React Class Component

```
import React from 'react'

class ComponentName extends React.Component {
    constructor(){
        super();
        this.state = init value    // ===> this.state in constructor instead of const [name, setValueOfName] = useState(init value)
    }
    

    moreData ='Berlin Deutschland';

    changeHandler=(e, str)=>{        // ===> use Arrow Function
        str= !str ? '' : str 
        // console.log(e.target.name);
        // console.log(e.target.value);
        this.setState({...this.state,    // ===> use setState() method
            [e.target.name]: e.target.value+' '+str
        })
    }

    render(){
         <childComponentName changeHandler={this.changeHandler} moreData={this.moreData}/>
           
    }

    
}


class childComponentName extends React.Component {
    render(){
         <div>
            Address: <input type='text' name='address' required onChange={e=>this.props.changeHandler(e, this.props.moreData)}></input>
        </div>
    }
}
```
import React from 'react'

export default function Signup() {

    // State 

    const [user, setUser] = React.useState({subscription: 'no subscription'});


    // The Event handle functions
    const inputChangeHandle=e=>{
        
        if(e.target.type==='checkbox'){
            setUser( prev=> ({...prev, food: {...prev.food, [e.target.name]: e.target.checked }}))

        } else if(e.target.type==='radio'){
            setUser( prev=> ({...prev, subscription: e.target.value}))

        } else {
            setUser( prev=> ({...prev, [e.target.name]: e.target.value}))
        }
        
    }

    const formSubmitHandle=e=>{
        e.preventDefault();
        // console.log(user);

        // POST Object to server
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify(user),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json); 
            json.subscription ==='no subscription' ? alert('Think about it one more time!') : alert('Hi '+ json.username+', thank your for your subscription, your ID is '+ json.id)
        })
        .catch(err=> alert('something bad happened \n' + err))

    }



    // JSX
  return (
    <div>
        <form onSubmit={formSubmitHandle}>
            <div>user name: </div>
            <input type={'text'} name="username" onChange={inputChangeHandle}/>

            <div>Email: </div>
            <input type={'email'} name="email" onChange={inputChangeHandle}/>

            <div>pass word: </div>
            <input type={'password'} name="password" onChange={inputChangeHandle}/>

            <br/><br/><hr/>
            <div>choose favorite food: </div> 
            <input type={'checkbox'} name='pizza' id='pizza' onChange={inputChangeHandle}/><label htmlFor='pizza'>Pizza</label><br/>

            
            <input type={'checkbox'} name='hamburger' id='ham' onChange={inputChangeHandle}/><label htmlFor='ham'>Hamburger</label><br/>

 
            <input type={'checkbox'} name='salad' id='sal' onChange={inputChangeHandle}/><label htmlFor='sal'>Salad</label><br/>

     
            <input type={'checkbox'} name='falafel' id='fal' onChange={inputChangeHandle}/><label htmlFor='fal'>Falafel</label><br/>

            <br/><hr/>
            <div>subscription: </div>
            <input type="radio" name="subscription" id='r1' value={'1 month'} onChange={inputChangeHandle}/> <label htmlFor="r1">1 month</label><br/>

            <input type="radio" name="subscription" id='r2' value={'6 month'} onChange={inputChangeHandle}/> <label htmlFor="r2">6 month</label><br/>

            <input type="radio" name="subscription" id='r3' value={'1 year'} onChange={inputChangeHandle}/> <label htmlFor="r3">1 year</label><br/>

            <input type="radio" name="subscription" id='r4' value={'no subscription'} onChange={inputChangeHandle} defaultChecked/> <label htmlFor="r4">no subscription</label><br/>

            <br />
            <button>sign up</button>
        </form>
    </div>
  )
}

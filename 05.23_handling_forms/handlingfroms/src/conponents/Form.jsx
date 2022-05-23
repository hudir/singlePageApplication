import React from 'react'

export default function Form() {
    const [userInput, setUserInput] = React.useState({})


    const handleSubmit= e => {
        e.preventDefault();
        console.log(userInput)
    }

    const handleChange=e=>{
                            // everything in [ ] will be string ?
        // setUserInput({...userInput ,[e.target.name]: e.target.value}); 
        setUserInput(prev=> ({...prev, [e.target.name]: e.target.value}))
        console.log(userInput)
    }




  return (
    <form onSubmit={handleSubmit}>
       <div>UserName</div>
       <input type="text" name='username' onChange={handleChange}/>
       
       <div>UserEmail</div>
       <input type="text" name='email' onChange={handleChange}/>
       
       <div>Password</div>
       <input type="password" name='password' onChange={handleChange}/>
       
       <br></br>
        <button>Click Me</button>
       

       
    </form>
  )
}

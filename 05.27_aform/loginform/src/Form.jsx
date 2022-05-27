import React,{useState} from 'react'

export default function Form() {
  const [user,setUser]= useState({
    data:{
      username:'',
      email:'',
      password:''
    },

    submit:false,

    err:{ 
    username:false,
    email:false,
    password:false
    },

    errMsg:{ 
      username:'UserName invalid, minimal 5 chars',
      email:'Email invalid, must have a @',
      password:'Pass Word invalid, minimal 8 chars'
      },

    btn:false
  });

  const handler = e => {
    const tarN = e.target.name
         ,value = e.target.value;

    setUser(p=>({...p, btn:false}));


    switch(tarN){
      case 'username':
        value.length < 5 ? 
        setUser(p=>({...p, err:{...p.err, [tarN]:true}}))
        :  setUser(p=>({...p, err:{...p.err, [tarN]:false}}))

        setUser(p=>({...p, data:{...p.data,[tarN]:value}}));
        break;

      case 'email':
        !value.includes('@') ? 
        setUser(p=>({...p, err:{...p.err, [tarN]:true}}))
        :  setUser(p=>({...p, err:{...p.err, [tarN]:false}}))

        setUser(p=>({...p, data:{...p.data,[tarN]:value}}));
        break;

      case 'password':
        value.length < 8 ? 
        setUser(p=>({...p, err:{...p.err, [tarN]:true}}))
        :  setUser(p=>({...p, err:{...p.err, [tarN]:false}}))

        setUser(p=>({...p, data:{...p.data,[tarN]:value}}));
        break;

      case 'form':
        e.preventDefault()
        if(Object.values(user.err).every(el=>!el) && Object.values(user.data).every(el=>el)) {
          setUser(p=>({...p,submit:true}))
        } else {
          setUser(p=>({...p, btn:true}));
        }
        break;

      default: break;
    }
  }

  return (
    <div className='form'>
       {user.submit && ( <h1>you are submitted!</h1> )} 
       {!user.submit && ( <h5>{JSON.stringify(user.data)}</h5> )} 

      <form onSubmit={handler} name="form">
        <div>username:   
          <input type="text" name='username' value={user.data.username} onChange={handler}/>
          {user.err.username && (<p>{user.errMsg.username}</p>)}
        </div>

        <div>email:
          <input type="email" name='email' value={user.data.email} onChange={handler}/>
          {user.err.email && (<p>{user.errMsg.email}</p>)}
        </div>

        <div>password:
          <input type="password" name='password' value={user.data.password} onChange={handler}/>
          {user.err.password && (<p>{user.errMsg.password}</p>)}
        </div>

        {user.btn && ( <p>something wrong with you input, pls check again</p> ) }
        <button name='btn'>submit</button>
      </form>
    </div>
  )
}

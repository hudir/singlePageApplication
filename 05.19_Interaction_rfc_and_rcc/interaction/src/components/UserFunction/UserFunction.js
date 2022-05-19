import React from 'react'
import Form from './Form';
import UserData from './UserData';

export default function UserFunction(){
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

    // console.log(user);

    return (
      <section className="border text-center">
        <h2> user with function component</h2>
        <Form changeHandler={changeHandler}  moreData={moreData}/>
        <UserData user={user}/>
      </section>
    )
  }
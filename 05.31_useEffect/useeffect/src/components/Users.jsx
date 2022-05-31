import React,{useState,useEffect} from 'react'

export default function Users({users, myfunc}) {
    const[input, setInput] =useState('');


    useEffect(()=>console.log(input))

  return (
    <div>

        <input type="text" value={input} onChange={e=>setInput(e.target.value)} />
        <button onClick={e=> myfunc(input)}>Show me the data</button>

        { Array.isArray(users) ? users.map((el,i)=>( <div key={i}> 
          {/* <h3>{el.name}</h3>
          <h5>{el.email}</h5>
          <a href={'https://www'+el.website} target='_blank' style={{color:'orange'}}>{el.username}</a> */}

          {JSON.stringify(el)}
         
        </div>  ))
        : <div>{JSON.stringify(users)}</div>
         }
    </div>
  )
}

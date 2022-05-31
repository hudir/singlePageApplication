import React,{useEffect, useState} from 'react';
import './App.css';
import Users from './components/Users';

function App() {
  const [count,setCount] = useState(0);
  const [users,SetUsers ] = useState([]);
  const[input, setInput] =useState('');

  // const sum = (a, b) => {
  //   console.log(a+b);
  // };
  const myfunc=(str)=>{
    setInput(str)
  }

  useEffect(()=>{
    let mounted = true

   let url="https://jsonplaceholder.typicode.com/"+input
    async function fetchData(){
      const json1=await fetch(url)
      const data =await json1.json(json1)
      if (mounted) SetUsers(data);
    }

    fetchData()

    return ()=>{mounted=false} // if fetch take longer time and the component is already unmount. in this situation will not setUsers
    
  }, [input])  //,[] watch empty array is like componentDidMount, only run once 
      // without anything it will run everytime rending


  return (
    <div className="App">
      <header className="App-header">

        <p>You Click {count} times</p>
        <button onClick={e=> setCount(count+1)}>Click me</button>

       <Users users={users} myfunc={myfunc}/>
       
      </header>
    </div>
  );
}

export default App;

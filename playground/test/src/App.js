import React from 'react'
const { useEffect, useState } = React


function App() {
  return (
    <div className="App">
      <CounterWithNameAndSideEffect />
    </div>
  );
}

export default App;



const CounterWithNameAndSideEffect = () => {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   console.log(`You clicked ${count} times`)
  // })

  let [name, setName] = useState('Tom')

  // useEffect(() => {
  //   console.log(`Hi ${name} you clicked ${count} times`)
  // }, [name, count])


  useEffect(() => {
    console.log(`Component mounted`)
  }, [])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <input type='text' onChange={e=>setName(e.target.value)}></input>
      <p>{`Hi ${name} you clicked ${count} times`}</p>
    </div>
  )
}
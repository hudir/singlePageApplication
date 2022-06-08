import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ListGroup from './components/ListGroup';

function App() {

  const [todos, setTodos] = useState([])

  const onAddTodo = todo => setTodos([...todos, todo])

  const onDeleteTodo = index => {
    const newList = todos.filter((x,i)=>index!==i);
    setTodos(newList)
    
  }

  return (
    <div className="container mt-4 w-20">
      <Form onAddTodo={onAddTodo}/>
      <ListGroup todos={todos} onDeleteTodo={onDeleteTodo}/>
    </div>
  );
}

export default App;

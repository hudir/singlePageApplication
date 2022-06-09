import React,{useState} from "react";
import { toast } from "react-toastify";

//create the store
const Context = React.createContext();

// create the provider

export function ContextProvider(props){

  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] =useState(null)

  const onAddTodo = todo => setTodos([...todos, todo])

  const onDeleteTodo = index => {
    const deleItem = todos[index]
    toast(deleItem+' deleted')
    const newList = todos.filter((x,i)=>index!==i);
    setTodos(newList)
  }

  const onEditTodos = (index,str) => setEditTodo([index,str])

  const saveChange = (e)=>{
    const newList=todos.map((x,i)=> i===editTodo[0] ? e.target.todo.value : x)
    setTodos(newList)
    setEditTodo(null)
    toast("change saved")
  }

    return(
        <Context.Provider value={{
            test:"the store works",
            todos, setTodos,
            editTodo, setEditTodo,onAddTodo,onDeleteTodo,onEditTodos,saveChange

        }}>{props.children}
        </Context.Provider>
    )
}






export default Context;
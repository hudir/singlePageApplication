import React, { useContext } from 'react'
import {CgAddR } from 'react-icons/cg';
import Context from '../store/context';

export default function Form() {
  const {onAddTodo} = useContext(Context);

    const submitHandler = e => {
        e.preventDefault();
        const todo = e.target.todo.value;
        onAddTodo(todo);
        e.target.reset();
    }
  return (
    <form onSubmit={submitHandler}>
        <div className="input-group mb-3">
            <input type="text" name="todo" className='form-control' placeholder='add todo' />
            <button className='btn btn-outline-secondary' type='submit' id="button-addon2"><CgAddR /></button>
        </div>
    </form>
  )
}

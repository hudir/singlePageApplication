import React, { useContext } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import {FiEdit3 } from 'react-icons/fi';
import Context from '../store/context';

export default function ListGroup() {

  const {todos,onDeleteTodo,onEditTodos} = useContext(Context);

  const delethandler = i => onDeleteTodo(i)

 

  return (
    <ol className='list-group list-group-numbered'>
        {todos.map((x,i)=>
        <li key={i} className='list-group-item d-flex justify-content-between'>
            <span className='flex-fill'>{x}</span>

          <span className='d-flex'>
            <span className='editItem mx-3' onClick={e=>onEditTodos(i,x)}><FiEdit3 /></span>

            <span className='removeItem' onClick={e=>delethandler(i)}><FaRegTrashAlt /></span>
          </span>
        </li>
        )}
    </ol>
  )
}

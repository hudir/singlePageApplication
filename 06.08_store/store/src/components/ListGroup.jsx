import React from 'react'

export default function ListGroup({todos,onDeleteTodo}) {
  return (
    <ol className='list-group list-group-numbered'>
        {todos.map((x,i)=>
        <li key={i} className='list-group-item d-flex justify-content-between'>
            <span className='flex-fill'>{x}</span>
            <span className='removeItem' onClick={e=>onDeleteTodo(i)}>X</span>
        </li>
        )}
    </ol>
  )
}

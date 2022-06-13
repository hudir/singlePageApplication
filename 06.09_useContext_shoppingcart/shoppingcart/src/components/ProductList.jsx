import React, { useContext } from 'react'
import { Context } from '../store/context'
import ProdListItem from './ProdListItem'

export default function ProductList() {
    const{prodList}=useContext(Context)
  return (
    <ul className='d-flex flex-wrap'>
        {prodList && prodList.map((x,i)=> ( <ProdListItem key={i} x={x} />   ))}
    </ul>
  )
}

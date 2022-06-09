import React, { useContext } from 'react'
import { Context } from '../store/context'

export default function ShopCartItem({x}) {
    const {removeItem}=useContext(Context)
  return (
    <li>
        <h3>{x.title} </h3>
        <h4>Price: {x.price}</h4>
        <h4>Qty: {x.inventory}</h4>

    
        {x.inventory>0 && 
        <span>
            <button className='btn-warning btn' name="removeOne" onClick={(e)=>removeItem(x,e)}>Remove One</button>
            <button className='btn btn-danger' name="removeAll" onClick={(e)=>removeItem(x,e)}>Remove All</button>
        </span>
        
        }
    </li>
  )
}

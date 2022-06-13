import React, { useContext } from 'react'
import { Context } from '../store/context'

export default function ProdListItem({x}) {
    const {addToCart} = useContext(Context)
  return (
    <li>
        <h3>{x.title}</h3>
        <h4>Price: {x.price}</h4>
        <h4>Qty: {x.inventory}</h4>

        {x.inventory>0 && 
        <span>
            <button className='btn btn-primary' name="addOne" onClick={(e)=>addToCart(x,e)}>Add to Cart</button>
            <button className='btn btn-warning' name="addAll" onClick={(e)=>addToCart(x,e)}>Add All to Cart</button>
        </span>
        
        }
    </li>
  )
}

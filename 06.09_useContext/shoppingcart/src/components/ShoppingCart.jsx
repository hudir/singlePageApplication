import React, { useContext } from 'react'
import { Context } from '../store/context'
import ShopCartItem from './ShopCartItem'

export default function ShoppingCart() {
    const {cartList,totalCost} = useContext(Context);

  
  return (
    <div >
   
        <h2 className='text-secondary'>Your Shopping Cart</h2>

        <ul>
             {cartList && cartList.map((x,i)=> <ShopCartItem key={i} x={x} /> )}
        </ul>
       
        <h1 className='text-secondary'>Total: $ {totalCost.toFixed(2)}</h1>
    </div>
  )
}

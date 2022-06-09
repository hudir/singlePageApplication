import React, { useContext } from 'react'
import { Context } from '../store/context'
import ShopCartItem from './ShopCartItem'
import { toast } from "react-toastify";

export default function ShoppingCart() {
    const {cartList,totalCost,setCartList} = useContext(Context);

  
  return (
    <div className='text-end mx-3' >
   
        <h2 className='text-secondary'>Your Shopping Cart</h2>

        <ul className='list-group'>
             {cartList && cartList.map((x,i)=> <ShopCartItem key={i} x={x} /> )}
        </ul>
       
        <h1 className='text-secondary'>Total: $ {totalCost.toFixed(2)}</h1>

        <button className='btn btn-info px-5' onClick={()=>{
          setCartList([]);
          toast.success('Thank you for your purchase!', {
            position: "top-center",
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }}>Checkout</button>


    </div>
  )
}

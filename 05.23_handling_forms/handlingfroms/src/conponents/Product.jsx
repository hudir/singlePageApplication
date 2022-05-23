import React from 'react'

export default function Product({product,handleIsSold,index,handleDelete}) {
  

  return (
    <div className='productCard'>
      <h2>{product.name}</h2>
      <img src={product.photo} alt = '' />
      <p>{product.price}</p>
      <button onClick={e=>{
        // console.log(e.target.parentElement.parentElement)
        handleIsSold(index)
      }}>sold</button>
      <h3>Status: {product.isSold ? 'Solid' : "Not Sold"}</h3>
      <button onClick={e=>{handleDelete(index)}}>Delete</button>
    </div>
  )
}

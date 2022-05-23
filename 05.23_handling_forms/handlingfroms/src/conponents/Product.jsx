import React from 'react'

export default function Product({product}) {

  return (
    <div className='productCard'>
      <h2>{product.name}</h2>
      <img src={product.photo} alt = '' />
      <p>{product.price}</p>
    </div>
  )
}

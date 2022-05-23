import React from 'react'
import Product from './Product'

export default function RenderProductList({productList,handleIsSold,handleDelete}) {
  return (
    <div>
        {productList[0] && productList.map((el,i)=>(<Product index={i} key={i} product={el} handleIsSold={handleIsSold} handleDelete={handleDelete} />))}
    </div>
  )
}

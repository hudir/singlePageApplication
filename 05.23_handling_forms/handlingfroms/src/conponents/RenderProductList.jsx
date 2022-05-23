import React from 'react'
import Product from './Product'

export default function RenderProductList({productList}) {
  return (
    <div>
        {productList[0] && productList.map((el,i)=>(<Product key={i} product={el} />))}
    </div>
  )
}

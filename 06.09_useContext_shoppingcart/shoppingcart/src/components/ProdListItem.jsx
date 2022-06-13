import React, { useContext } from 'react'
import { Context } from '../store/context'

export default function ProdListItem({x}) {
    const {addToCart} = useContext(Context)
  return (
    <li >
      <div className="card m-1" style={{width: "18rem"}}>
  {x.image && <img src={x.image} className="card-img-top" alt="..." />}
  <div className="card-body">
    <h5 className="card-title">{x.title}</h5>
   {x.description && <p className="card-text">{x.description}</p>}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Price: {x.price}</li>
    <li className="list-group-item">Qty: {x.inventory}</li>
    {/* <li className="list-group-item">A third item</li> */}
  </ul>
  {x.inventory>0 && 
  <div className="card-body">
      <button className='btn btn-primary card-link' name="addOne" onClick={(e)=>addToCart(x,e)}>Buy</button>
      <button className='btn btn-warning card-link' name="addAll" onClick={(e)=>addToCart(x,e)}>Buy All</button>
  </div>}
</div>   
        
    </li>
  )
}

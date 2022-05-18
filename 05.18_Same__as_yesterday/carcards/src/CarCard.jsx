import React from 'react'

export default function CarCard({data}) {
  return (
    <>
    <h1> React Props and State</h1>
   {data.map((x,i)=>(
      <div className='car' key={i}>
      <h3>Brand: {x.brand}</h3>
      <h3>Car Model: {x.model}</h3>
      <img src={x.img} alt={x.brand+' '+x.model}/>
      </div>  ))}
  </>
  )
}

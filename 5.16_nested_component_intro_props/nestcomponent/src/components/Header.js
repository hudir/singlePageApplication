import React from 'react'
import Nav from './Nav'

let x=true;
let dark = true

export default function Header() {
  return (
    <div style={dark ? 
        {  
            backgroundColor: "rgb(20,20,20)"
            , position: 'relative', color: 'rgb(255,255,255)'
        }  
        : {
            backgroundColor: "rgb(111,111,111)"
            , position: 'relative'
            }}>Header
        <img src='https://source.unsplash.com/random/200x200' alt='' />
        
        <span>{x && '1243' && '5678'/*  && false */}</span>


       {x ? (<ul style={{ backgroundColor: 'red' 
       ,position: 'absolute' 
       ,top: '90%'
       ,left: '0'}}>
           <li>item1</li>
           <li>item2</li>
           <li>item3</li>
       </ul>) : ''}




        <Nav />

        
    </div>
  )
}


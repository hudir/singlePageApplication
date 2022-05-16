import React from 'react'
import Nav from './Nav'

let x=true;
let bgcToggle = true
let user = 'Make the props gos'

export default function Header() {
  return (
    <div style={bgcToggle ? 
        {  
            backgroundColor: "rgb(20,20,20)"
            , position: 'relative', color: 'rgb(255,255,255)'
            , display: 'flex'
            , justifyContent: "space-around"
        }  
        : {
            backgroundColor: "rgb(111,111,111)"
            , position: 'relative'
            , display: 'flex'
            , justifyContent: "space-around"
            }}>Header
        <img src='https://source.unsplash.com/random/500x500' alt='' />
        
        <span>{x && '1243' && '5678'/*  && false */}</span>


       




        <Nav myToggle={bgcToggle} username={user}></Nav>


        {x ? (<ul style={{ backgroundColor: 'red' 
      //  ,position: 'absolute' 
       ,top: '0'
       ,left: '0'
       ,padding: '10px'
       ,margin: '10px'}}>
           <i style={{margin: "10px"
           }}>item1</i>
           <i style={{margin: "10px"
           }}>item2</i>
           <i>item3</i>
       </ul>) : ''}
        
    </div>
  )
}


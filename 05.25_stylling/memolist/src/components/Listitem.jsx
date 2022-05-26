import React from 'react'
import { Button, Input } from 'reactstrap';

export default function Listitem({obj, index, handleDelete,handleEdit,handleSubTask, archive ,handleArc ,handleRadio}) {
  return (
    <ul>
        <Input type="checkbox"  onChange={e=> handleEdit(index, e)} />

        {obj.edit 
        ? ( <input type="text" placeholder={obj.text} style={obj.line ? {textDecoration: 'line-through'} : {} }/> ) 
        : <span style={obj.line ? {textDecoration: 'line-through', color: '#bbb'} : {} }>{obj.text}</span> }

        <Button onClick={e => handleEdit(index, e)}>...</Button>
        <Button onClick={e => handleDelete(index,e)}>X</Button>

        <Button onClick={e => handleSubTask(index,e)}>sub</Button>

        {obj.subCheck
        ? (<input type="text" /> )
        : null }  

        {obj.sub.length !== 0 ?
         obj.sub.map((el,i)=> ( <li key={i}>{el}</li> ))
         : null}

         <Button onClick={e=> handleArc(index, e)}>archive</Button>

         
         {obj.arcCheck ? 

           archive.map((el,i)=>(
               <div key={i}>
                  <Input type="radio" name="arc" id={'radio'+i} value={el} onChange={e=> handleRadio(index, e)}/>
                  <label htmlFor={'radio'+i}>{el}</label>
               </div>       
           ))
           : null
         }

       
         



    </ul>
  )
}

import React from 'react'

export default function Listitem({obj, index, handleDelete,handleEdit,handleSubTask, archive ,handleArc ,handleRadio}) {
  return (
    <ul>
        <input type="checkbox"  onChange={e=> handleEdit(index, e)} />

        {obj.edit 
        ? ( <input type="text" placeholder={obj.text} style={obj.line ? {textDecoration: 'line-through'} : {} }/> ) 
        : <span style={obj.line ? {textDecoration: 'line-through', color: '#bbb'} : {} }>{obj.text}</span> }

        <button onClick={e => handleEdit(index, e)}>...</button>
        <button onClick={e => handleDelete(index,e)}>X</button>

        <button onClick={e => handleSubTask(index,e)}>sub</button>

        {obj.subCheck
        ? (<input type="text" /> )
        : null }  

        {obj.sub.length !== 0 ?
         obj.sub.map((el,i)=> ( <li key={i}>{el}</li> ))
         : null}

         <button onClick={e=> handleArc(index, e)}>archive</button>

         
         {obj.arcCheck ? 

           archive.map((el,i)=>(
               <div key={i}>
                  <input type="radio" name="arc" id={'radio'+i} value={el} onChange={e=> handleRadio(index, e)}/>
                  <label htmlFor={'radio'+i}>{el}</label>
               </div>       
           ))
           : null
         }

       
         



    </ul>
  )
}

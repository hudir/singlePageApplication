import React, {useState} from 'react'

export default function Header() {
    const [var1, funcChangesVar1] = useState(true)
    const [colorSwtich, funcChangesColor] = useState(true)
  return (
    <div className={colorSwtich ? 'bg-dark text-light' : 'bg-light'}>Header
    <button className='btn btn-primary m-3' onClick={e=>funcChangesVar1(!var1)}>{var1 ? 'H 🙉 OO' :'N 🙈 OO'}</button>

    <button className='btn btn-primary m-3' onClick={e=>funcChangesColor(!colorSwtich)}>Change Color</button>
        {var1 && <h1>i will hidd!!!!!!!!!</h1>}
    </div>
  )
}

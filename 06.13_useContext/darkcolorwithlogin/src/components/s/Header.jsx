import React, { useContext } from 'react'
import Context from '../../store/context'

export default function Header() {
    const {theme, checkboxChangeHandler} =useContext(Context)
  return (
    <div>
        <label htmlFor="color">{theme+" Mode "}</label>
        <input type="checkbox" name="switch" id="color" onChange={checkboxChangeHandler} defaultChecked/>
    </div>
  )
}

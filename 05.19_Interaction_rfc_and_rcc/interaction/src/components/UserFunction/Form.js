import React from 'react'

export default function Form({changeHandler, moreData}) {
  return (
    <form >
            <div>
                Name: <input type='text' name='name' required onChange={changeHandler}></input>
            </div>

            <div>
                Email: <input type='email' name='email' required onChange={changeHandler}></input>
            </div>

            <div>
                Address: <input type='text' name='address' required onChange={e=>changeHandler(e, moreData)}></input>
            </div>

            
        </form>
  )
}

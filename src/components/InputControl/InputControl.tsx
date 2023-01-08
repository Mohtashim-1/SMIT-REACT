import React from 'react'
import './InputControl.css'
function InputControl(props:any){
  return (
  <div className='container'>
    {props.label && <label></label>}
    <input type="text" {...props} />
  </div>
  )
}
export default InputControl;
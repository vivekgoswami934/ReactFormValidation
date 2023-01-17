import React from 'react'
import "./style.css"

const Input = ({label, onChange , errorMessage ,...others}) => {

   

  return (
    <div className='inputField'>
        <label>{label}</label>
        <input {...others} onChange={onChange}    />
        <span>{errorMessage}</span>
    </div>
  )
}

export default Input

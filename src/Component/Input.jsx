import React from 'react'
import "./style.css"

const Input = () => {
  return (
    <div className='inputField'>
        <label>Label</label>
        <input type="text" />
        <span>Error Message</span>
    </div>
  )
}

export default Input

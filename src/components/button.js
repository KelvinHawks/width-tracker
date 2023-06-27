import React from 'react'
import './button.css'
export default function Button ({
    onClick,
    children
}){

  return (
    <div>
        <button className='btn-toggle' onClick={onClick}>{children}</button>
    </div>
  )
}


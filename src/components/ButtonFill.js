import React from 'react'

const ButtonFill = ({ children }) => {
  return (
    <button className='bg-secondary text-black rounded-xl shadow-sm
    shadow-secondary font-medium md:text-sm text-xs tracking-wide md:px-9 px-7 py-3'>
        {children}
    </button>
  )
}

export default ButtonFill
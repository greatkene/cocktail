import React from 'react'
import hero from '../assets/attract3.jpg'

const BreadCrumb = ({children}) => {
  return (
    <section className='hero'>
        <img src={hero} alt="hero" className='w-full'/>
        <div className="heading-container absolute flex justify-center items-center w-full">
            <h1 className="text-5xl text-white"> {children} </h1>
        </div>
    </section>
  )
}

export default BreadCrumb
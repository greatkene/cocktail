import React from 'react'
import attract1 from '../assets/attract.jpg'
import ButtonFill from './ButtonFill'

const Attract = () => {
  return (
    <section className="flex md:flex-col-reverse lg:flex-row h-full flex-col-reverse gap-6 py-12 md:px-28 px-4 items-center">
      <div className="flex-1 mx-10">
        <img src={attract1} alt="attract" 
        className=' h-full rounded-3xl object-cover'/>
      </div>
      <div className="flex-1 mx-10">
        <h1 className="md:text-3xl lg:w-4/6 font-medium	 text-3xl mb-7">
          Leave Your Worries Behind and Chill
        </h1>
        <p className='text-gray-500 my-3'>
          We provide amazing experiences and create safe adventures for you at the same time. 
          Active and passive leisure alternatives are available.
        </p>
        <ButtonFill>Recipes</ButtonFill>
      </div>
    </section>
  )
}

export default Attract
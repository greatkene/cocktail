import React from 'react'
import ButtonFill from '../components/ButtonFill'
import ErrorImg from '../assets/ezgif1.png'

const Error = () => {
  return (
    <section className='py-4 relative bg-blue-800 md:px-28 py-18 md:h-screen h-screen'>
      <div className="flex md:flex-row flex-col-reverse gap-3 pt-20">
        <div className="flex-1 md:mt-20 mx-20 lg:mt-20">
          <h1 className='text-8xl md:text-8xl my-6 text-orange-600 font-extrabold'>404</h1>
          <p className='text-white md:w-4/6'>
            Oga You don press rubbish, oya press the button below to go back home, 70years old man!! 
          </p> <br/>
          <ButtonFill>Back To Home</ButtonFill>
        </div>
        <div className="flex-1 w-[300px] mx-20">
          <img src={ErrorImg} alt="error" />
        </div>
      </div>
    </section>
  )
}

export default Error
import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image, name, id, info, glass}) => {
  return (
    <article className='max-w-full mb-10 lg:max-h-sm lg:max-w-sm rounded overflow-hidden shadow-2xl'>
        <div className='w-full'>
            <img src={image} alt={name} />
        </div>
        <div className='px-6 py-4'>
            <div className='font-bold  text-3xl mb-2'>{name}</div>
            <h4 className='font-medium text-2xl mb-2'>{glass}</h4>
            <p className='text-gray-500 mb-4 text-base'>{info}</p>
            <Link to={`/cocktail/${id}`} className='btn'>
                DETAILS
            </Link>
        </div>
    </article>
  )
}

export default Cocktail
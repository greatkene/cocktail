import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
        <div className="sm:flex sm:items-center sm:justify-between">
           <img src={logo} className='w-10' alt="logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap mx-auto ml-4 dark:text-white">Cocktaily</span> 
            <ul className='flex flex-wrap items-center mt-6 mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
                <li>
                    <Link to='/' className='mr-4 hover:underline md:mr-6'>About</Link>
                </li>
                <li>
                    <Link to='/' className='mr-4 hover:underline md:mr-6'>Privacy Policy</Link>
                </li>
                <li>
                    <Link to='/cocktails' className='mr-4 hover:underline md:mr-6'>Cocktail</Link>
                </li>
                <li>
                    <Link to='/' className='mr-4 hover:underline md:mr-6'>Contact</Link>
                </li>
            </ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            @ 2022 GreatKene All Right Reserved
        </span>
    </footer>
  )
}

export default Footer
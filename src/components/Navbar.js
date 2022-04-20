/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import logo from '../assets/logo.png'
import {Link as Link1} from 'react-scroll'
import { Link as Link2 } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {FiMoreVertical} from 'react-icons/fi'

const Navbar = () => {
    const [openMobile, setOpenMobile] = useState(false)

  return (
    <nav className='flex justify-between py-4 md:px-24 px-4'>
        <img src={logo} alt="logo" className='h-16 cursor-pointer' />
        <ul className='font-medium text-lg md:flex hidden items-center gap-8 cursor-pointer'>
            <li>
                <Link1 to="/" spy={true} smooth={true}>Home</Link1>
            </li>
            <li>
                <Link2 to="/about">About</Link2>
            </li>
            <li>
                <Link1 to="attract" spy={true} smooth={true}>Attractions</Link1>
            </li>
            <li>
                <Link1 to="services" spy={true} smooth={true}>Services</Link1>
            </li>
            <li>
                <Link2 to="/cocktail">Cocktail</Link2>
            </li>
            <div 
            className='bg-secondary hover:bg-green-500 text-black-800 py-1 px-8
            rounded inline-flex items-center'>
                <Link2 to="/ticket">Ticket</Link2>
                <FiMoreVertical/>
            </div>
        </ul>

        {/*Mobile Nav*/}
        <ul className={`fixed top-0 z-50 bg-white w-2/4 h-screen shadow-2xl md:hidden
        flex flex-col gap-10 p-7 pt-20 duration-500 ${openMobile ? 'right-0' : 'right-[-100%]'}`}>
            <li>
                <Link1 to="/" spy={true} smooth={true}>Home</Link1>
            </li>
            <li>
                <Link2 to="/about">About</Link2>
            </li>
            <li>
                <Link1 to="attract" spy={true} smooth={true}>Attractions</Link1>
            </li>
            <li>
                <Link1 to="services" spy={true} smooth={true}>Services</Link1>
            </li>
            <li>
                <Link2 to="/cocktail">Cocktail</Link2>
            </li>
            <div 
            className='bg-secondary hover:bg-green-500 text-black-800 py-2 px-8
            rounded inline-flex items-center'>
                <Link2 to="/ticket">Ticket</Link2>
                <FiMoreVertical/>
            </div>
        </ul>

        <div className="md:hidden my-4 text-2xl z-50 cursor-pointer" onClick={()=>setOpenMobile(!openMobile)}>
            {
                openMobile ? <FaTimes/> : <FaBars/>
            }
        </div>
        
    </nav>
  )
}

export default Navbar
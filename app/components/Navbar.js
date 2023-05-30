"use client"
import React, { useState } from 'react';
import {AiOutlineMenu, AiFillHeart, } from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import Image from 'next/image';
import logo from '/public/weblogo.png'
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const navHandler = () => {
    setNav(!nav)
  }
  return (
    <div className='flex md:px-44 py-3 mx:px-0 overflow-hidden shadow-xl px-3  mx-auto md:justify-between justify-around items-center'>
    <div className='cursor-pointer flex items-center'>
      <Image src={logo} className='object-cover object-center h-auto' alt=''/>
      </div>
      <div>
      <ul className={`md:flex md:flex-row md:gap-x-8 md:mr-20 flex flex-col md:justify-center transition-all md:h-auto duration-500 ease-in md:items-center absolute md:border-none z-[9999]  bg-gray-300 md:bg-transparent  bg-none border-2 md:sticky md:w-auto w-full left-0 top-20 items-center  ${nav ? 'left-0' : 'top-[-100%] ' }`}>
      <li className='md:pb-0 pb-4 md:mt-0 mt-4 md:border-none hover:text-red-600 font-medium border-b-2 border-black cursor-pointer' href={'/'}>Home</li>
      <li className='md:pb-0 pb-4 md:mt-0 mt-4 md:border-none hover:text-red-600 font-medium border-b-2 border-black cursor-pointer' href={'/'}>About</li>
      <li className='md:pb-0 pb-4 md:mt-0 mt-4 md:border-none hover:text-red-600 font-medium border-b-2 border-black cursor-pointer' href={'/'}>Contact</li>
      <li className='md:pb-0 pb-4 md:mt-0 mt-4 md:border-none hover:text-red-600 font-medium border-b-2 border-black cursor-pointer' href={'/'}>Category</li>
      <li className='md:pb-0 pb-4 md:mt-0 mt-4 cursor-pointer hover:text-red-600 font-medium' href={'/'}>Shop</li>
      </ul>
      </div>
      <div className='flex gap-x-2'>
      <div onClick={navHandler} className='md:hidden bg-gray-200 px-3 py-3 rounded-md ml-20 cursor-pointer hover:bg-red-600  hover:text-white hover:transition-all hover:duration-500'>
      <AiOutlineMenu className='md:hidden' size={20}/>
      </div>
      <div className='flex gap-4 hover:bg-red-600 hover:text-white hover:transition-all hover:duration-500 cursor-pointer px-3 py-3 rounded-md bg-gray-200'>
      <AiFillHeart size={20}/>
      </div>
      <div className='px-3 py-3 hover:bg-red-600 hover:text-white hover:transition-all hover:duration-500 cursor-pointer rounded-md bg-gray-200'>
      <FaShoppingCart className='' size={20}/>
      </div>
      </div>
    </div>
  )
}

export default Navbar

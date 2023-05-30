import React from 'react';
import Image from 'next/image';
import pro1 from '/public/product-1.jpg'
import pro2 from '/public/product-2.jpg'
import pro3 from '/public/product-3.jpg'
import pro4 from '/public/product-4.jpg'
import pro5 from '/public/product-5.jpg'
import pro6 from '/public/product-6.jpg'
import pro7 from '/public/product-7.jpg'
import pro8 from '/public/product-8.jpg'

const Shop = () => {
  return (
    <div className='mt-10 md:mx-32 '>
      <h1 className='flex items-center justify-center font-bold text-4xl'>Our <span className='text-red-500 ml-4'>Shop</span></h1>
      <div className='md:grid mt-10 md:grid-cols-4 gap-x-8 md:gap-x-0 flex flex-col items-center justify-center'>
        <Image src={pro1} className='border-red-300 mb-6 
        md:mb-0 border-2' alt=''/>
        <Image className='md:ml-10 border-red-300 mb-6 
        md:mb-0 border-2'  src={pro2} alt=''/>
        <Image src={pro3} className='md:ml-10 mb-6 
        md:mb-0 border-red-300 border-2' alt=''/>
        <Image src={pro4} className='md:ml-20 mb-6 
        md:mb-0 border-red-300 border-2' alt=''/>

      </div>
      <div className='md:grid md:mt-10 md:grid-cols-4 flex flex-col items-center justify-center'>
      <Image src={pro5} className='border-red-300 border-2 mb-6 
      md:mb-0' alt=''/>
      <Image className='md:ml-10 border-red-300 border-2 mb-6 
      md:mb-0' src={pro6} alt=''/>
      <Image src={pro7} className='md:ml-10 md:gap-x-0 mb-6 
      md:mb-0 border-red-300 border-2' alt=''/>
      <Image src={pro8} className='md:ml-20 md:gap-x-0 border-red-300 border-2' alt=''/>

    </div>
    </div>
  )
}

export default Shop

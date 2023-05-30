import React from 'react';
import Image from 'next/image';
import product1 from '/public/product-1.jpg'
import product2 from '/public/product-2.jpg'
import product3 from '/public/product-3.jpg'
import product4 from '/public/product-4.jpg'
import product5 from '/public/product-5.jpg'
import product6 from '/public/product-6.jpg'

const Products = () => {
  return (
    <div className='grid mt-10'>
    <h1 className='flex items-center mb-8 mt-4 justify-center text-4xl font-semibold'>Product <span className='text-red-500 ml-2'>Promotion</span></h1>
      <div className='md:grid font-medium md:grid-cols-6 md:mx-32 flex flex-col items-center gap-10'>
      <Image className='hover:-translate-y-6 hover:duration-500 ' src={product1} alt=''/>
      <Image className='hover:-translate-y-6 hover:duration-500 ' src={product2} alt=''/>
      <Image className='hover:-translate-y-6 hover:duration-500 ' src={product3} alt=''/>
      <Image className='hover:-translate-y-6 hover:duration-500 ' src={product4} alt=''/>
      <Image className='hover:-translate-y-6 hover:duration-500 ' src={product5} alt=''/>
      <Image className='hover:-translate-y-6 hover:duration-500 ' src={product6} alt=''/>
      </div>
      <div className='md:grid md:grid-cols-6 md:mx-32  hidden  gap-10'>
      <p className='ml-20 mt-2'>Product 1</p>
      <p className='ml-20 mt-3'>Product 2</p>
      <p className='ml-20 mt-3'>Product 3</p>
      <p className='ml-20 mt-3'>Product 4</p>
      <p className='ml-20 mt-3'>Product 5</p>
      <p className='ml-20 mt-3'>Product 6</p>

      </div>
    </div>
  )
}

export default Products

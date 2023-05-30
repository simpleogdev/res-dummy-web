import React from 'react';
import Image from 'next/image';
import c1 from '/public/collection-1.jpg'
import c2 from '/public/collection-2.jpg'
import c3 from '/public/collection-3.jpg'


const Card = () => {
  return (
 <div className='mt-12 md:grid md:mx-32 md:gap-y-0 md:gap-x-0 md:grid-cols-3 flex flex-col items-center justify-center gap-y-8'>
 <div className=''>
 <Image className='md:rounded-xl' src={c1} alt=''/>
 </div>
  <div className='md:ml-12'>
 <Image className='md:rounded-xl' src={c2} alt=''/>
 </div>
 <div className='md:ml-32'>
 <Image className='md:rounded-xl' src={c3} alt=''/>
 </div>
 </div>
  )
}

export default Card

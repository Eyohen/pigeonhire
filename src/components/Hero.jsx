import React from 'react'
import herolady from '../assets/herolady.png'

const Hero = () => {
  return (
    <div className='bg-[#201327] py-9 px-4 md:px-[120px]'> 

    <div className='flex justify-between'>

    <div className='mt-16'>
    <p className='text-white text-5xl font-bold'>Reach your Target</p>
    <p className='text-white text-5xl font-bold mt-2'>Audience, Right Where</p>
    <p className='text-white text-5xl font-bold mt-2'>they Engage.</p>

    <p className='text-white text-md mt-6'>Thousands of businesses trust our platform to</p>
    <p className='text-white text-md mt-2'>connect with users and secure partnerships in</p>
    <p className='text-white text-md mt-2'>communities across 20+ countries</p>

    <div className='md:flex gap-x-0 md:gap-x-9 md:space-y-0 space-y-4 mt-9'>
        <div>
        <button className='bg-[#F08E1F] text-white rounded-full px-6 py-2'>Browse Communities</button>
        </div>

        <div>
        <button className='border border-[#F08E1F] text-white rounded-full px-6 py-2'>For Community users</button>
        </div>

        </div>

    </div>


    <div className='mt-16'>
        <img src={herolady} className='object-cover w-[450px] h-[500px]'/>
    </div>



    </div>

 
    </div>
  )
}

export default Hero
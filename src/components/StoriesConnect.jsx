import React from 'react'
import frame1 from '../assets/Frame1.png'
import frame2 from '../assets/Frame2.png'
import frame3 from '../assets/Frame3.png'

const StoriesConnect = () => {
  return (
    <div className='py-4 bg-white px-4 md:px-[480px]'>
        <p className='text-center text-4xl font-bold'>Stories that connect</p>

        <p className='text-[#F08E1F] text-xl'>View all</p>


        <div className='flex justify-between '>


        <div className='bg-red-200 max-w-[350px]'>
        <img src={frame1} className='object-cover h-[250px] w-[350px] rounded-t-2xl' />
        <p className='text-2xl font-bold mt-2'>Maximizing Engagement:</p>
        <p className='text-2xl font-bold'>Tips for Community Owners</p>
        <p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt <span className='text-[#F08E1F] text-xl'>Read More...</span></p>
        </div>

        <div className='bg-red-200 max-w-[350px]'>
        <img src={frame2} className='object-cover h-[250px] w-[350px] rounded-t-2xl'/>
        <p className='text-2xl font-bold mt-2'>Creating Community: Owner</p>
        <p className='text-2xl font-bold'>and User Collaboration</p>
        <p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt <span className='text-[#F08E1F] text-xl'>Read More...</span></p>
        </div>

        <div className='bg-red-200 max-w-[350px]'>
        <img src={frame3} className='object-cover h-[250px] w-[350px] rounded-t-2xl'/>
        <p className='text-2xl font-bold mt-2'>Building Bridges: Owners</p>
        <p className='text-2xl font-bold'>and Users Unite</p>
        <p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt <span className='text-[#F08E1F] text-xl'>Read More...</span></p>
        </div>

        </div>
        
        
        </div>
  )
}

export default StoriesConnect
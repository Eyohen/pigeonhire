import React from 'react'
import frame1 from '../assets/Frame1.png'
import frame2 from '../assets/Frame2.png'
import frame3 from '../assets/Frame3.png'
import Navbar from '../components/Navbar'

const Blog = () => {
  return (
    <div className=' bg-white'>
        <Navbar/>
        <p className='text-center text-4xl font-bold mt-9'>Stories that connect</p>





        <div className='grid grid-cols-3 gap-9 px-4 md:px-[120px] mt-12'>


        <div className='max-w-[350px]'>
        <img src={frame1} className='object-cover h-[250px] w-[350px] rounded-t-2xl' />
        <p className='text-2xl font-bold mt-2'>Maximizing Engagement:</p>
        <p className='text-2xl font-bold'>Tips for Community Owners</p>
        <p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt <span className='text-[#F08E1F] text-xl'>Read More...</span></p>
        </div>

        <div className='max-w-[350px]'>
        <img src={frame2} className='object-cover h-[250px] w-[350px] rounded-t-2xl'/>
        <p className='text-2xl font-bold mt-2'>Creating Community: Owner</p>
        <p className='text-2xl font-bold'>and User Collaboration</p>
        <p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt <span className='text-[#F08E1F] text-xl'>Read More...</span></p>
        </div>

        <div className='max-w-[350px]'>
        <img src={frame3} className='object-cover h-[250px] w-[350px] rounded-t-2xl'/>
        <p className='text-2xl font-bold mt-2'>Building Bridges: Owners</p>
        <p className='text-2xl font-bold'>and Users Unite</p>
        <p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt <span className='text-[#F08E1F] text-xl'>Read More...</span></p>
        </div>

        <div className='max-w-[350px]'>
        <img src={frame1} className='object-cover h-[250px] w-[350px] rounded-t-2xl' />
        <p className='text-2xl font-bold mt-2'>Maximizing Engagement:</p>
        <p className='text-2xl font-bold'>Tips for Community Owners</p>
        <p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt <span className='text-[#F08E1F] text-xl'>Read More...</span></p>
        </div>

        <div className='max-w-[350px]'>
        <img src={frame2} className='object-cover h-[250px] w-[350px] rounded-t-2xl'/>
        <p className='text-2xl font-bold mt-2'>Creating Community: Owner</p>
        <p className='text-2xl font-bold'>and User Collaboration</p>
        <p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt <span className='text-[#F08E1F] text-xl'>Read More...</span></p>
        </div>

        <div className='max-w-[350px]'>
        <img src={frame3} className='object-cover h-[250px] w-[350px] rounded-t-2xl'/>
        <p className='text-2xl font-bold mt-2'>Building Bridges: Owners</p>
        <p className='text-2xl font-bold'>and Users Unite</p>
        <p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt <span className='text-[#F08E1F] text-xl'>Read More...</span></p>
        </div>

        <div className='max-w-[350px]'>
        <img src={frame1} className='object-cover h-[250px] w-[350px] rounded-t-2xl' />
        <p className='text-2xl font-bold mt-2'>Maximizing Engagement:</p>
        <p className='text-2xl font-bold'>Tips for Community Owners</p>
        <p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt <span className='text-[#F08E1F] text-xl'>Read More...</span></p>
        </div>

        <div className='max-w-[350px]'>
        <img src={frame2} className='object-cover h-[250px] w-[350px] rounded-t-2xl'/>
        <p className='text-2xl font-bold mt-2'>Creating Community: Owner</p>
        <p className='text-2xl font-bold'>and User Collaboration</p>
        <p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt <span className='text-[#F08E1F] text-xl'>Read More...</span></p>
        </div>

        <div className='max-w-[350px]'>
        <img src={frame3} className='object-cover h-[250px] w-[350px] rounded-t-2xl'/>
        <p className='text-2xl font-bold mt-2'>Building Bridges: Owners</p>
        <p className='text-2xl font-bold'>and Users Unite</p>
        <p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt <span className='text-[#F08E1F] text-xl'>Read More...</span></p>
        </div>

        </div>
        
        
        </div>
  )
}

export default Blog
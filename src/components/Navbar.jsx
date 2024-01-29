import React from 'react'

import logo from '../assets/logo.png'
import { RiArrowDownSLine } from "react-icons/ri";
import { RiMenuFill } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className=''>
        
        <div className='flex items-center justify-between'>
            
 
        <img src={logo} alt='' className='w-[150px] h-12 object-cover mx-6'/>
 

<div className='flex gap-6 mr-64'>
        <p className='text-[#201327] text-xl font-light hidden md:block'>pricing</p>
        <p className='text-[#201327] text-xl font-light hidden md:block'>Explore Communities</p>
        <p className='text-[#201327] text-xl font-light hidden md:block'>Community Owners</p>
        </div>
        
        <RiMenuFill size={30} className='md:hidden' />
<div className='flex gap-1 items-center px-6 '>
        <p className='text-[#201327] text-xl font-bold hidden md:block'>login </p>
        <RiArrowDownSLine size={25} className='pt-1 hidden md:block'/>
        </div>



        </div>

        {/* <p className='text-[#F08E1F] text-xl font-bold'>login </p>
        <p className='text-[#F3D8A7] text-xl font-bold'>login </p>
        <p className='text-[#F3C164] text-xl font-bold'>login </p>
      */}

    </div>
  )
}

export default Navbar
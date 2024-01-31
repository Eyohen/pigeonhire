import React, {useState} from 'react'

import logo from '../assets/logo.png'
import { RiArrowDownSLine } from "react-icons/ri";
import { RiMenuFill } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
// import { Link, useParams, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState()
    const [data, setData] = useState([])
    // const navigate = useNavigate()

    const handleOpen = () => {
        setOpen((prev) => !prev)
    }

  return (
    <div className='w-full'>
        
        <div className='flex items-center justify-between md:px-64'>
            
 
        <img src={logo} alt='' className='w-[150px] h-12 object-cover mx-6'/>
 

{/* <div className='flex gap-6 mr-64'>
        <p className='text-[#201327] text-xl font-light hidden md:block'>Pricing</p>
        <p className='text-[#201327] text-xl font-light hidden md:block'>Explore Communities</p>
        <p className='text-[#201327] text-xl font-light hidden md:block'>Community Owners</p>
        </div> */}
        
        <RiMenuFill size={30} className='md:hidden' />


<div className='flex gap-9 items-center px-6 '>
<p className='text-[#201327] text-xl font-light hidden md:block'>Pricing</p>
        <p className='text-[#201327] text-xl font-light hidden md:block'>Explore Communities</p>
        <p className='text-[#201327] text-xl font-light hidden md:block'>Community Owners</p>
        <p className='text-white px-4 rounded-md text-xl font-semibold hidden md:block bg-[#F08E1F]'>login </p>
        {/* <RiArrowDownSLine size={25} className='pt-1 hidden md:block'/> */}
        <SlMagnifier size={25} onClick={handleOpen} className='hidden md:block'/>
        </div>

      

        </div>
        {open ?  (<div class="block absolute w-full bg-white right-[1px] p-4 shadow-md z-30 text-center">
            <div>
                <div className='flex px-6'>
                <input placeholder='search communities...' className='w-full px-4' />
                <button className='bg-[#F08E1F] text-white px-2 rounded-md font-semibold '>Search</button>
                </div>
                {/* <p className='font-bold w-full'>{data.firstName}</p>
                <Link to={'/dashboard'}><p className='hover:bg-gray-300 rounded-md px-12 py-1 text-lg'>Dashboard</p></Link>
        <Link to={'/employee'}><p className='hover:bg-gray-300 rounded-md px-12 py-1 text-lg'>Employees</p></Link>
        <Link to={'/receipt'}><p className='hover:bg-gray-300 rounded-md px-12 py-1 text-lg'>Receipts</p></Link>

        <Link to={'/task'}><p className='hover:bg-gray-300 rounded-md px-12 py-1 text-lg'>Tasks</p></Link> */}
               
            </div> 
  </div>) : (null)}

        {/* <p className='text-[#F08E1F] text-xl font-bold'>login </p>
        <p className='text-[#F3D8A7] text-xl font-bold'>login </p>
        <p className='text-[#F3C164] text-xl font-bold'>login </p>
      */}

    </div>
  )
}

export default Navbar
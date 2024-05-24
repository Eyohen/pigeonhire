import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

const ContactUs = () => {
  return (
    <>
       <Navbar />
    <div className="bg-gray-100 font-nunito p-9">
   

<div className='border border-gray-600 rounded-2xl px-32 py-12 flex flex-col'>

<div>
     <p className='text-gray-600'>Name</p>
      <input className='w-full px-2 py-2 bg-white border border-gray-200 rounded-lg' />

      <p className='text-gray-600 mt-4'>Email Address</p>
      <input className='w-full px-2 py-2 bg-white border border-gray-200 rounded-lg' />


      <p className='text-gray-600 mt-4'>Select Reason</p>
      <input className='w-full px-2 py-2 bg-white border border-gray-200 rounded-lg' />

      <p className='text-gray-600 mt-4'>Subject</p>
      <input className='w-full px-2 py-2 bg-white border border-gray-200 rounded-lg' />

      <p className='text-gray-600 mt-4'>Message</p>
      <textarea className='w-full px-2 py-2 bg-white border border-gray-200 rounded-lg' />

    <button className='text-white bg-[#F08E1F] py-2 w-full rounded-full mt-4' >Submit</button>

</div>

</div>



      </div>
    <Footer/></>
  )
}

export default ContactUs
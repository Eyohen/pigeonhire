import React from 'react'

const EngageWithComOwners = () => {
  return (
    <div className='py-9 bg-white px-4 md:px-[120px]'>
    <p className='text-center text-4xl font-bold'>Engage with Communtiy Owners</p>

    <p className='font-medium mt-8 text-xl'>Forge connections with community owners to access tailored services such as detailed market research, targeted advertising, and unique content offerings. This collaboration opens doors to specialized insights and targeted audience engagement, enriching your market presence.</p>

    <div className='flex md:flex justify-center gap-x-0 md:gap-x-9 md:space-y-0 space-y-4 mt-9'>
        <div>
        <button className='bg-[#F08E1F] text-white rounded-full px-6 py-2'>Discover Community Owners</button>
        </div>

        <div>
        <button className='border border-[#F08E1F] text-gray-600 rounded-full px-6 py-2'>Register your Community</button>
        </div>

        </div>


    </div>
  )
}

export default EngageWithComOwners
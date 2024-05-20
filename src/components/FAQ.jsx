import React, { useState } from 'react'
import { TbCircleMinus, TbCirclePlus } from "react-icons/tb";

const FAQ = () => {
    const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)


    const handleToggle = () => {
        setToggle(!toggle)
    }

    // const handleToggle2 = () => {
    //     setToggle2(!toggle2)
    // }

    // const handleToggle3 = () => {
    //     setToggle3(!toggle3)
    // }


    return (
        <div className='bg-white px-4 md:mx-auto py-9'>
            <p className='text-[40px] font-bold text-center tracking-wide'>Frequently asked questions</p>


            <div className='w-[768px]'>
                <button onClick={handleToggle} >
                    {toggle ? (<div className='flex w-full space-x-[94px] px-2 border-b-2 py-6'>
                        <p className='text-xl font-medium'>How can Pigeonhire help my business grow?</p><TbCirclePlus color='#F08E1F' size={24} />

                    </div>) : (<div className='border-b-2 py-6'><div className='flex justify-between space-x-[94px] px-2'>
                        <p className='text-xl font-medium'>How can Pigeonhire help my business grow?</p><TbCircleMinus color='#F08E1F' size={24} />
                    </div>

                        <p className='text-gray-300 text-left'>Pigeonhire connects your business with targeted communities and professionals across the globe, enabling you to expand yur reach, engage with key audiences, and foster strategic partnerships. Whether you're looking to increase brand awareness, drive sales, or build relationships, our platform provides the tools and access necessary to achieve your goals.</p>
                    </div>
                    )}

                </button>
            </div>





            {/* <TbCircleMinus /> */}
        </div>
    )
}

export default FAQ
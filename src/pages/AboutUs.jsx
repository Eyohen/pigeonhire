import React from 'react'
import frame3 from '../assets/Frame3.png'
import Navbar from '../components/Navbar'

const AboutUs = () => {
  return (
    <div className='bg-gray-100'>
        <Navbar />

<div className='mt-9 bg-white py-9'>

    <p className='text-center text-4xl font-bold '>Our Story</p>

    <div className='flex px-4 md:px-[120px] gap-x-24 mt-9'>

        <img src={frame3} className='object-contain rounded-b-2xl' />
        <div>
            <p className='text-xl mt-2'>In today's digital landscape, numerous brands, marketers, and early-stage companies are full of innovative ideas and groundbreaking solutions. However, one of their most significant challenges is effectively reaching their target market. Understanding this gap, Pigeonhire was created—a platform dedicated to bridging the gap between innovative businesses and their potential audiences.</p>
            <p className='text-xl mt-9'>At Pigeonhire, we recognize the power of connection and the importance of engaging with audiences where they are most active and receptive. Our platform catalyzes authentic engagement and is designed to align your business or personal brand with vibrant community hubs and interaction spaces.</p>
            <p className='text-xl mt-9'>Whether you're a startup seeking visibility, a marketer aiming for impact, or a brand looking to resonate with your audience, Pigeonhire is your partner in navigating the journey toward meaningful engagement and sustained growth. By focusing on where engagement truly happens, we empower businesses to broadcast their messages and initiate conversations, build relationships, and foster communities around their offerings. Pigeonhire is a testament to the belief that the right connections can transform potential into success, turning bright ideas into celebrated solutions.</p>
            
        </div>
    </div>
    </div>


    <div className='mt-9 bg-white py-9'>
    <p className='text-center text-4xl font-bold '>Our Vison</p>
    <div className='flex px-4 md:px-[120px] gap-x-24 mt-9'>
        <div>
            <p className='text-xl mt-2'>At Pigeonhire is to create a world where every business and individual can connect with their target audience in the most meaningful and impactful way, fostering genuine relationships and collaborative success.</p>
           
        </div>
        <img src={frame3} className='object-contain rounded-b-2xl' />
    </div>
    </div>


    <div className='mt-9 bg-white py-9'>

<p className='text-center text-4xl font-bold '>Our Mission</p>

<div className='flex px-4 md:px-[120px] gap-x-24 mt-9'>

    <img src={frame3} className='object-contain rounded-b-2xl' />
    <div>
        <p className='text-xl mt-2'>We aim to revolutionize how businesses and communities interact, fostering an ecosystem where genuine relationships lead to shared success. We are committed to offering a platform where every interaction is an opportunity for growth, learning, and meaningful exchange.</p>
       
    </div>
</div>
</div>
    

    </div>
  )
}

export default AboutUs
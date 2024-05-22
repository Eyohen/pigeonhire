
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowPigWorks from '../components/HowPigWorks'
import FAQ from '../components/FAQ'
import StoriesConnect from '../components/StoriesConnect'
import HowBusinessThrive from '../components/HowBusinessThrive'
import EngageWithComOwners from '../components/EngageWithComOwners'
import FeatCom from '../components/featCom'
import WhyPigeonhireStands from '../components/WhyPigeonhireStands'
import OurDiverseUser from '../components/OurDiverseUser'

const Home = () => {
  return (
    <div className='bg-gray-100'>

        <Navbar/>
        <Hero/>

       <div className='mt-6'><HowPigWorks /></div> 
       <div className='mt-6'><OurDiverseUser/></div>
       <div className='mt-6'><WhyPigeonhireStands /></div>
       <div className='mt-6'><FeatCom /></div>
       <div className='mt-6'><EngageWithComOwners /></div>
       <div className='mt-6'><HowBusinessThrive /></div>
       <div className='mt-6'><StoriesConnect/></div> 
       <div className='mt-6'><FAQ/></div>
    </div>
  )
}

export default Home
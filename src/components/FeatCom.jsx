import React from 'react'
import frame1 from '../assets/Greenpic.png'
import frame2 from '../assets/Talentflex.png'
import frame3 from '../assets/Zenyoga.png'

const FeatCom = () => {
  return (
    <div className='py-9 bg-white px-4 md:px-[120px] font-nunito'>
    <p className='text-center text-6xl font-bold'>Featured Communities</p>
    <p className='text-center mt-1 text-3xl'>Handpicked groups known for active engagement and quality discussions</p>

    <div className='flex justify-between mt-12'>


<div className='max-w-[300px]'>
<img src={frame1} className='object-cover h-[200px] w-[300px] rounded-t-2xl' />
<p className='text-2xl font-bold mt-2'>Green Earth Advocates</p>

<p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
</div>

<div className='max-w-[300px]'>
<img src={frame2} className='object-cover h-[200px] w-[300px] rounded-t-2xl'/>
<p className='text-2xl font-bold mt-2'>TalentFlex Solutions</p>
<p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
</div>

<div className='max-w-[300px]'>
<img src={frame3} className='object-cover h-[200px] w-[300px] rounded-t-2xl'/>
<p className='text-2xl font-bold mt-2'>Zen Yoga Club</p>
<p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
</div>

</div>



    </div>
  )
}

export default FeatCom
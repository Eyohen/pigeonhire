import React from 'react'
import Navbar from '../components/Navbar'
import { RiArrowRightSLine } from "react-icons/ri";
import slack from '../assets/slackimage.jpg'
import telegram from '../assets/telegram.jpeg'
import whatsApp from '../assets/whatsapp.png'
import spaces from '../assets/spacesremove.png'
import linkedin from '../assets/linkedin.png'
import discord from '../assets/discord.png'
import reddit from '../assets/reddit.png'
import { RiAddCircleFill, RiCoupon3Line } from "react-icons/ri";
import { SlBadge } from "react-icons/sl";
import pigeonhero from '../assets/Pigeonhire.com.png'
import image1 from '../assets/Image 1.jpg'
import image2 from '../assets/Image 2.jpg'
import image3 from '../assets/Image 3.jpg'
import image4 from '../assets/Image 4.jpg'
import image5 from '../assets/Image 5.jpg'
import image6 from '../assets/Image 6.jpg'
import image7 from '../assets/Image 7.jpg'
import image8 from '../assets/Image 8.jpg'


const data = [
    {
    url:`${image1}`,
    title:"Green Earth Advocates",
    activeSince: '2018',
    badge:"Verified",
    communityType:"Environmental Activism",
    memberCount:"1-50",
    isPaid:"Free"
    },
    {
        url:`${image2}`,
        title:"Tech Innovators",
        activeSince: '2016',
        badge:"Verified",
        communityType:"Technology and Innovation",
        memberCount:"2,501 - 5,000",
        isPaid:"Paid"
        },
        {
            url:`${image3}`,
            title:"Green Earth Advocates",
            activeSince: '2018',
            badge:"Verified",
            communityType:"Environmental Activism",
            memberCount:"1-50",
            isPaid:"Free"
            },
            {
                url:`${image4}`,
                title:"Green Earth Advocates",
                activeSince: '2018',
                badge:"Verified",
                communityType:"Environmental Activism",
                memberCount:"1-50",
                isPaid:"Free"
                },
                {
                    url:`${image5}`,
                    title:"Green Earth Advocates",
                    activeSince: '2018',
                    badge:"Verified",
                    communityType:"Environmental Activism",
                    memberCount:"1-50",
                    isPaid:"Free"
                    },
                    {
                        url:`${image6}`,
                        title:"Green Earth Advocates",
                        activeSince: '2018',
                        badge:"Verified",
                        communityType:"Environmental Activism",
                        memberCount:"1-50",
                        isPaid:"Free"
                        },
                        {
                            url:`${image7}`,
                            title:"Green Earth Advocates",
                            activeSince: '2018',
                            badge:"Verified",
                            communityType:"Environmental Activism",
                            memberCount:"1-50",
                            isPaid:"Free"
                            },
                            {
                                url:`${image8}`,
                                title:"Green Earth Advocates",
                                activeSince: '2018',
                                badge:"Verified",
                                communityType:"Environmental Activism",
                                memberCount:"1-50",
                                isPaid:"Free"
                                },
                               

]



const Home = () => {
  return (
    <div className=''>
    <Navbar/>
    <div className='bg-[#201327] '>

<div className='flex flex-col md:flex-row gap-y-6 items-center justify-center gap-24 '>
     <div className='mt-32 md:mb-24'>  
    <p className='text-white text-5xl font-bold'>Connect Directly with your</p> 
    <p className='text-white text-5xl font-bold mt-4'>Target Audience, Right </p>
    <p className='text-white text-5xl font-bold mt-4'>Where they Engage.</p>
    <p className='text-white text-xl mt-4'>Expand your outreach effortlessly with our extensive and diverse network.</p> 
    <p className='text-white text-xl mt-2'>Startups and established businesses use our platform to connect with various groups.</p>
   <div className='flex flex-col md:flex-row gap-y-4 items-center mt-6'>
    <button className='bg-[#F08E1F] text-[#201327] rounded-md px-4 py-3 '><div className='flex items-center gap-2'><p className='text-xl '>Browse Communities</p><p><RiArrowRightSLine size={25}/></p></div></button>
    <button className='border-2 border-[#F08E1F] text-[#F08E1F] rounded-md px-4 py-3 ml-4'><div className='flex items-center gap-2'><p className='text-xl '>For Communities Owners</p><p><RiArrowRightSLine size={25}/></p></div></button>
    </div>
     {/* <p className='text-[#F08E1F] text-xl font-bold'>login </p>
        <p className='text-[#F3D8A7] text-xl font-bold'>login </p>
        <p className='text-[#F3C164] text-xl font-bold'>login </p> */}

  </div> 
         <img src={pigeonhero} alt='' className='object-cover w-[500px] h-[350px]'/>


         </div>


    </div>



    {/* bragging side with groups */}


    <div className=''>
    <p className='text-[#F08E1F] text-3xl font-bold text-center mt-16'> Discover more than 5,000 valuable groups across 20 countries on these platforms</p>

<div className=''>
<div className='grid grid-cols-8 gap-[165px] text-3xl mt-16 justify-center items-center ml-[140px] '>
    <div className='flex gap-4'>
   <img src={slack} className='object-cover w-[75px] h-[75px]'/>
   <p className='text-3xl font-semibold mt-3 text-gray-500'>Slack</p>
   </div>
   <div className='flex gap-4'>
   <img src={telegram} className='object-cover w-[75px] h-[75px]' />
   <p className='text-3xl font-semibold mt-3 text-gray-500'>Telegram groups</p>
   </div>
   <div className='flex gap-4'>
   <img src={whatsApp} className='object-cover w-[75px] h-[75px]' />
   <p className='text-3xl font-semibold mt-3 text-gray-500'>Whatsapp groups</p>
   </div>

   {/* <div className='flex gap-4'>
   <img src={spaces} className='object-cover w-64 h-[75px]' />
   </div> */}

   <div className='flex gap-4'>
   <img src={discord} className='object-cover w-[75px] h-[75px]' />
   <p className='text-3xl font-semibold mt-3 text-gray-500'>Discord</p>
   </div>
   <div className='flex gap-4'>
   <img src={reddit} className='object-cover w-[75px] h-[75px]' />
   <p className='text-3xl font-semibold mt-3 text-gray-500'>Reddit</p>
   </div>
   </div>
  
    {/* <p> WhatsApp Community</p>
  


    <p>Microsoft Teams</p>

    <p>Discourse</p> */}

    </div>

    {/* how it works */}

<div className=' mt-24'>
    <p className='text-[#201327] text-center text-2xl font-light'>How It Works</p>
    <p className='text-[#F3C164] text-center text-4xl font-semibold'>Two Simple Ways to Expand Your Reach</p>

<div className='flex items-center flex-col gap-y-6 md:flex-row gap-6 justify-center mt-12'>
    <div className='shadow-xl p-12'>
        <p className='font-semibold text-xl'>Explore Communities</p>
        

        <div className='flex gap-6 mt-3'>
        <RiAddCircleFill size={25} color='#4FFFB0'/>
        <p className=''> Sign Up & Choose Your Plan - Quick sign-up to access a diverse </p>
        </div>
        <p className='ml-12'>range of online communities</p>

        <div className='flex gap-6 mt-6'>
        <RiAddCircleFill size={25} color='#4FFFB0'/>
        <p className=''>Browse & Join Communities - Use our intuitive platform to find</p>
        </div>
        <p className='ml-12'>and join communities that align with your interests or business needs</p>
       
        <div className='flex gap-6 mt-6'>
        <RiAddCircleFill size={25} color='#4FFFB0'/>
        <p className=''>Engage & Network - Start conversations, share insights</p>
        </div>
        <p className='ml-12'>and build relationships within these communities</p>

        <p className='ml-12 mt-5 underline text-purple-600 font-semibold'>Get Started Today</p>
    </div>

    <div className='shadow-xl p-12'>
        <p className='font-semibold text-xl'>Engage Community Owners</p>


        <div className='flex gap-6 mt-3'>
        <RiAddCircleFill size={25} color='#4FFFB0'/>
        <p> Discover Community Leaders - Explore profiles of community leaders who</p> 
        </div>
        <p className='ml-12'>are open to partnerships and marketing opportunities</p>

        <div className='flex gap-6 mt-6'>
        <RiAddCircleFill size={25} color='#4FFFB0'/>
        <p> Select, PAYC & Connect - Choose leaders whose communities match your </p>
        </div>
        < p className='ml-12'>target audience and connect with them directly</p>

        <div className='flex gap-6 mt-6'>
        <RiAddCircleFill size={25} color='#4FFFB0'/>
        <p> Collaborative & Achieve Goals - Whose with leaders to promote your services,</p>
        </div>
        <p className='ml-12'> conduct market research, or launch targeted marketing campaigns within their communities</p>

        <p className='ml-12 mt-5 underline text-purple-600 font-semibold'>Get Started Today</p>
    </div>
    </div>


{/* featured communities */}
<div className=' mt-24 mb-16'>
    <div className='flex justify-between items-center px-32 '>
<p className='font-bold text-2xl'>Featured Communities</p>
<p className='text-[#F3C164] text-lg cursor-pointer'>see all communities</p>
</div>

<div className='grid grid-cols md:grid-cols-4 mt-4 gap-4 px-32'>
    {data.map((item, index) => (
    
<div className='border border-white p-1'>
    {/* <img src='https://img.freepik.com/premium-photo/full-shot-girl-learning-math-school_23-2150470852.jpg?t=st=1706626764~exp=1706627364~hmac=e7442b0d6c6764a1ab4a09060fb80280c346e2e076a194a282ec3905330e99d2&w=826' alt='' className='w-[350px] h-[140px] object-cover rounded-md' /> */}
    <img src={item.url} alt='' className='w-[350px] h-[140px] object-cover rounded-md' />
    <p className='font-semibold text-xl mt-1'>Green Earth Advocates</p>
    <p className='text-lg text-gray-400'>Community type : Environmental Activism</p>
    <div className='flex gap-2 items-center text-gray-400'>
    <p className=''>Active Since : 2018</p>
    <p className=''>Member count : 1 - 50</p> 
    </div>

    <div className='flex gap-2 items-center text-gray-400 mt-2'>
    <SlBadge /> 
    <p>Verified</p>
    <RiCoupon3Line />
    <p>Free</p>
    </div> 
</div> 

    ))}

{/* 
<div className='border border-white p-1'>
    <img src='https://img.freepik.com/premium-photo/full-shot-girl-learning-math-school_23-2150470852.jpg?t=st=1706626764~exp=1706627364~hmac=e7442b0d6c6764a1ab4a09060fb80280c346e2e076a194a282ec3905330e99d2&w=826' alt='' className='w-[450px] h-[120px] object-cover rounded-md' />
    <p className='font-semibold text-xl mt-1'>Green Earth Advocates</p>
    <p className='text-lg text-gray-400'>Community type : Environmental Activism</p>
    <div className='flex gap-2 items-center text-gray-400'>
    <p className=''>Active Since : 2018</p>
    <p className=''>Member count : 1 - 50</p> 
    </div>

    <div className='flex gap-2 items-center text-gray-400 mt-2'>
    <SlBadge /> 
    <p>Verified</p>
    <RiCoupon3Line />
    <p>Free</p>
    </div> 
</div>  */}


</div>

</div>

</div>
    </div>
  
  </div>
  )
}

export default Home
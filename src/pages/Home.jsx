import React from 'react'
import Navbar from '../components/Navbar'
import { RiArrowRightSLine } from "react-icons/ri";
import slack from '../assets/slackimage.jpg'
import telegram from '../assets/telegram.jpeg'
import whatsApp from '../assets/whatsapp.png'
import spaces from '../assets/googlespaces.jpg'
import linkedin from '../assets/linkedin.png'
import discord from '../assets/discord.png'
import reddit from '../assets/reddit.png'
import { RiAddCircleFill } from "react-icons/ri";




const Home = () => {
  return (
    <div className=''>
    <Navbar/>
    <div className='bg-[#201327] p-32'>
    <p className='text-white text-5xl font-bold'>Connect Directly with your</p> 
    <p className='text-white text-5xl font-bold mt-4'>Target Audience, Right </p>
    <p className='text-white text-5xl font-bold mt-4'>Where they Engage.</p>
    <p className='text-white text-xl mt-4'>Expand your outreach effortlessly with our extensive and diverse network.</p> 
    <p className='text-white text-xl mt-2'>Startups and established businesses use our platform to connect with various groups.</p>
    <button className='bg-[#F08E1F] text-[#201327] rounded-md px-4 py-3 mt-6'><div className='flex items-center gap-2'><p className='text-xl '>Browse Communities</p><p><RiArrowRightSLine size={25}/></p></div></button>
    <button className='border-2 border-[#F08E1F] text-[#F08E1F] rounded-md px-4 py-3 ml-4'><div className='flex items-center gap-2'><p className='text-xl '>For Communities Owners</p><p><RiArrowRightSLine size={25}/></p></div></button>
     {/* <p className='text-[#F08E1F] text-xl font-bold'>login </p>
        <p className='text-[#F3D8A7] text-xl font-bold'>login </p>
        <p className='text-[#F3C164] text-xl font-bold'>login </p> */}
     
    </div>

    {/* bragging side with groups */}


    <div className='p-32'>
    <p className='text-[#F08E1F] text-3xl font-bold text-center mt-4'> Discover more than 5,000 valuable groups across 20 countries on these platforms</p>

<div className='flex gap-9 text-3xl mt-9 justify-center'>
   <img src={slack} className='object-cover w-[75px] h-[75px]'/>
   <p className='text-3xl font-semibold mt-3 '>Slack</p>
   <img src={telegram} className='object-cover w-[75px] h-[75px]' />
   <p className='text-3xl font-semibold mt-3 '>Telegram groups</p>
   <img src={whatsApp} className='object-cover w-[75px] h-[75px]' />
   <p className='text-3xl font-semibold mt-3 '>Whatsapp groups</p>
   <img src={spaces} className='object-cover w-64 h-[75px]' />
   <img src={discord} className='object-cover w-[75px] h-[75px]' />
   <p className='text-3xl font-semibold mt-3 '>Discord</p>
   <img src={reddit} className='object-cover w-[75px] h-[75px]' />
   <p className='text-3xl font-semibold mt-3 '>Reddit</p>
    {/* <p> WhatsApp Community</p>
  


    <p>Microsoft Teams</p>

    <p>Discourse</p> */}

    </div>

    {/* how it works */}

<div className='p-16 mt-9'>
    <p className='text-[#201327] text-center text-2xl font-light'>How It Works</p>
    <p className='text-[#F3C164] text-center text-4xl font-semibold'>Two Simple Ways to Expand Your Reach</p>

<div className='flex items-center gap-6 justify-center mt-12'>
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
    </div>


    </div>


</div>
    </div>
  
  </div>
  )
}

export default Home
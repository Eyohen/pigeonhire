// import React from 'react'
// import Navbar from '../components/Navbar'
// import { RiArrowRightSLine } from "react-icons/ri";
// import slack from '../assets/slackimage.jpg'
// import telegram from '../assets/telegram.jpeg'
// import whatsApp from '../assets/whatsapp.png'
// import spaces from '../assets/spacesremove.png'
// import linkedin from '../assets/linkedin.png'
// import discord from '../assets/discord.png'
// import reddit from '../assets/reddit.png'
// import { RiAddCircleFill, RiCoupon3Line } from "react-icons/ri";
// import { SlBadge } from "react-icons/sl";
// import pigeonhero from '../assets/Pigeonhire.com.png'
// import image1 from '../assets/Image 1.jpg'
// import image2 from '../assets/Image 2.jpg'
// import image3 from '../assets/Image 3.jpg'
// import image4 from '../assets/Image 4.jpg'
// import image5 from '../assets/Image 5.jpg'
// import image6 from '../assets/Image 6.jpg'
// import image7 from '../assets/Image 7.jpg'
// import image8 from '../assets/Image 8.jpg'


// const data = [
//     {
//     url:`${image1}`,
//     title:"Green Earth Advocates",
//     activeSince: '2018',
//     badge:"Verified",
//     communityType:"Environmental Activism",
//     memberCount:"1-50",
//     isPaid:"Free"
//     },
//     {
//         url:`${image2}`,
//         title:"Tech Innovators",
//         activeSince: '2016',
//         badge:"Verified",
//         communityType:"Technology and Innovation",
//         memberCount:"2,501 - 5,000",
//         isPaid:"Paid"
//         },
//         {
//             url:`${image3}`,
//             title:"Green Earth Advocates",
//             activeSince: '2018',
//             badge:"Verified",
//             communityType:"Environmental Activism",
//             memberCount:"1-50",
//             isPaid:"Free"
//             },
//             {
//                 url:`${image4}`,
//                 title:"Green Earth Advocates",
//                 activeSince: '2018',
//                 badge:"Verified",
//                 communityType:"Environmental Activism",
//                 memberCount:"1-50",
//                 isPaid:"Free"
//                 },
//                 {
//                     url:`${image5}`,
//                     title:"Green Earth Advocates",
//                     activeSince: '2018',
//                     badge:"Verified",
//                     communityType:"Environmental Activism",
//                     memberCount:"1-50",
//                     isPaid:"Free"
//                     },
//                     {
//                         url:`${image6}`,
//                         title:"Green Earth Advocates",
//                         activeSince: '2018',
//                         badge:"Verified",
//                         communityType:"Environmental Activism",
//                         memberCount:"1-50",
//                         isPaid:"Free"
//                         },
//                         {
//                             url:`${image7}`,
//                             title:"Green Earth Advocates",
//                             activeSince: '2018',
//                             badge:"Verified",
//                             communityType:"Environmental Activism",
//                             memberCount:"1-50",
//                             isPaid:"Free"
//                             },
//                             {
//                                 url:`${image8}`,
//                                 title:"Green Earth Advocates",
//                                 activeSince: '2018',
//                                 badge:"Verified",
//                                 communityType:"Environmental Activism",
//                                 memberCount:"1-50",
//                                 isPaid:"Free"
//                                 },
                               

// ]



// const Home = () => {
//   return (
//     <div className=''>
//     <Navbar/>
//     <div className='bg-[#201327]'>

// <div className='flex flex-col md:flex-row gap-y-6 items-center justify-center gap-64 '>
//      <div className='mt-64 md:mb-32'>  
//     <p className='text-white text-5xl font-bold '>Reach your Target</p> 
//     <p className='text-white text-5xl font-bold mt-4'>Audience, Right Where </p>
//     <p className='text-white text-5xl font-bold mt-4'>they Engage.</p>
//     <p className='text-white text-xl mt-4 '>Thousands of businesses trust our platform to</p> 
//     <p className='text-white text-xl mt-2'>connect with users and secure partnerships in</p>
//     <p className='text-white text-xl mt-2'>communities across 20+ countries.</p>
//    <div className='flex flex-col md:flex-row gap-y-4 items-center mt-6'>
//     <button className='bg-[#F08E1F] text-white rounded-full px-4 py-3 '>Browse Communities</button>
//     <button className='border-2 border-[#F08E1F] rounded-full px-4 py-3 ml-4 text-white'>For Communities Owners</button>
//     </div>
  

//   </div> 
//   <div className='mb-32 md:mb-0'>
//          <img src={pigeonhero} alt='' className='object-fit w-[500px] h-[450px] '/>
//          </div>


//          </div>


//     </div>



//     {/* bragging side with groups */}


//     <div className=''>
//     <p className='text-3xl font-bold text-center mt-16'> Discover more than 5,000 valuable groups across 20 countries on these platforms</p>

// {/* <div className=''>
// <div className='grid md:grid-cols-8 gap-[150px] text-3xl mt-16 justify-center items-center ml-[140px] '>
//     <div className='flex gap-4'>
//    <img src={slack} className='object-cover w-[75px] h-[75px]'/>
//    <p className='text-3xl font-semibold mt-3 text-gray-500'>Slack</p>
//    </div>
//    <div className='flex gap-4'>
//    <img src={telegram} className='object-cover w-[75px] h-[75px]' />
//    <p className='text-3xl font-semibold mt-3 text-gray-500'>Telegram groups</p>
//    </div>
//    <div className='flex gap-4'>
//    <img src={whatsApp} className='object-cover w-[75px] h-[75px]' />
//    <p className='text-3xl font-semibold mt-3 text-gray-500'>Whatsapp groups</p>
//    </div>

//    {/* <div className='flex gap-4'>
//    <img src={spaces} className='object-cover w-64 h-[75px]' />
//    </div> */}

//   {/*  <div className='flex gap-4'>
//    <img src={discord} className='object-cover w-[75px] h-[75px]' />
//    <p className='text-3xl font-semibold mt-3 text-gray-500'>Discord</p>
//    </div>
//    <div className='flex gap-4'>
//    <img src={reddit} className='object-cover w-[75px] h-[75px]' />
//    <p className='text-3xl font-semibold mt-3 text-gray-500'>Reddit</p>
//    </div> */}
//    {/* </div> */}
  
//     {/* <p> WhatsApp Community</p>
  


//     <p>Microsoft Teams</p>

//     <p>Discourse</p> */}

//     {/* </div> */}

//     {/* how it works */}

// <div className='mt-24'>
//     <p className='text-[#201327] text-center text-4xl font-bold'>How It Works</p>
//     <p className='text-gray-600 text-center text-2xl'>Two Simple Ways to Expand Your Reach</p>

// <div className='flex items-center flex-col gap-y-6 md:flex-row gap-x-32 justify-center mt-12'>
//     <div className='shadow-xl p-12  max-w-[480px]'>
//         <p className='font-semibold text-xl text-gray-600 '>Explore Communities</p>
        

//         <div className='flex gap-6 mt-3'>
        
//         <p className=''>Step 1: "Sign Up & Choose Your Plan" - Quick sign-up to access a diverse range of online communities.</p>
//         </div>
    

//         <div className='flex gap-6 mt-6'>
       
//         <p className=''>Step 2: "Browse & Join Communities" - Use our intuitive platform to find and join communities that align with your interests or business needs.</p>
//         </div>
        
       
//         <div className='flex gap-6 mt-6'>
     
//         <p className=''>Step 3: "Engage & Network" - Start conversations, share insights, and build relationships within these communities.</p>
//         </div>
//         <p className='ml-12'></p>

//         <button className='ml-12 mt-9  rounded-full text-white bg-[#F08E1F] px-4 py-1'>Get Started</button>
//     </div>

//     <div className='shadow-xl p-12 max-w-[480px]'>
//         <p className='font-semibold text-xl text-gray-600 '>Engage Community Owners</p>


//         <div className='flex gap-6 mt-3'>
       
//         <p>Step 1: "Discover Community Leaders" - Explore profiles of community leaders who are open to partnerships and marketing opportunities</p> 
//         </div>
  

//         <div className='flex gap-6 mt-6'>
    
//         <p>Step 2: "Select, PAYC & Connect" - Choose leaders whose communities match your target audience and connect with them directly</p>
//         </div>
 

//         <div className='flex gap-6 mt-6'>
      
//         <p>Step 3: "Collaborative & Achieve Goals" - Whose with leaders to promote your services, conduct market research, or launch targeted marketing campaigns within their communities</p>
//         </div>


//         <button className='ml-12 mt-5  text-white rounded-full bg-[#F08E1F] px-4 py-1'>Get Started</button>
//     </div>
//     </div>


    
// {/* why pigeohire stands out */}
// <div className=' py-16'>
//     <p className='text-gray-700 text-4xl font-bold text-center'>Why Pigeonhire Stands Out</p>

// <div className='flex justify-center gap-x-[72px] px-9 mt-12'>


//     <div className=' bg-gray-100 rounded-lg px-4 py-6'>
// <p className='font-semibold text-xl text-gray-700 text-center'>Local and Global Reach</p>
// <p className='text-gray-600 max-w-[190px]'>Access to niche local groups and expensive global communities</p>
// </div>

// <div className=' bg-gray-100 rounded-lg px-4 py-6'>
// <p className='font-semibold text-xl text-gray-700 '>Effective targeting</p>
// <p className='text-gray-600 max-w-[190px]'>Pinpoint precision in reaching your desired audience</p>
// </div>

// <div className=' bg-gray-100 rounded-lg px-4 py-6'>
// <p className='font-semibold text-xl text-gray-700'>Community Engagement</p>
// <p className='text-gray-600 max-w-[240px]'>Opportunities for authentic interaction and feedback</p>
// </div>

// <div className=' bg-gray-100 rounded-lg px-4 py-6'>
// <p className='font-semibold text-xl text-gray-700 '>Flexible Solutions</p>
// <p className='text-gray-600 max-w-[190px]'>Subscription and PAYG options tailored to your needs</p>
// </div>

// </div>

// {/* <div className='flex justify-center items-center'>
// <button className='bg-[#F08E1F] text-white rounded-full py-1 px-6'>Join our Global Network</button>
// </div> */}

// </div>


// {/* end of why pigeonhire stands out */}


// {/* featured communities */}
// <div className=' mt-24 mb-16'>
//     <div className='flex md:justify-between  justify-center items-center px-2 md:px-[300px] '>
// <p className='font-bold text-2xl'>Featured Communities</p>
// <p className='text-[#F3C164] text-lg cursor-pointer'>see all communities</p>
// </div>


// <div className='grid container m-auto md:grid-cols-4 mt-4 gap-y-4 md:gap-x-4 px-2 md:px-32 items-center justify-center'>
//     {data.map((item, index) => (
    
// <div className='border border-white p-1'>
//     {/* <img src='https://img.freepik.com/premium-photo/full-shot-girl-learning-math-school_23-2150470852.jpg?t=st=1706626764~exp=1706627364~hmac=e7442b0d6c6764a1ab4a09060fb80280c346e2e076a194a282ec3905330e99d2&w=826' alt='' className='w-[350px] h-[140px] object-cover rounded-md' /> */}
//     <img src={item.url} alt='' className='w-[350px] h-[140px] object-cover rounded-md' />
//     <p className='font-semibold text-xl mt-1'>Green Earth Advocates</p>
//     <p className='text-lg text-gray-400'>Community type : Environmental Activism</p>
//     <div className='flex gap-2 items-center text-gray-400'>
//     <p className=''>Active Since : 2018</p>
//     <p className=''>Member count : 1 - 50</p> 
//     </div>

//     <div className='flex gap-2 items-center text-gray-400 mt-2'>
//     <SlBadge /> 
//     <p>Verified</p>
//     <RiCoupon3Line />
//     <p>Free</p>
//     </div> 
// </div> 

//     ))}

// </div>



// </div>

// {/* Engage with community owners */}
// <div className='py-16'>
//     <p className='font-bold text-4xl text-center'>Engage with Community Owners</p>

//     <p className='text-lg text-center px-[360px] mt-9'>Forge connections with community owners to access tailored services such as detailed market research, targeted advertising, and unique content offerings. This collaboration opens doors to specialized insights and targeted audience engagement, enriching your market presence"</p>

// <div className='flex justify-center gap-x-9 mt-9'>
// <button className='bg-[#F08E1F] text-white rounded-full px-4 py-1'>Discover Communtiy Owners</button>
// <button className='border border-[#F08E1F] text-gray-600 rounded-full px-4 py-1'>Register your Community</button>
// </div>

// </div>


// {/* end of engage with community owners */}

// {/* how businesses are thriving using pigeonhire */}
// <div className='py-16'>

// <p className='text-center text-4xl font-bold'>How businesses are thriving using Pigeonhire</p>

// <div className='flex ml-12 mt-12 space-x-24 text-center justify-center'>
//     <div className='rounded-lg px-4 max-w-[280px] py-2 shadow-md'>
//         <div className='flex gap-x-6 items-center'>
//         <button className='bg-[#201327] text-white rounded-full justify-center items-center h-10 w-10'>G</button>
//         <p className='font-[600]'>Green Earth Advocates</p>
//         </div>
    
//         <p className='mt-4'>“Our partnership with Pigeonhire during their campus ambassador was a game-changer. The access to a wide array of communities resulted in unprecedented engagement and sales” </p>

//     </div>
//     <div className=' rounded-lg px-4 max-w-[280px] py-2 shadow-md'> 
//     <div className='flex gap-x-6 items-center'>
//         <button className='bg-[#201327] text-white rounded-full justify-center items-center h-10 w-10'>V</button>
//        <p className='font-[600]' >Victor Ade</p>
//        </div>

//        <p className='mt-4'>"As a community leader, the PAYG model has been transformative. We've partnered with businesses that truly resonate with our audience, enhancing both our community's value and our collaborations." </p>


//        </div>
//     <div className='rounded-lg px-4 max-w-[280px] py-2 shadow-md'> 
//     <div className='flex gap-x-6 items-center'>
//         <button className='bg-[#201327] text-white rounded-full justify-center items-center h-10 w-10'>V</button>
//        <p className='font-[600]'>Victor Ade</p>
//        </div>

//        <p className='mt-4'>“Our partnership with Pigeonhire during their campus ambassador was a game-changer. The access to a wide array of communities resulted in unprecedented engagement and sales” </p>

//        </div>
// </div>

// </div>


// {/* end of how businesses are thriving using pigeonhire */}

// {/* join our global network */}
// <div className='bg-[#F7F7F7] py-16'>

//     <div className='flex justify-evenly px-9'>


//         <div className='max-w-[190px]'>
//     <p className='font-semibold text-xl text-center'>600 +</p>
//     <p>Community Connections Made</p>
//     </div>


//     <div className='max-w-[300px]'>
//         <p className='font-semibold text-xl text-center'>100 +</p>
//         <p>Successful Campaigns Launched through Leader Partnerships</p>
//     </div>

    
//     <div className='max-w-[200px]'>
//         <p className='font-semibold text-xl text-center'>10%</p>
//         <p>Growth in engageent observed by businesses leveraging our platform.</p>
//     </div>

//     </div>

// <div className='flex justify-center items-center'>
//     <button className='bg-[#F08E1F] text-white rounded-full py-1 px-6'>Join our Global Network</button>
//     </div>

// </div>


// {/* end of join our global network */}


// {/* list of subscriptions */}

// <div className=''>

// <p className='text-center text-4xl font-bold mt-9'>Subscribe to join communities</p>

// <div className='flex ml-12 mt-12 space-x-24 text-center justify-center'>
//     <div className='border border-[#F08E1F] rounded-lg px-4 max-w-[280px] py-2'>
//         <p className='font-[600]'>Monthly</p>
//         <p className='font-bold text-3xl mt-8'>$14.99</p>
//         <p className='mt-4'>- Perfect for users needing flexibility or those testing the platform's capabilities </p>
//         <p className='mt-3'>- Unlimited access to the full database </p>
//         <p className='mt-3'>- Full database access with intelligence matchmaking and insights</p>
//         <p className='mt-3'>- Vetted connections</p>
//         <p className='mt-3'>- Quality ratings</p>
//         <p className='mt-3'>- Advanced search</p>
//         <button className='mt-[80px] bg-[#F08E1F] px-12 py-2 rounded-full'>Subscribe</button>
//     </div>
//     <div className='border border-[#F08E1F] rounded-lg px-4 max-w-[280px] py-2'> 
//        <p className='font-[600]' >Bi-annual</p>
//        <p className='font-bold text-3xl mt-8'>$62.96</p>
//        <p className='mt-4'>- Designed for committed users, offering significant savings over 6 months. </p>
//         <p className='mt-3'>- Unlimited access to the full database </p>
//         <p className='mt-3'>- Full database access with intelligence matchmaking and insights</p>
//         <p className='mt-3'>- Vetted connections</p>
//         <p className='mt-3'>- Quality ratings</p>
//         <p className='mt-3'>- Advanced search</p>
//         <p className='mt-3'>Save 30% per month</p>
//         <button className='mt-12 bg-[#F08E1F] px-12 py-2 rounded-full'>Subscribe</button>
//        </div>
//     <div className='border border-[#F08E1F] rounded-lg px-4 max-w-[280px] py-2'> 
//        <p className='font-[600]'>Annual</p>
//        <button className='bg-black rounded-full px-2 text-white items-center'>Popular</button>
//        <p className='font-bold text-3xl mt-2'>$89.94</p>
//        <p className='mt-4'>- Designed for committed users, this plan offers substantial savings for a medium-term strategy. </p>
//         <p className='mt-3'>- Unlimited access to the full database </p>
//         <p className='mt-3'>- Full database access with intelligence matchmaking and insights</p>
//         <p className='mt-3'>- Vetted connections</p>
//         <p className='mt-3'>- Quality ratings</p>
//         <p className='mt-3'>- Advanced search</p>
//         <p className='mt-3'>Save 50% per month</p>
//         <button className='mt-[24px] bg-[#F08E1F] px-12 py-2 rounded-full mb-2'>Subscribe</button>
//        </div>
// </div>

// </div>

// {/* end of list of subscriptions */}

// </div>
//     </div>
  


//   </div>
//   )
// }

// export default Home

import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowPigWorks from '../components/HowPigWorks'
import FAQ from '../components/FAQ'
import StoriesConnect from '../components/StoriesConnect'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <StoriesConnect/>
        <HowPigWorks />
        <FAQ/>
    </div>
  )
}

export default Home
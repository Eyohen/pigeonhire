import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { URL } from "../url";
import axios from "axios";

const CommunityOwnerCard = ({community}) => {
  return (
    <div className='shadow-xl rounded-xl mt-12 px-16 py-4 max-w-[1200px] ml-12'>
    <div className='flex gap-x-5 items-center'>
        <div className='bg-green-400 text-white rounded-full w-11 h-11 flex justify-center text-2xl items-center'>{community?.user?.email?.charAt(0)}</div>
        <div>
            <p>Community Type: {community.commtype}</p>
            <div className='flex gap-x-9 items-center'>
                <p className='font-semibold text-xl'>{community.name}</p>
                <p className='bg-green-200 text-green-600 rounded-md font-semibold px-3'>Verified</p>
            </div>
            <p>{community.description ? community.description.slice(0, 20)+"...Read more": "..."}</p>

        </div>
        </div>
</div>  

  )
}

export default CommunityOwnerCard
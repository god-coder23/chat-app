import { collection, getDoc, query } from 'firebase/firestore';
import React, { use, useState } from 'react'
import { db } from '../firebase' 
const SideBar = ({user}) => {
    const [searchedText, setSearchedText] = React.useState("");
    const [searchResult, setSearchResult] = React.useState("");
    const searchUser = async (e)=>{
        const val = <e className="target val"></e>
        setSearchedText(val)
        console.log(e.target.value)


    }
  return (
    <div>
        <div className='text-white text-4xl font-extralight font-sans p-12 flex justify-center items-center bg-black/10 backdrop-blur-md  '>
            <div className='flex flex-col gap-y-2'>
                <div>Welcome</div>
                {user.displayName}
            </div>
        </div>
         <div className='border bg-gray-400/30 text-white border-white/10 rounded-3xl'>
            <input type="text"  onChange={(e)=>searchUser(e)} placeholder='Search User' className='h-8 outline-none px-4 lg:w-250' />
        </div>
        <div className='bg-black/20 backdrop-blur-md h-screen overflow-y-auto '>
        <div className='flex flex-row px-3 py-3 items-center hover:bg-white/10'>
            {/*photo hai name ka*/}
            <div className='h-12 w-12 rounded-full bg-gray-400 ml-2 shrink-0'></div>
            {/*person name*/} 
            <div className='flex flex-col pl-4 flex-1'>
                <div className='text-white text-md '>
                Yatnesh Agarwal
            </div>
            <div className='text-gray-400 text-sm truncate'>
                Hello bhai kese ho
            </div>
            </div>
            {/* time kya hai  */}
            <div className='text-gray-300 pl-3 pb-5 text-sm shrink-0'>
                12:34pm
            </div>
        </div>
        </div>
    </div>
  )
}

export default SideBar

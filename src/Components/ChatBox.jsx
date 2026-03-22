import React from 'react'
import { ChevronLeft, Phone, Video, Info, Plus, AudioLines} from 'lucide-react';
const ChatBox = () => {
  return (
    <div>
        <div className='flex flex-col gap-y-150'>
            <div className='w-screen bg-white/10 p-9.5 flex items-center backdrop-blur-md border-b-2 border-white/20'>
            <div className='flex items-center '>
                <div className='flex gap-x-150 justify-center items-center'>
                    <div className='flex flex-row gap-x-16 justify-center items-center'>
                    {/* back button */}
                    <div className='bg-white/20 h-7 w-7 rounded-full flex justify-center items-center'>
                        <ChevronLeft color='white' />
                    </div>
                    
                    <div className='flex flex-row justify-center items-center gap-4'>
                        {/*profile pic*/}
                        <div className='h-15 w-15 rounded-full bg-gray-400'></div>
                        <div>
                            {/* proile name */}
                            <div className='text-white text-sm'>Yatnesh Agarwal</div>
                            <div className='text-gray-300 text-sm'>2 mins ago</div>
                        </div>
                    </div>
                </div> 
                {/*icons like calling etc */}
                <div className='flex flex-row gap-6'>
                    <div className='bg-white/20 rounded-full h-10 w-10 flex border border-white/20 justify-center items-center'><Phone color='white' /></div>
                    <div className='bg-white/20 rounded-full h-10 w-10 flex border border-white/20 justify-center items-center'><Video color='white' /></div>
                    <div className='bg-white/20 rounded-full h-10 w-10 flex border border-white/20 justify-center items-center'><Info color='white' /></div>
                </div>
                
                </div>
            </div>
                </div>
            <div className='text-white bg-black/10 h-screen '>
                {/* input box ke bahar ka bg */}
                <div className='border-t-2 border-b-2 border-white/20 h-35 w-screen flex px-15 py-10'>
                    <div className='flex flex-row gap-4'>
                        {/*add files */}
                    <div className='h-10 w-10 lg:-ml-10 lg:mt-2 rounded-full bg-white/20 flex justify-center items-center border border-white/30'><Plus /></div>
                    {/*input box */}
                    <div className='border bg-gray-400/30 text-white border-white/10 rounded-3xl'>
                        <input type="text" placeholder='hello' className=' h-15 outline-none px-4 lg:w-250' />
                    </div>
                     <div className='h-10 w-10 lg:mt-2 rounded-full bg-white/20 flex justify-center items-center border border-white/30'><AudioLines /></div>
                     <div className='h-10 w-15 lg:mt-2 rounded-full bg-white/20 flex justify-center items-center border border-white/30'>
                        <button>Send</button>
                     </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatBox

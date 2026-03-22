import React, { useEffect, useState } from 'react'
import SideBar from './Components/SideBar'
import ChatBox from './Components/ChatBox'
import { onAuthStateChanged } from 'firebase/auth';
import Login from '../src/Login';
import { auth } from './firebase';
import { ref, set, onDisconnect } from 'firebase/database'
import { rtdb } from './firebase'
const App = () => {
  const [user, setUser] = React.useState(null);
  const [CurrentChatId, setCurrentChatId] = React.useState(null);
  useEffect(()=>{
    onAuthStateChanged(auth,(u)=>setUser(u))
  },[])
  useEffect(() => {
    if (!user) return
    const userRef = ref(rtdb, `status/${user.uid}`)
    set(userRef, { online: true })
    onDisconnect(userRef).set({ online: false })
}, [user])
  
  if (!user) return <Login />
  return (
     <div className='h-screen w-screen overflow-hidden relative'>
      {/* background */}
      <img src="https://i.pinimg.com/1200x/47/da/2d/47da2d09a9bb2394dd764adc789ab193.jpg"
        className='absolute inset-0 h-screen w-screen object-cover blur-lg scale-110'
        alt="" />
      {/* dark overlay */}
      <div className='absolute inset-0 bg-black/50'></div>

      {/* layout */}
      <div className='absolute inset-0 flex flex-row'>
        <div className='w-[300px] shrink-0'>
          <SideBar user={user} onChatOpen={setCurrentChatId} />
        </div>
        <div className='flex-1'>
          <ChatBox user={user} chatId={CurrentChatId} />
        </div>
      </div>
    </div>
  )
}

export default App

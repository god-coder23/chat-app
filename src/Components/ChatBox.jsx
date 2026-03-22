import React, { use, useEffect } from 'react'
import { ChevronLeft, Phone, Video, Info, Plus, AudioLines} from 'lucide-react';
import { doc, getDoc, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { onSnapshot, orderBy, query } from 'firebase/firestore'
import { ref, onValue } from 'firebase/database'
import { rtdb } from '../firebase'

const ChatBox = ({chatId,user}) => {
    const [chatUser, setChatUser] = React.useState(null);
    const [message, setMessage] = React.useState("");
    const [isOnline, setIsOnline] = React.useState(null);
    const sendMessage = async () =>{
        if (message.trim()=='') return 
        await addDoc(collection(db,'chats',chatId,'messages'),{
            text: message,
            sendedId : user.uid,
            Timestamp: serverTimestamp()
        })
        setMessage('')

    }
    useEffect(()=>{
        if (!chatId) return
        setChatUser(null)
        const otherUid = chatId.replace(user.uid, '').replace('_', '')
        getDoc(doc(db, 'users', otherUid)).then(snap=>{
            if (snap.exists()) setChatUser(snap.data())
        })
    },[chatId])
    const [messages, setMessages] = React.useState([]);
    useEffect(()=>{
        if (!chatId) return 
        const q = query(collection(db,'chats',chatId,"messages"),orderBy('Timestamp'))
        const unsub = onSnapshot(q,(snap)=>{
            setMessages(snap.docs.map(doc=>doc.data()))
        })
        return ()=>unsub()
    },[chatId])
    useEffect(() => {
    if (!chatUser) return 
    onValue(ref(rtdb, `status/${chatUser.uid}`), (snap) => {
        setIsOnline(snap.val()?.online || false)
    })
}, [chatUser])

  return (
    <div>
        <div className='flex flex-col h-screen'>
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
                        <div className='h-15 w-15 rounded-full'>
                            <img className='rounded-full' src={chatUser?.photo || null} alt="" />
                        </div>
                        <div>
                            {/* proile name */}
                            <div className='text-white text-sm'>{chatUser ? chatUser.name :null}</div>
                            <div className='text-gray-300 text-sm'>{isOnline?"Online":"Offline"}</div>
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
            <div className='text-white bg-black/10 flex-1 flex flex-col overflow-hidden'>
             <div className='flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-2'>
                {messages.map((msg, i) => (
                    <div key={i} >
                        <div className={`px-4 py-2 rounded-2xl max-w-xs text-sm text-white ${msg.sendedId === user.uid ? 'bg-white/25' : 'bg-black/30'}`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>
                {/* input box ke bahar ka bg */}
                <div className='border-t-2 border-b-2 border-white/20 h-35 py-10 w-screen px-15 '>
                    <div className='flex flex-row gap-4'>
                        {/*add files */}
                    <div className='h-10 w-10 lg:-ml-10 lg:mt-2 rounded-full bg-white/20 flex justify-center items-center border border-white/30'><Plus /></div>
                    {/*input box */}
                    <div className='border bg-gray-400/30 text-white border-white/10 rounded-3xl'>
                        <input onChange={(e)=>setMessage(e.target.value)} type="text" placeholder='hello' className=' h-15 outline-none px-4 lg:w-250' />
                    </div>
                     <div className='h-10 w-10 lg:mt-2 rounded-full bg-white/20 flex justify-center items-center border border-white/30'><AudioLines /></div>
                     <div className='h-10 w-15 lg:mt-2 rounded-full bg-white/20 flex justify-center items-center border border-white/30'>
                        <button onClick={sendMessage}>Send</button>
                     </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatBox

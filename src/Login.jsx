import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider,db } from './firebase'
import { doc, setDoc } from 'firebase/firestore'

const Login = () => {
    const handleLogin = async () => {
        const result = await signInWithPopup(auth, provider)
        const user = result.user
        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }, { merge: true })
    }

  return (
    <div>
      <div className='w-screen relative flex justify-center items-center'>
        <img src='https://i.pinimg.com/1200x/47/da/2d/47da2d09a9bb2394dd764adc789ab193.jpg' className='h-screen object-cover w-screen blur-sm scale-110 shrink-0' alt="" />
        <button onClick={handleLogin} className='absolute hover:scale-90 cursor-pointer ring-4 ring-white/20 h-[100px] w-[300px] rounded-4xl backdrop-blur-sm bg-white/10 text-white font-bold'>
          Sign With Google
        </button>
      </div>
    </div>
  )
}

export default Login
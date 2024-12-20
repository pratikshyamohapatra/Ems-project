import { Input } from 'postcss'
import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

const submithandler=(e)=>{
  e.preventDefault()
  handleLogin(email,password)
  setEmail('')
  setPassword('')
  
}
  return (
   <div className='flex h-screen w-screnn items-center justify-center'>
    <div className='border-2 rounded-xl border-emerald-600 p-20'>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}className='flex flex-col items-center justify-center'>
        <input value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}
         required className=' border-2 outline-none  bg-transparent border-emerald-600 rounded-full px-4 py-3 text-xl placeholder:text-gray-400' type="email" placeholder='Enter your email'/>
       <input value={password} onChange={(e)=>{
        setPassword(e.target.value)
       }} required className=' border-2 outline-none  bg-transparent border-emerald-600 rounded-full px-4 py-3 text-xl placeholder:text-gray-400 mt-3 ' type='password' placeholder='Enter password' />
    <button className='text-white mt-5 border-none outline-none  bg-emerald-600 rounded-full px-4 py-3 text-xl placeholder:text-white'>Log in</button>
      </form>
    </div>
   </div>
  )
}

export default Login
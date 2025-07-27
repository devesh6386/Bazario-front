"use client"
import React from 'react'
import { useState } from 'react';

const Login = () => {
    const [url, setotp] = useState("")
    const [generated, setgenerated] = useState(false)

    return (
        <div className='max-w-lg items-center mx-auto bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl text-yellow-600 '>
                Login/Signup
            </h1>
            <div className='flex flex-col  gap-4'>
                 <input type='text' value={url} className='px-4 py-2 focus:outline-purple-600 rounded-md' placeholder='Enter your mobile number' onChange={e=>{seturl(e.target.value)}}/>
               
                 <input type='text'  value={setotp} className='px-4 py-2 focus:outline-purple-600 rounded-md' placeholder='Enter your Otp' onChange={e=>{setotp(e.target.value)}} />
                 <button className=' bg-purple-500  rounded-lg  shadow-lg p-3 py-1 my-3 cursor-pointer'>Login </button>
            </div>
        </div>
    )
}

export default Login;

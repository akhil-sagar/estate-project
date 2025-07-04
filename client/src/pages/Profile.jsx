import React, { use } from 'react'
import { useSelector } from 'react-redux';


export default function () {
  const {currentUser}=useSelector((state)=>state.user);
  return (
    <div className='p-3 max-w-lg mx-auto'>
     <h1 className='text-slate-800 text-center uppercase p-3 text-3xl font-semibold'> 
      Profile 
     </h1>
     
     <form className='flex flex-col gap-4'>
      <img className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' src={currentUser.avatar} alt="" />

      <input type="text" placeholder='Username' className='rounded-lg p-3 border' id='username'/>
      <input type="email" placeholder='email' className='rounded-lg p-3 border' id='email'/>
      <input type="password" placeholder='password' className='rounded-lg p-3 border' id='password'/>
      
      <button className='bg-slate-700 rounded-lg p-3 border hover:opacity-95 text-white disabled:opacity-80'>Update</button>

      <button className='bg-green-600 rounded-lg p-3 border hover:opacity-95 text-white disabled:opacity-80'>Create Listing</button>

     </form>
     <div className='flex mt-5 justify-between'>
      <span className='text-red-700 cursor-pointer'>Delete Account</span>
      <span className='text-red-700 cursor-pointer'>Sign out</span>
     </div>
    </div>
  )
}

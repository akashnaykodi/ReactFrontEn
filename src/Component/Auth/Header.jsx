import React from 'react'

export const Header = () => {
  return (
    <>    
 <div className='items-center mt-10 p-12' >
    <h1 className='font-semibold '>Hello</h1>
    <div className='flex justify-between items-center '>
    <h2 className='text-3xl font-bold '>Akash 🤔✔</h2>
    <button className='px-4 py-2 bg-red-500 text-white rounded'>LogOut</button>
    </div>
    <div className='flex h-20 w-[100%] justify-between'>
      <div className='h-full w-[45%] bg-slate-600 mt-5 rounded '>task 0</div>
      <div className='h-full w-[45%] bg-red-400 mt-5 rounded'>Task 0</div>
    </div>
    <div className='flex h-20 w-[100%] mt-5 justify-between'>
      <div className='h-full w-[45%] bg-slate-600 mt-5 rounded '>task 0</div>
      <div className='h-full w-[45%] bg-red-400 mt-5 rounded'>Task 0</div>
    </div>
    
<div className='h-52 w-[100%] mt-10 justify-between overflow-auto hide-Scrollbar'>
  <div className='h-8 w-[100%] bg-slate-600 mt-5 rounded '>task 0</div>
  <div className='h-8 w-[100%] bg-slate-600 mt-5 rounded '>task 0</div>
  <div className='h-8 w-[100%] bg-slate-600 mt-5 rounded '>task 0</div>
  <div className='h-8 w-[100%] bg-slate-600 mt-5 rounded '>task 0</div>
  <div className='h-8 w-[100%] bg-slate-600 mt-5 rounded '>task 0</div>
  <div className='h-8 w-[100%] bg-slate-600 mt-5 rounded '>task 0</div>
</div>

    
  </div>
    </>

  )
}

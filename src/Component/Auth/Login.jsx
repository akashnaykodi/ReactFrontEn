
import React, { useState } from 'react'

export const Login = () => {
  
const [Email, setEmail] = useState(" ")
const [Password, setPassword] = useState(second)
const submitHandler=(e)=>{
  e.preventDefault()
  console.log("email is ",Email)
  console.log("password is ",Password)

  setEmail("")
  setPassword("")

}

  return (
    <div className='flex h-screen w-screen items-center justify-center '>
     <div className='border-2 h-96 w-96  border-r-emerald-500 border-l-red-500 border-t-orange-500 border-b-emerald-950 '>
       <form  onSubmit={(e)=>{
        submitHandler(e)
       }}  className='flex flex-col items-center justify-center ' >
        
       <input 
       value={Email}
       onChange={(e)=>{
         setEmail(e.target.value)
       }} className='m-10 rounded-full outline-none border-2 p-3 border-emerald-600 bg-transparent placeholder:text-white' type='email' placeholder='Enter Your Email'></input>
       
       <input
       value={Password}
        onChange={(e)=>{
         setPassword(e.target.value)
       }} className='m-10 rounded-full outline-none border-2 p-3 border-emerald-600 bg-transparent placeholder:text-white' type='password' placeholder='Enter Your password'></input>
       <button className='border-2 p-4 text-2xl font-bold text-black border-t-yellow-300 border-r-sky-400 border-b-violet-400 border-l-zinc-700 bg-fuchsia-400 rounded-full'>log In</button>
       </form>

     </div> 
    </div>
  )
}
export default Login

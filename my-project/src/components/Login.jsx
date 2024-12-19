import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContextProv';
import User from './User';
import { useNavigate } from 'react-router';

function Login() {
const [email, setEmail] = useState('')
const [pass, setPass] = useState('')
const {user}=useContext(AuthContext)
const [login, setLogin] = useState(false)
let navigate=useNavigate()


function checker()
{
  let check=false
  user.map((el)=>{
    if(el.email===email &&el.password ===pass){
      navigate("/user")
      check=true
      setLogin(true)
      setEmail('')
      setPass('') 
      return
    }

  })
  if(!check)
  {
    alert("Invalid crediantials or SignUp Again!  ")
    setLogin(false)
    setEmail('')
    setPass('')

  }
}


  return (<div className='w-full h-screen border  '>
    <div className='w-[300px] h-56 border border-emerald-700 rounded-lg m-auto my-44 flex flex-col justify-center items-center gap-6 px-6'>
      <div className='text-4xl font-bold underline' >Login</div>
      <input value={email} onChange={(e)=>  setEmail(e.target.value)}  className='text-black border border-slate-700 w-[95%] rounded-md px-5 placeholder:text-black' type="email" placeholder='Email' />
      <input value={pass} onChange={(e)=>setPass(e.target.value)} className='text-black border border-slate-700 w-[95%] rounded-md px-5 placeholder:text-black' type="password" placeholder='Password' />
      <button onClick={()=>checker()} className='w-fit border bg-emerald-800  rounded-md text-white px-5 text-l font-semibold'>Login</button>
    </div>
  </div>
  )
}

export default Login
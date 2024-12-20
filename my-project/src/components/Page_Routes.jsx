import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import About from './About'
import User from './User'
import Contact from './Contact'
import Login from './Login'
import UserInfo from './UserInfo'
import RouterLock from './RouterLock'


function Page_Routes() {

  return (
    <Routes>
        <Route path='/' element={
           <RouterLock>
            <Home/>
          </RouterLock>
          }/>
        <Route path='/User' element={
          <RouterLock>
            <User/>
           </RouterLock>
          }/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/user/:prodid' element={<UserInfo/>}/>

    </Routes>
  )
}

export default Page_Routes
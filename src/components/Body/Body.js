import React from 'react'
import "./Body.css"
import { Route, Routes } from 'react-router'
import Home from './Home/Home'
import Medicine from './Medicine/Medicine'
import Auth from '../Auth/Auth'
import ProfilePage from '../Profile/ProfilePage'


const Body = () => {
  return (
    <div className='Main'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/medicine' element={<Medicine/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>


      </Routes>
    </div>
  )
}

export default Body

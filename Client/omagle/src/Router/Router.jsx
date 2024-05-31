import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Components/Signup'
import Login from '../Components/Login'
import Home from '../Components/Home'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home/>} />
        </Routes>
    )
}

export default Router
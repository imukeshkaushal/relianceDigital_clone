import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Admin/Admin'
import AdminRequireAuth from "../Admin/AdminRequireAuth"
import AdminLogin from '../Pages/AdminLogin'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element = {<Home/>}></Route>
            <Route path='/admin' element = {<AdminRequireAuth><Admin/></AdminRequireAuth>}></Route>
            <Route path='/admin/login' element = {<AdminLogin/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes
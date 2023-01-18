import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Admin/Admin'
import Home from '../Pages/Home'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element = {<Home/>}></Route>
            <Route path='/admin' element = {<Admin/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes
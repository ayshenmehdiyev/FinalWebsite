import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Detail from './Pages/Detail/index.jsx'
import Category from './Pages/Category/index.jsx'
import Payment from './Pages/Payment/index.jsx'

const App = () => {
  return (
    <>
    <Header/>
  <Routes>
        <Route index element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path="/payment/:id" element={<Payment />}/>
      </Routes>
    <Footer />
   </>
   )
}

export default App

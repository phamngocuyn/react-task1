import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/home/Home'
import Header from "@/components/header/Heder";

const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Header />
         <Routes>
           <Route path='/' element={<Home />} ></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

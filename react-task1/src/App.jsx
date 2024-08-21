import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/home/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home />} ></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

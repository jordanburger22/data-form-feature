import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Finances from './components/Finances'
import FinanceForm from './components/FinanceForm'
import Navbar from './components/Navbar'


function App() {


  return (
    <>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/finances' element={<Finances />} />
        <Route path='/add' element={<FinanceForm />} />
      </Routes>
    </>
  )
}

export default App

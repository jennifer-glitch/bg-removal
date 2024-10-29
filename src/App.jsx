import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import { Result } from 'postcss'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import { SignInButton } from '@clerk/clerk-react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <SignInButton/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/result' element={<Result />} />
          <Route path='/buy' element={<BuyCredit />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App


import { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "./components/login"
import Preloader from "./components/preloder"
import HeroSection from "./components/HeroSection"
import Header from "./components/Header"

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadingTimer = setTimeout(() => setIsLoading(false), 4000)

    return () => clearTimeout(loadingTimer)
  }, [])
 

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[radial-gradient(circle_at_center,#fb923c_0%,#db2777_40%,#4c0519_75%,#000000_100%)]
">
        <Routes>
          <Route path="/" element={isLoading ? <Preloader /> : <HeroSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

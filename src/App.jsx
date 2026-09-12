
import { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "./components/login"
import Preloader from "./components/preloder"
import HeroSection from "./components/HeroSection"

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadingTimer = setTimeout(() => setIsLoading(false), 4000)

    return () => clearTimeout(loadingTimer)
  }, [])
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoading ? <Preloader /> : <HeroSection />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import HomePage from './pages/homePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes path="/*">          
        <Route path="/*" element={<HomePage/>}/>       
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

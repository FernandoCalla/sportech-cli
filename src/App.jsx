import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
import LandingPage from './pages/Landing';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App

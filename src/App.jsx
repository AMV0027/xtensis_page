import { useState } from 'react'
import React from 'react'
import './App.css'
import Header from './components/Header'
import Page1 from './components/Page1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Page1 />
    </>
  )
}

export default App

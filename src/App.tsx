import { useState } from 'react'
import Header from './UI/header'
import "./styles/uistyle.scss"
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />
      <Outlet/>
    </div>
  )
}

export default App

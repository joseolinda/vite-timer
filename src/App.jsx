import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TimerCount from './components/TimerCount'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>Timer Pomodoro</p>
        <TimerCount initialTime={25} />
      </header>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(0)

  return (
   <div style={{padding: "2rem"}}>
    <h1>Welcome to mid code</h1>
    <button
    onClick={() => setIsLoggedIn(!isLoggedIn)}
    >Toggle login</button>

    <div>
    <h3>&& operator</h3>
    {isLoggedIn && <p>Welcome to midcode video</p>}
    </div>

    <div>
    <h3>Ternary operator</h3>
    {isLoggedIn ? <p>Welcome to midcode video</p> : <p>Please log in</p>}
    </div>

   </div>
  )
}

export default App

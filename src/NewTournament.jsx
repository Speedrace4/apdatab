import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="main">
        <div className="header">
          <h2 className="create">Create a Tournament</h2>
          <h2 className="title">APDA Tab</h2>
          <h2 className="about">About</h2>
        </div>
        <div className="lower-body">
          <h2 className="active">Active Tournaments</h2>
          <ol className="tournaments">
            <li><a href="/src">Example Tournament</a></li>
          </ol>
        </div>
      </div>
  )
}

export default App

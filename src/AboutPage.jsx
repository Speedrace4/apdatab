import { useState } from 'react'
import './AboutPage.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="main">
        <div class="header">
          <h1>APDA Tab</h1>
        </div>
      
        <div class="lower-body">
          <p>This is a tabulation website for American Parliamentary Debate, created for the American Parliamentary Debate Association (APDA). If you want to learn more about APDA, please visit apda.online. </p>
          </div>
      </div>
  )
}

export default App

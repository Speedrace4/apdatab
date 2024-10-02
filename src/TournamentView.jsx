import { useState } from 'react'
import './TournamentView.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="main">
        <div className="header">
          <h1>APDA Tab</h1>
        </div>
      
        <div className="lower-body">
          <section className="buttons">
            <button>Pairings</button>
            <button>Submit Ballot</button>
            <button>Judge List</button>
            <button>Team List</button>
          </section>
        
          <section className="login">
            <h2>Tab Staff Login</h2>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username"></input>
              <br></br>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password"></input>
              <br></br>
        
              <button type="submit">Login</button>
            </form>
            </section>
          </div>
      </div>
  )
}

export default App

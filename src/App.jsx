import { useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom'

function App() {

  return (
      <div className="main">
        <div className="header">
          <h2 className="create">Create a Tournament</h2>
          <h2 className="title">APDA Tab</h2>
          <h2 className="about"><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link></h2>
        </div>
        <div className="lower-body">
          <h2 className="active">Active Tournaments</h2>
          <ol className="tournaments">
            <li><Link to="/tournament/test">Example Tournament</Link></li>
          </ol>
        </div>
        <div className="footer">
          <p className="email">Questions or issues? <a href="mailto:samuel.johnson.fop@gmail.com">Email Samuel</a></p>
        </div>
      </div>
  )
}

export default App

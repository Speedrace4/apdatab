import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './ErrorPage.jsx'
import TournamentView from './TournamentView.jsx'
import AboutPage from './AboutPage.jsx'
import './index.css'
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Router>
      <Routes>
          <Route path="/tournament/:name" element={<TournamentView />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<App />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </Router>
  </StrictMode>,
)

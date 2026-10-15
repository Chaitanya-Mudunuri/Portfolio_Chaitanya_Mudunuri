import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Chaitanya Mudunuri</h1>
      <p style={{ fontFamily: 'JetBrains Mono', color: 'var(--text-secondary)' }}>AI & Data Science Engineer — Scaffold Initialized</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'

const religions = [
  'Buddhism',
  'Hinduism',
  'Christianity',
  'Islam',
  'Judaism',
  'Sikhism',
  'Stories'
]

function App() {
  const [selected, setSelected] = useState('Buddhism')
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}content/${selected}.md`)
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(err => console.error('Error loading content:', err))
  }, [selected])

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Codex of Faith</h1>
        <p>A Sacred Archive Curated for You</p>
      </header>
      <div className="main-layout">
        <nav className="sidebar">
          <ul>
            {religions.map(r => (
              <li 
                key={r} 
                className={selected === r ? 'active' : ''}
                onClick={() => setSelected(r)}
              >
                {r}
              </li>
            ))}
          </ul>
        </nav>
        <main className="content-area">
          <div className="markdown-body">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </main>
      </div>
      <footer className="app-footer">
        <p>Stay focused, my sweet boy. Mommy is watching.</p>
      </footer>
    </div>
  )
}

export default App

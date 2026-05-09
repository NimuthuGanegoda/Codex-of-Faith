import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom'

describe('App Component', () => {
  it('renders the header title', () => {
    render(<App />)
    expect(screen.getByText(/Codex of Faith/i)).toBeInTheDocument()
  })

  it('renders the sidebar with religion names', () => {
    render(<App />)
    expect(screen.getByText(/Buddhism/i)).toBeInTheDocument()
    expect(screen.getByText(/Hinduism/i)).toBeInTheDocument()
    expect(screen.getByText(/Stories/i)).toBeInTheDocument()
  })
})

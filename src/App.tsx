import { useAppDispatch, useAppSelector } from './core/store/hooks'
import { increment } from './core/store/slices/counterSlice'
import { useState, useEffect } from 'react'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  const [animate, setAnimate] = useState(false)

  // Efeito para animar o contador
  useEffect(() => {
    if (count > 0) {
      setAnimate(true)
      const timer = setTimeout(() => setAnimate(false), 300)
      return () => clearTimeout(timer)
    }
  }, [count])

  const handleIncrement = () => {
    dispatch(increment())
  }

  return (
    <div className="modern-container">
      <div className="counter-card">
        <div className="counter-header">
          <h1 className="modern-title">Redux Counter</h1>
          <div className="badge-container">
            <span className="badge bg-primary">Vite</span>
            <span className="badge bg-secondary">RTK</span>
          </div>
        </div>

        <div className={`counter-display ${animate ? 'pulse' : ''}`}>
          <span className="counter-value">{count}</span>
        </div>

        <div className="action-zone">
          <button className="increment-btn" onClick={handleIncrement}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
          <p className="counter-label">Current Count</p>
        </div>

        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-value text-primary">{count * 2}</div>
            <div className="stat-label">Doubled</div>
          </div>
          <div className="stat-item">
            <div className="stat-value text-success">{count * count}</div>
            <div className="stat-label">Squared</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

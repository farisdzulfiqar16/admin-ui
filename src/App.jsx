import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* div yang digunakan sebagai parent */}
      <div className="min-h-screen bg-neutral-800 
      flex flex-col items-center justify-center text-center space-x-8 mb-12">
        
        {/* isi dari tampilan */}
          <div className="flex items-center justify-center">

            <a href="https://vite.dev" target="_blank">
              <img 
              src={viteLogo} 
              className="w-24 h-24 animate-pulse" 
              alt="Vite logo" 
              style={{animationDuration: "2s"}}
              />
            </a>

            <a href="https://react.dev" target="_blank">
              <img 
              src={reactLogo} 
              className="w-24 h-24 animate-pulse" 
              alt="React logo" 
              style={{animationDuration: "2s"}}/>
            </a>

          </div>

        <h1 className="text-white text-4xl font-bold mb-16"> Vite + React</h1>

          <div>
            <div 
            className="text-sm space-y-6 mb-8 animate-pulse"
            style={{}}>
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>

              <p className="text-neutral-400">
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>

            </div>

            <p className="text-neutral-500 animate-pulse">
              Click on the Vite and React logos to learn more
            </p>
          </div>

      </div>
    </>
  )
}

export default App

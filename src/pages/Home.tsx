import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import vlphaLogo from '/vlpha.png'
import viteLogo from '/vite.svg'
import '../App.css'
function Home() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <div className='flex flex-col items-center justify-center'>
            <a href="https://www.vlpha.tech" target="_blank">
              <img src={vlphaLogo} className="w-64 bg-black rounded-full" alt="Vlpha logo" />
            </a>
          <div className='flex'>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vlpha logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
            <p>
              Project structured by <code className='font-extrabold'>The Alpha</code> 
            </p>
          <h1>Vite + React</h1>
          <div className="card">
            <button className='text-white ' onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </>
    )
  }
  export default Home
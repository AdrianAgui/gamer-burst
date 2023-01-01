import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  
  return (
    <main>
      <h1 className="text-3xl">gamer burst</h1>

      <button className="button" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </main>
  )
}
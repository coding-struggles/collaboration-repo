import { useState } from 'react'

import './App.css'
import React from 'react'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className="text-3xl font-bold underline">
   <Button>Hello World</Button>
  </h1>
  )
}

export default App

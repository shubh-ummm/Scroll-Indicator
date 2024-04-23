import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Scroll_Indicator from './components/Scroll_Indicator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Scroll_Indicator url={"https://dummyjson.com/products?limit=100"}/>
    </>
  )
}

export default App

import { useState } from 'react'
import { Form } from './components/Form/Form'

import './App.css'
import { Search } from './components/Search/Search'

function App() {
  const [count, setCount] = useState(0)

   
  return (
    <>
     <Form/>
     <Search/>
    </>
  )
}

export default App

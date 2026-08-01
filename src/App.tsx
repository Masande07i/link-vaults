import { Form } from './components/Form/Form'
import { Text } from './components/Text/Text'


import './App.css'


function App() {
  
  
  return (
    <div className="app">

      <header className="topSec">

        <Text variant="h1"> Link Vaults  </Text>

        <Text variant="p" >Save, organize and manage all your favourite websites in one place.
        </Text>
        </header>

      <Form />

    </div>
  )
}

export default App

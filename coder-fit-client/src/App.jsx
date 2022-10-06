import { useQuery } from '@apollo/client'
import './App.css'

import CodersList from './components/CodersList'

import { CODERS } from './queries'

function App() {
  const { loading, error, data } = useQuery(CODERS)

  if (loading) return 'Loading...'
  if (error) return `Error: ${error.message}`

  return (
    <div className="App">
      <div>
        <CodersList coders={data.coders} />
      </div>
    </div>
  )
}

export default App

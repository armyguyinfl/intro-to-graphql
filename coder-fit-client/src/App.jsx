import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { useQuery, gql } from '@apollo/client'

const CODERS = gql`
  query Coders {
    coders {
      id
      name
      description
      activities
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(CODERS)

  if (loading) return 'Loading...'
  if (error) return `Error: ${error.message}`

  return (
    <div className="App">
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}

export default App

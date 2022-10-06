import { useQuery } from '@apollo/client'
import './App.css'

import ActivityList from './components/ActivityList'
import CodersList from './components/CodersList'

import { ACTIVITIES, CODERS } from './queries'

function App() {
  const activityQuery = useQuery(ACTIVITIES)
  const coderQuery = useQuery(CODERS)

  if (coderQuery.loading || activityQuery.loading) return 'Loading...'
  if (coderQuery.error || activityQuery.error)
    return (
      <div>
        Coder Error: {coderQuery.error.message} <br />
        Activity Error: {activityQuery.error.message}
      </div>
    )

  return (
    <div className="App">
      <div>
        <CodersList coders={coderQuery.data.coders} />
        <ActivityList activities={activityQuery.data.activities} />
      </div>
    </div>
  )
}

export default App

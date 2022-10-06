export default function ActivityList({ activities }) {
  return (
    <div>
      {activities.map((activity) => (
        <div key={activity.id}>
          <h2>{activity.name}</h2>
          <p>{activity.description}</p>
        </div>
      ))}
    </div>
  )
}

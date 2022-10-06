import Coder from './Coder'

export default function CodersList({ coders }) {
  return (
    <div>
      {coders.map((coder) => (
        <Coder key={coder.id} data={coder} />
      ))}
    </div>
  )
}

export default function TabButton({ onSelected, children }) {
  return (
    <div>
      <button onClick={onSelected}>{children}</button>
    </div>
  )
}

export default function TabButton({ onSelected, children, isSelected }) {
  return (
    <div>
      <button className={isSelected ? 'active' : ''} onClick={onSelected}>
        {children}
      </button>
    </div>
  )
}

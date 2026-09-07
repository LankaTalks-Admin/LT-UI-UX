export default function Badge({ children, color = 'bg-secondary-900 text-white' }) {
  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${color}`}
    >
      {children}
    </span>
  )
}

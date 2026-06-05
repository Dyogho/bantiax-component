type StatsCardProps = {
  value: string
  label: string
}

function StatsCard({ value, label }: StatsCardProps) {
  return (
    <div className="stats-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}

export default StatsCard
export type { StatsCardProps }

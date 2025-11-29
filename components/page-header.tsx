interface PageHeaderProps {
  title: string
  description?: string
  badge?: string
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-gradient-to-r from-[#00F0FF] to-transparent" />
        {badge && <span className="font-mono text-xs uppercase tracking-widest text-[#888888]">{badge}</span>}
        <div className="h-px flex-1 bg-gradient-to-l from-[#00F0FF] to-transparent" />
      </div>
      <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4 text-balance">
        {title}
      </h1>
      {description && <p className="text-[#888888] text-lg font-light max-w-2xl">{description}</p>}
    </div>
  )
}

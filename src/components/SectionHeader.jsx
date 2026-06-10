function SectionHeader({ eyebrow, title, copy, align = 'center' }) {
  return (
    <div
      className={`mx-auto mb-9 max-w-3xl sm:mb-12 ${align === 'left' ? 'text-left' : 'text-center'}`}
    >
      <p className={`mb-4 text-xs font-bold uppercase tracking-[0.28em] text-champagne ${align === 'center' ? 'indian-ornament inline-flex' : ''}`}>
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold leading-[1.08] text-ivory sm:text-5xl lg:text-6xl">{title}</h2>
      {copy && <p className="mt-5 text-sm leading-7 text-mist md:text-base">{copy}</p>}
    </div>
  )
}

export default SectionHeader

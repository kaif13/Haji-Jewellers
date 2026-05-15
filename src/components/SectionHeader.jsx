import { motion } from 'framer-motion'

function SectionHeader({ eyebrow, title, copy, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`mx-auto mb-12 max-w-3xl ${align === 'left' ? 'text-left' : 'text-center'}`}
    >
      <p className={`mb-4 text-xs font-bold uppercase tracking-[0.28em] text-champagne ${align === 'center' ? 'indian-ornament inline-flex' : ''}`}>
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold leading-tight text-ivory md:text-6xl">{title}</h2>
      {copy && <p className="mt-5 text-sm leading-7 text-mist md:text-base">{copy}</p>}
    </motion.div>
  )
}

export default SectionHeader

import { motion, useReducedMotion } from 'framer-motion'

function SectionHeader({ eyebrow, title, copy, align = 'center' }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: 'easeOut' }}
      className={`mx-auto mb-9 max-w-3xl sm:mb-12 ${align === 'left' ? 'text-left' : 'text-center'}`}
    >
      <p className={`mb-4 text-xs font-bold uppercase tracking-[0.28em] text-champagne ${align === 'center' ? 'indian-ornament inline-flex' : ''}`}>
        {eyebrow}
      </p>
      <h2 className="font-display text-[2.35rem] font-semibold leading-[1.08] text-ivory sm:text-5xl md:text-6xl">{title}</h2>
      {copy && <p className="mt-5 text-sm leading-7 text-mist md:text-base">{copy}</p>}
    </motion.div>
  )
}

export default SectionHeader

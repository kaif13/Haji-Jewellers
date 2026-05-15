import { motion } from 'framer-motion'

function CollectionCard({ collection }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bridal-frame group relative min-h-[460px] overflow-hidden rounded-[32px] border border-champagne/20"
    >
      <img
        src={collection.image}
        alt={collection.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-maroon/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-champagne">Collection</p>
        <h3 className="font-display text-4xl font-semibold text-ivory">{collection.title}</h3>
        <p className="mt-3 text-sm leading-6 text-mist">{collection.copy}</p>
      </div>
    </motion.article>
  )
}

export default CollectionCard

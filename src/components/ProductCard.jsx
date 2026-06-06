import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

function ProductCard({ product }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.22 }}
      className="group overflow-hidden rounded-[30px] border border-champagne/20 bg-gradient-to-b from-white/[0.06] to-ruby/[0.08] shadow-glass backdrop-blur"
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="bridal-frame relative aspect-[4/5] overflow-hidden bg-velvet">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 motion-reduce:transition-none md:group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-maroon/20 opacity-85" />
          <div className="absolute left-5 top-5 rounded-full border border-champagne/25 bg-maroon/45 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-champagne backdrop-blur">
            {product.category}
          </div>
        </div>
      </Link>
      <div className="space-y-5 p-5 sm:p-7">
        <div>
          <h3 className="font-display text-3xl font-semibold text-ivory">{product.name}</h3>
          <p className="mt-3 text-sm leading-7 text-mist">{product.description}</p>
        </div>
        <div className="gold-line" />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-champagne">{product.price}</p>
          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-ivory transition group-hover:text-champagne"
          >
            View Details <FiArrowUpRight />
          </Link>
        </div>
        <a
          href="https://wa.me/971500000000"
          target="_blank"
          rel="noreferrer"
          className="lux-button w-full border border-champagne/25 bg-champagne/10 text-champagne hover:bg-champagne hover:text-ink"
        >
          Enquire Now
        </a>
      </div>
    </motion.article>
  )
}

export default ProductCard

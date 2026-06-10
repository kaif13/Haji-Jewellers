import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

function ProductCard({ product }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.22 }}
      className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-champagne/20 bg-gradient-to-b from-white/[0.06] to-ruby/[0.08] shadow-glass backdrop-blur sm:rounded-[30px]"
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
          <div className="absolute left-4 top-4 rounded-full border border-champagne/25 bg-maroon/55 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-champagne backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:text-[11px] sm:tracking-[0.18em]">
            {product.category}
          </div>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-5 p-5 sm:p-7">
        <div>
          <h3 className="font-display text-[1.75rem] font-semibold leading-tight text-ivory sm:text-3xl">{product.name}</h3>
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
          className="lux-button mt-auto w-full border border-champagne/25 bg-champagne/10 text-champagne hover:bg-champagne hover:text-ink"
        >
          Enquire Now
        </a>
      </div>
    </motion.article>
  )
}

export default ProductCard

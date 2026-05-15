import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft, FiAward, FiMessageCircle, FiShield } from 'react-icons/fi'
import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function ProductDetails() {
  const { id } = useParams()
  const product = products.find((item) => item.id === id) || products[0]
  const related = products.filter((item) => item.id !== product.id).slice(0, 3)

  return (
    <main className="pt-28">
      <section className="lux-container grid gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative overflow-hidden rounded-[34px] border border-champagne/15 bg-velvet">
          <img src={product.image} alt={product.name} className="h-full min-h-[520px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        </div>
        <div className="flex flex-col justify-center">
          <Link to="/collections" className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-champagne">
            <FiArrowLeft /> Back to Collections
          </Link>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-champagne">{product.category}</p>
          <h1 className="font-display text-6xl font-semibold leading-none text-ivory md:text-8xl">{product.name}</h1>
          <p className="mt-6 text-xl font-bold uppercase tracking-[0.18em] text-champagne">{product.price}</p>
          <p className="mt-6 text-lg leading-8 text-mist">{product.description}</p>
          <p className="mt-5 text-sm leading-7 text-sand">{product.details}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="https://wa.me/971500000000" className="lux-button bg-champagne text-ink">
              <FiMessageCircle /> Enquire on WhatsApp
            </a>
            <Link to="/contact" className="lux-button border border-champagne/30 text-champagne">
              Visit Store to Buy
            </Link>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <Info icon={<FiShield />} title="Certification guidance" />
            <Info icon={<FiAward />} title="Private styling support" />
          </div>
        </div>
      </section>
      <section className="lux-container pb-20">
        <div className="rounded-[28px] border border-champagne/15 bg-white/[0.04] p-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-champagne">AI replacement prompt</p>
          <p className="mt-3 text-sm leading-7 text-mist">{product.prompt}</p>
        </div>
      </section>
      <section className="lux-container pb-24">
        <SectionHeader eyebrow="Related pieces" title="Continue the appointment edit." />
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  )
}

function Info({ icon, title }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-champagne/15 bg-white/[0.04] p-5 text-champagne">
      <span className="text-2xl">{icon}</span>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-ivory">{title}</p>
    </div>
  )
}

export default ProductDetails

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import CollectionCard from '../components/CollectionCard'
import TestimonialCard from '../components/TestimonialCard'
import FAQAccordion from '../components/FAQAccordion'
import { products } from '../data/products'
import { collections } from '../data/collections'
import { testimonials } from '../data/testimonials'
import { FiAward, FiBox, FiCheckCircle, FiMapPin, FiShield, FiStar } from 'react-icons/fi'

const gallery = products.slice(0, 6)
const badges = [
  [FiShield, 'Trusted family service'],
  [FiAward, 'Certified jewellery guidance'],
  [FiBox, 'Premium gift packaging'],
  [FiMapPin, 'Indian bridal styling'],
]

function Home() {
  return (
    <main>
      <Hero />

      <section className="lux-container section-pad">
        <SectionHeader
          eyebrow="Signature Indian edit"
          title="Bridal gold, diamonds, and heirloom pieces with royal detail."
          copy="Every piece is framed as a luxury consultation, from diamond rings and pendants to ornate bridal sets, bangles, temple-inspired gold, and long harams."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-velvet via-maroon/45 to-velvet section-pad">
        <div className="lux-container">
          <SectionHeader eyebrow="Featured collections" title="Crafted for weddings, rituals, and royal evenings." />
          <div className="grid gap-8 lg:grid-cols-3">
            {collections.map((collection) => (
              <CollectionCard key={collection.slug} collection={collection} />
            ))}
          </div>
        </div>
      </section>

      <section className="lux-container section-pad">
        <SectionHeader eyebrow="Best sellers" title="The pieces brides and families ask to see first." />
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            720: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="h-auto">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="relative overflow-hidden section-pad">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="lux-container relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            align="left"
            eyebrow="Bridal jewellery"
            title="For mehendi, nikkah, pheras, reception, and family gifting."
            copy="Private bridal styling helps match gold tone, necklace scale, bangles, earrings, maang tikka mood, and diamond accents to each event."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {['Mehendi layers', 'Nikkah elegance', 'Reception diamonds', 'Temple gold heirlooms'].map((item) => (
              <div key={item} className="glass-panel rounded-[24px] p-7">
                <FiStar className="mb-5 text-2xl text-champagne" />
                <p className="font-display text-3xl font-semibold text-ivory">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lux-container grid gap-10 section-pad lg:grid-cols-2">
        <FeaturePanel
          eyebrow="Diamond collection"
          title="Modern brilliance with certification confidence."
          copy="Explore rings, pendants, tennis-inspired earrings, and reception suites with carefully graded sparkle."
          image="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85"
        />
        <FeaturePanel
          eyebrow="Gold jewellery"
          title="22K warmth for rituals, gifting, and family legacy."
          copy="Discover harams, bangles, necklaces, jhumka-inspired earrings, and festive gold with Indian bridal detail."
          image="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85"
        />
      </section>

      <section className="bg-black section-pad">
        <div className="lux-container">
          <SectionHeader eyebrow="Client words" title="Trust is the rarest luxury." />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="lux-container grid items-center gap-12 section-pad lg:grid-cols-2">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Brand story"
            title="A house shaped by celebration, craft, and family trust."
            copy="Haji Jewellers brings together the emotional richness of Indian bridal jewellery, 22K gold tradition, and a premium showroom experience."
          />
          <Link to="/about" className="lux-button border border-champagne/30 text-champagne hover:bg-champagne hover:text-ink">
            About the Brand
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {gallery.slice(0, 4).map((item) => (
            <img key={item.id} src={item.image} alt={item.name} loading="lazy" className="aspect-square rounded-[24px] object-cover" />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-velvet via-maroon/30 to-velvet section-pad">
        <div className="lux-container">
          <SectionHeader eyebrow="Confidence details" title="Everything around the jewel matters." />
          <div className="grid gap-5 md:grid-cols-4">
            {badges.map(([Icon, label]) => (
              <div key={label} className="glass-panel rounded-[24px] p-6 text-center">
                <Icon className="mx-auto mb-5 text-3xl text-champagne" />
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-ivory">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              ['Jewellery certification', 'Diamond grading, gold purity guidance, and transparent purchase conversations.'],
              ['Premium packaging', 'Velvet, ivory, and champagne-toned presentation for gifting and bridal keepsakes.'],
              ['Store visit CTA', 'Book a private viewing to compare pieces under showroom lighting.'],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[28px] border border-champagne/15 bg-black/35 p-7">
                <FiCheckCircle className="mb-5 text-3xl text-champagne" />
                <h3 className="font-display text-3xl font-semibold text-ivory">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-mist">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lux-container section-pad">
        <div className="glass-panel rounded-[34px] p-8 text-center md:p-14">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-champagne">Private appointment</p>
          <h2 className="mx-auto max-w-4xl font-display text-5xl font-semibold leading-tight text-ivory md:text-7xl">
            Let us curate jewellery for your wedding ceremony, festive gift, or family legacy purchase.
          </h2>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="lux-button bg-champagne text-ink">Book Appointment</Link>
            <a href="https://wa.me/971500000000" className="lux-button border border-champagne/30 text-champagne">WhatsApp Enquiry</a>
          </div>
        </div>
      </section>

      <section className="lux-container pb-24">
        <SectionHeader eyebrow="Questions" title="Before your visit." />
        <FAQAccordion />
      </section>
    </main>
  )
}

function FeaturePanel({ eyebrow, title, copy, image }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-[32px] border border-champagne/15 bg-white/[0.04]"
    >
      <img src={image} alt={title} loading="lazy" className="h-80 w-full object-cover" />
      <div className="p-7">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-champagne">{eyebrow}</p>
        <h3 className="font-display text-4xl font-semibold text-ivory">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-mist">{copy}</p>
      </div>
    </motion.article>
  )
}

export default Home

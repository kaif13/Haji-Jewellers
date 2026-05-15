import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { FiArrowUpRight, FiCalendar, FiCheckCircle } from 'react-icons/fi'

function Hero() {
  const jewelRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(jewelRef.current, {
        y: -10,
        rotate: 0.8,
        duration: 3.4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative overflow-hidden bg-luxury-radial pt-24 md:pt-28">
      <div className="absolute left-1/2 top-24 h-[340px] w-[340px] -translate-x-1/2 rounded-full border border-champagne/10 md:h-[680px] md:w-[680px]" />
      <div className="absolute left-1/2 top-40 h-[240px] w-[240px] -translate-x-1/2 rounded-full border border-champagne/10 md:h-[480px] md:w-[480px]" />
      <div className="absolute -left-28 top-36 h-72 w-72 rounded-full bg-ruby/25 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-champagne/20 blur-3xl" />
      <div className="absolute left-6 top-28 hidden h-[68vh] w-px bg-gradient-to-b from-transparent via-champagne/35 to-transparent lg:block" />
      <div className="absolute right-6 top-28 hidden h-[68vh] w-px bg-gradient-to-b from-transparent via-champagne/35 to-transparent lg:block" />
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />

      <div className="lux-container relative grid items-center gap-7 pb-10 sm:gap-10 md:pb-16 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10"
        >
          <p className="indian-ornament mb-4 inline-flex text-[10px] font-bold uppercase tracking-[0.26em] text-champagne sm:text-xs sm:tracking-[0.32em]">
            Royal Indian bridal house
          </p>
          <h1 className="max-w-5xl font-display text-[3.05rem] font-semibold leading-[0.9] text-ivory sm:text-6xl md:text-8xl xl:text-[8.6rem]">
            Jewellery made for <span className="gold-text">saat pheras, nikkah</span> and royal receptions.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-mist sm:text-base md:mt-7 md:text-lg md:leading-8">
            Haji Jewellers curates 22K gold harams, kundan-inspired bridal sets, diamond rings,
            bangles, pendants, and reception jewellery with the warmth of Indian tradition.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <Link to="/collections" className="lux-button bg-champagne text-ink hover:bg-ivory">
              Explore Collection <FiArrowUpRight />
            </Link>
            <Link to="/contact" className="lux-button border border-champagne/30 text-champagne hover:bg-champagne/10">
              <FiCalendar /> Book Appointment
            </Link>
          </div>

          <div className="mt-6 grid max-w-2xl grid-cols-3 gap-2 text-center sm:mt-12 sm:gap-3">
            {[
              ['22K', 'Gold craft'],
              ['Rs.2L+', 'Jewellery edit'],
              ['Private', 'Bridal styling'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-champagne/20 bg-maroon/25 p-3 backdrop-blur sm:p-4">
                <p className="font-display text-2xl font-semibold text-champagne sm:text-3xl">{value}</p>
                <p className="mt-1 text-[9px] font-bold uppercase leading-4 tracking-[0.12em] text-sand sm:text-[11px] sm:tracking-[0.16em]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-full bg-champagne/20 blur-3xl md:-inset-10" />
          <div className="absolute -right-8 top-10 h-28 w-28 rounded-full border border-champagne/25 bg-ruby/20 blur-sm" />

          <div className="absolute -left-6 top-[42%] z-20 hidden rounded-[24px] border border-champagne/20 bg-black/70 p-5 shadow-glass backdrop-blur-xl md:block lg:-left-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sand">Bridal sets from</p>
            <p className="mt-1 font-display text-4xl font-semibold text-champagne">Rs.9.45L</p>
          </div>

          <div className="absolute -right-2 top-20 z-20 hidden max-w-[190px] rounded-[26px] border border-champagne/20 bg-maroon/55 p-5 shadow-glass backdrop-blur-xl md:block">
            <FiCheckCircle className="mb-3 text-2xl text-champagne" />
            <p className="text-xs font-bold uppercase leading-5 tracking-[0.16em] text-ivory">
              Gold purity and diamond guidance
            </p>
          </div>

          <div
            ref={jewelRef}
            className="bridal-frame relative mx-auto max-w-[360px] overflow-hidden rounded-t-[190px] rounded-b-[30px] border border-champagne/25 bg-white/[0.04] p-3 shadow-gold sm:max-w-[430px] md:max-w-[560px] md:rounded-t-[280px] md:rounded-b-[42px] md:p-4"
          >
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1300&q=90"
              alt="Indian bridal jewellery by Haji Jewellers"
              className="h-[310px] w-full rounded-t-[175px] rounded-b-[22px] object-cover sm:h-[380px] md:h-[600px] md:rounded-t-[260px] md:rounded-b-[30px]"
            />
            <div className="absolute inset-3 rounded-t-[175px] rounded-b-[22px] bg-gradient-to-t from-black/75 via-transparent to-maroon/15 md:inset-4 md:rounded-t-[260px] md:rounded-b-[30px]" />
            <div className="absolute bottom-5 left-5 right-5 z-10 rounded-[18px] border border-champagne/20 bg-black/65 p-4 backdrop-blur-xl md:bottom-8 md:left-10 md:right-8 md:rounded-[24px] md:p-5 lg:left-14">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-champagne md:text-[11px] md:tracking-[0.24em]">
                Featured bridal edit
              </p>
              <p className="mt-1 font-display text-2xl font-semibold text-ivory md:mt-2 md:text-3xl">
                Meher Kundan Bridal Set
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

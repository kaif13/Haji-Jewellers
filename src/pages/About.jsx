import SectionHeader from '../components/SectionHeader'

function About() {
  return (
    <main className="pt-28 sm:pt-32">
      <section className="lux-container grid items-center gap-10 pb-16 sm:pb-24 lg:grid-cols-2 lg:gap-12">
        <div>
          <SectionHeader
            align="left"
            eyebrow="About Haji Jewellers"
            title="A modern luxury house with old-world respect for jewellery."
            copy="The brand blends Dubai showroom sophistication with the ceremonial richness of Indian bridal adornment."
          />
          <div className="grid gap-5 text-sm leading-8 text-mist">
            <p>
              Haji Jewellers is designed around trust, patience, and presentation. The experience is consultative:
              clients compare pieces, understand quality details, and choose jewellery for meaningful occasions.
            </p>
            <p>
              From diamond rings and pendants to 22K gold necklaces, bridal sets, bangles, and harams, the website
              presents a premium showcase that encourages store visits and private appointments.
            </p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1200&q=85"
          alt="Luxury jewellery display"
          className="aspect-[4/5] h-auto w-full rounded-t-[999px] border border-champagne/20 object-cover shadow-gold sm:max-h-[620px]"
        />
      </section>
      <section className="bg-velvet py-16 sm:py-24">
        <div className="lux-container grid gap-6 md:grid-cols-3">
          {[
            ['01', 'Consultation first', 'A calmer buying experience built around styling, occasion, and comfort.'],
            ['02', 'Bridal heritage', 'Indian craft references are balanced with modern international restraint.'],
            ['03', 'Luxury presentation', 'Every touchpoint feels premium, from imagery and packaging to appointment flow.'],
          ].map(([number, title, copy]) => (
            <div key={title} className="glass-panel rounded-[24px] p-6 sm:rounded-[28px] sm:p-7">
              <p className="gold-text font-display text-5xl font-semibold sm:text-6xl">{number}</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ivory sm:mt-5">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-mist">{copy}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default About

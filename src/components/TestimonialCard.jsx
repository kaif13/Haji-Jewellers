import { FaQuoteLeft } from 'react-icons/fa6'

function TestimonialCard({ testimonial }) {
  return (
    <div className="glass-panel h-full rounded-[26px] p-7">
      <FaQuoteLeft className="mb-6 text-2xl text-champagne" />
      <p className="text-lg leading-8 text-ivory">{testimonial.quote}</p>
      <div className="mt-8 border-t border-champagne/15 pt-5">
        <p className="font-display text-2xl font-semibold text-ivory">{testimonial.name}</p>
        <p className="text-sm uppercase tracking-[0.18em] text-sand">{testimonial.location}</p>
      </div>
    </div>
  )
}

export default TestimonialCard

import { FaQuoteLeft } from 'react-icons/fa6'
import { FiMapPin, FiStar } from 'react-icons/fi'

function TestimonialCard({ testimonial }) {
  const initials = testimonial.name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <article className="group relative h-full overflow-hidden rounded-[26px] border border-champagne/20 bg-gradient-to-br from-maroon/55 via-velvet/80 to-black p-[1px] transition duration-500 hover:-translate-y-1 hover:border-champagne/45 hover:shadow-gold sm:rounded-[30px]">
      <div className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[25px] bg-black/65 p-6 backdrop-blur-xl sm:min-h-[330px] sm:rounded-[29px] sm:p-8">
        <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-champagne/10" />
        <FaQuoteLeft className="absolute right-7 top-6 text-6xl text-champagne/[0.08]" />

        <div className="relative flex gap-1 text-champagne" aria-label="Five star review">
          {[...Array(5)].map((_, index) => (
            <FiStar key={index} className="fill-current text-sm" />
          ))}
        </div>

        <blockquote className="relative mt-8 flex-1">
          <p className="font-display text-xl font-medium leading-8 text-ivory sm:text-2xl sm:leading-9">
            “{testimonial.quote}”
          </p>
        </blockquote>

        <div className="relative mt-8 flex items-center gap-4 border-t border-champagne/15 pt-6">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-champagne/35 bg-champagne/10 font-display text-lg font-semibold text-champagne">
            {initials}
          </div>
          <div>
            <p className="font-display text-xl font-semibold text-ivory">
              {testimonial.name}
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sand">
              <FiMapPin className="text-champagne" />
              {testimonial.location}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard

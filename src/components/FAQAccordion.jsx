import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'

const faqs = [
  ['Do you sell online?', 'This showcase is designed for enquiries, appointments, and store visits. Purchases are completed after consultation.'],
  ['Are diamonds certified?', 'Selected diamond jewellery is available with certification and quality documentation during purchase.'],
  ['Can bridal sets be customized?', 'Yes. Bridal pieces can be sized, restyled, and curated around sarees, lehengas, gowns, and ceremony needs.'],
  ['Do you serve customers outside Dubai?', 'The brand experience is suitable for Dubai, Qatar, Saudi Arabia, and India, with consultation-first service.'],
]

function FAQAccordion() {
  const [open, setOpen] = useState(0)
  const reduceMotion = useReducedMotion()

  return (
    <div className="mx-auto max-w-3xl divide-y divide-champagne/15 overflow-hidden rounded-[28px] border border-champagne/15 bg-white/[0.04]">
      {faqs.map(([question, answer], index) => (
        <div key={question}>
          <button
            type="button"
            onClick={() => setOpen(open === index ? -1 : index)}
            aria-expanded={open === index}
            className="flex w-full items-center justify-between gap-4 p-5 text-left sm:gap-6 sm:p-6"
          >
            <span className="font-display text-xl font-semibold text-ivory sm:text-2xl">{question}</span>
            <FiPlus className={`shrink-0 text-champagne transition motion-reduce:transition-none ${open === index ? 'rotate-45' : ''}`} />
          </button>
          <AnimatePresence initial={false}>
            {open === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.24 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm leading-7 text-mist sm:px-6 sm:pb-6">{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion

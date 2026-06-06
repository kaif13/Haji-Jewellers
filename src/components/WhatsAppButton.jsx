import { FaWhatsapp } from 'react-icons/fa6'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971500000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 grid h-[54px] w-[54px] place-items-center rounded-full border border-champagne/70 bg-gradient-to-br from-champagne via-oldgold to-ruby text-xl text-ivory shadow-[0_14px_45px_rgba(216,183,111,0.3)] transition duration-300 motion-reduce:transition-none sm:bottom-5 sm:right-5 sm:h-[58px] sm:w-[58px] sm:text-2xl md:hover:-translate-y-1 md:hover:scale-105 md:hover:shadow-[0_18px_55px_rgba(216,183,111,0.45)]"
    >
      <span className="absolute inset-[4px] rounded-full border border-ivory/20 bg-maroon/80" />
      <span className="absolute inset-0 -z-10 rounded-full border border-champagne/45 animate-ping opacity-20 motion-reduce:animate-none" />
      <FaWhatsapp className="relative z-10 drop-shadow-md transition duration-300 group-hover:scale-110 motion-reduce:transition-none" />
    </a>
  )
}

export default WhatsAppButton

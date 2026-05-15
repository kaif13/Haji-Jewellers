import { FaWhatsapp } from 'react-icons/fa6'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971500000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-[0_18px_60px_rgba(37,211,102,0.35)] transition hover:-translate-y-1"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsAppButton

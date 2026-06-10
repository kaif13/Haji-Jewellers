import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="border-t border-champagne/15 bg-black pb-16 sm:pb-0">
      <div className="lux-container grid gap-10 py-12 sm:py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="font-display text-4xl font-semibold text-ivory">
            Haji <span className="gold-text">Jewellers</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-mist">
            Premium bridal, diamond, and gold jewellery experiences for families
            who value trust, detail, and emotional craft.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-champagne">
            Explore
          </p>
          <div className="grid gap-3 text-sm text-mist">
            <Link to="/collections" className="hover:text-champagne">
              Collections
            </Link>
            <Link to="/about" className="hover:text-champagne">
              Brand Story
            </Link>
            <Link to="/contact" className="hover:text-champagne">
              Book Appointment
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-champagne">
            Visit
          </p>
          <p className="text-sm leading-7 text-mist">
            Dubai showroom appointments, private bridal styling, and WhatsApp
            enquiries.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              aria-label="Instagram"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-champagne/20 text-champagne transition hover:border-champagne/50 hover:bg-champagne hover:text-ink"
            >
              <FaInstagram />
            </a>
            <a
              aria-label="WhatsApp"
              href="https://wa.me/971500000000"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-champagne/20 text-champagne transition hover:border-champagne/50 hover:bg-champagne hover:text-ink"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-champagne/10 px-4 py-5 text-center text-[10px] uppercase leading-5 tracking-[0.14em] text-sand sm:text-xs sm:tracking-[0.18em]">
        Haji Jewellers. Designed by{" "}
        <a
          href="https://kaifwebstudio.in"
          target="_blank"
          rel="noreferrer"
          className="text-champagne transition hover:text-ivory"
        >
          kaifwebstudio
        </a>
      </div>
    </footer>
  );
}

export default Footer;

import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiSearch, FiX } from 'react-icons/fi'

const links = [
  ['Home', '/'],
  ['Collections', '/collections'],
  ['About', '/about'],
  ['Contact', '/contact'],
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = ({ isActive }) =>
    `relative text-xs font-bold uppercase tracking-[0.2em] transition hover:text-champagne ${
      isActive ? 'text-champagne' : 'text-ivory/78'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${
        scrolled ? 'border-b border-champagne/15 bg-ink/82 shadow-glass backdrop-blur-2xl' : 'bg-transparent'
      }`}
    >
      <nav className="lux-container flex h-20 items-center justify-between">
        <Link to="/" className="font-display text-3xl font-semibold tracking-wide text-ivory">
          Haji <span className="gold-text">Jewellers</span>
        </Link>
        <div className="hidden items-center gap-9 lg:flex">
          {links.map(([label, path]) => (
            <NavLink key={label} to={path} className={navClass}>
              {label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="grid h-11 w-11 place-items-center rounded-full border border-champagne/15 bg-white/[0.04] text-ivory transition hover:border-champagne/50 hover:text-champagne"
          >
            <FiSearch />
          </button>
          <Link
            to="/contact"
            className="hidden rounded-full border border-champagne/30 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-champagne transition hover:bg-champagne hover:text-ink md:inline-flex"
          >
            Appointment
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full border border-champagne/15 bg-white/[0.04] text-ivory lg:hidden"
          >
            <FiMenu />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/96 p-5 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl font-semibold text-ivory">Haji Jewellers</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-champagne/20 text-sm text-champagne"
              >
                <FiX />
              </button>
            </div>
            <div className="mt-12 grid gap-5">
              {links.map(([label, path]) => (
                <NavLink
                  key={label}
                  to={path}
                  onClick={() => setOpen(false)}
                  className="font-display text-[2.25rem] font-semibold leading-tight text-ivory transition hover:text-champagne"
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar

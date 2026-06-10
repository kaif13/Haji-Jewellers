import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  ['Home', '/'],
  ['Collections', '/collections'],
  ['About', '/about'],
  ['Contact', '/contact'],
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const navClass = ({ isActive }) =>
    `relative text-xs font-bold uppercase tracking-[0.2em] transition hover:text-champagne ${
      isActive ? 'text-champagne' : 'text-ivory/78'
    }`

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-champagne/15 bg-ink/82 shadow-glass backdrop-blur-2xl"
    >
      <nav className="lux-container flex h-20 items-center justify-between">
        <Link to="/" className="font-display text-[1.7rem] font-semibold tracking-wide text-ivory sm:text-3xl">
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
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-50 overflow-y-auto bg-ink/96 p-5 backdrop-blur-xl lg:hidden"
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
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.3, delay: reduceMotion ? 0 : 0.05 }}
              className="mt-12 grid gap-5"
            >
              {links.map(([label, path]) => (
                <NavLink
                  key={label}
                  to={path}
                  onClick={() => setOpen(false)}
                  className="font-display text-[2rem] font-semibold leading-tight text-ivory transition hover:text-champagne sm:text-[2.25rem]"
                >
                  {label}
                </NavLink>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar

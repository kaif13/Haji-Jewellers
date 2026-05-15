import { FiClock, FiMapPin, FiMessageCircle, FiPhone } from 'react-icons/fi'
import SectionHeader from '../components/SectionHeader'

function Contact() {
  return (
    <main className="pt-32">
      <section className="lux-container grid gap-10 pb-24 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Book appointment"
            title="Visit the showroom or begin with a private enquiry."
            copy="Use this frontend form as a visual appointment flow. It does not send backend data yet."
          />
          <div className="grid gap-4">
            <ContactRow icon={<FiMapPin />} title="Showroom" copy="Dubai jewellery district, appointment-first experience" />
            <ContactRow icon={<FiPhone />} title="Phone" copy="+971 50 000 0000" />
            <ContactRow icon={<FiClock />} title="Hours" copy="Daily private viewing slots available" />
            <ContactRow icon={<FiMessageCircle />} title="WhatsApp" copy="Fast product enquiries and bridal consultations" />
          </div>
        </div>
        <form className="glass-panel rounded-[32px] p-7 md:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full name" placeholder="Your name" />
            <Field label="Phone or WhatsApp" placeholder="+971..." />
            <Field label="Occasion" placeholder="Wedding, gift, reception" />
            <Field label="Preferred category" placeholder="Diamond, gold, bridal" />
          </div>
          <label className="mt-5 block">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-champagne">Message</span>
            <textarea
              rows="6"
              placeholder="Tell us what you would like to view..."
              className="w-full rounded-2xl border border-champagne/15 bg-black/30 px-4 py-4 text-sm text-ivory outline-none transition placeholder:text-mist/45 focus:border-champagne"
            />
          </label>
          <button type="button" className="lux-button mt-7 w-full bg-champagne text-ink">
            Request Appointment
          </button>
          <p className="mt-4 text-center text-xs leading-6 text-sand">
            Demo frontend only. Connect this form to your CRM or WhatsApp API later.
          </p>
        </form>
      </section>
    </main>
  )
}

function Field({ label, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-champagne">{label}</span>
      <input
        placeholder={placeholder}
        className="h-13 w-full rounded-2xl border border-champagne/15 bg-black/30 px-4 py-4 text-sm text-ivory outline-none transition placeholder:text-mist/45 focus:border-champagne"
      />
    </label>
  )
}

function ContactRow({ icon, title, copy }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-champagne/15 bg-white/[0.04] p-5">
      <span className="mt-1 text-2xl text-champagne">{icon}</span>
      <div>
        <p className="font-display text-2xl font-semibold text-ivory">{title}</p>
        <p className="text-sm leading-6 text-mist">{copy}</p>
      </div>
    </div>
  )
}

export default Contact

import { useState } from 'react'

const services = [
  'Custom Software Development',
  'Enterprise Application Development',
  'Cloud Engineering',
  'AI and Machine Learning',
  'Mobile Development',
  'Product Development',
  'IT Consulting',
]

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: services[0],
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: '' }))
    }
  }

  const validateForm = () => {
    const nextErrors = {}
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

    if (!formData.name.trim()) nextErrors.name = 'Name is required.'
    if (!formData.company.trim()) nextErrors.company = 'Company is required.'
    if (!formData.email.trim()) nextErrors.email = 'Email is required.'
    else if (!emailPattern.test(formData.email.trim())) nextErrors.email = 'Enter a valid email address.'
    if (!formData.phone.trim()) nextErrors.phone = 'Phone number is required.'
    if (!formData.message.trim()) nextErrors.message = 'Message is required.'

    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setMessage('')
    setMessageType('')

    const nextErrors = validateForm()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setErrors({})
    setLoading(true)

    try {
      const scriptUrl = import.meta.env.VITE_SCRIPT_URL

      if (!scriptUrl) {
        throw new Error('VITE_SCRIPT_URL is not set')
      }

      const params = new URLSearchParams()
      params.append('name', formData.name)
      params.append('email', formData.email)
      params.append('company', formData.company)
      params.append('phone', formData.phone)
      params.append('serviceInterest', formData.service)
      params.append('projectType', formData.service)
      params.append('goals', formData.message)

      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: params,
      })

      const responseText = await response.text()
      let result = { success: response.ok, message: 'Form submitted successfully.' }

      if (responseText.trim()) {
        try {
          result = JSON.parse(responseText)
        } catch {
          result = { success: response.ok, message: responseText.trim() }
        }
      }

      if (response.ok && result.success !== false) {
        setMessage(result.message || 'Form submitted successfully.')
        setMessageType('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: services[0],
          message: '',
        })
      } else {
        setMessage(result?.message || 'An error occurred')
        setMessageType('error')
      }
    } catch (error) {
      setMessage('Error submitting form: ' + error.message)
      setMessageType('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="border-t border-slate-200 bg-white py-24" id="contact">
      <div className="site-container grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="reveal-left rounded-lg border border-slate-200 bg-slate-50 p-8 shadow-xl shadow-blue-950/5">
          <span className="mb-4 inline-flex rounded-lg bg-blue-50 px-3 py-2 font-label-sm text-label-sm uppercase text-blue-700">
            Contact
          </span>
          <h2 className="mb-5 font-h2 text-h2 text-on-surface">Start your enterprise technology conversation.</h2>
          <p className="mb-8 max-w-2xl font-body-lg text-body-lg text-secondary">
            Tell us what you want to build, modernize, or automate. Our team will respond with the next practical step.
          </p>

          <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-2 font-label-md text-label-md text-slate-700">
              Name
              <input className={`rounded-lg border px-4 py-3 font-body-md outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'}`} name="name" value={formData.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} autoComplete="name" />
              {errors.name && <span className="text-sm text-red-600">{errors.name}</span>}
            </label>

            <label className="flex flex-col gap-2 font-label-md text-label-md text-slate-700">
              Email
              <input className={`rounded-lg border px-4 py-3 font-body-md outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'}`} name="email" type="email" value={formData.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} autoComplete="email" />
              {errors.email && <span className="text-sm text-red-600">{errors.email}</span>}
            </label>

            <label className="flex flex-col gap-2 font-label-md text-label-md text-slate-700">
              Company
              <input className={`rounded-lg border px-4 py-3 font-body-md outline-none focus:ring-2 ${errors.company ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'}`} name="company" value={formData.company} onChange={handleChange} aria-invalid={Boolean(errors.company)} autoComplete="organization" />
              {errors.company && <span className="text-sm text-red-600">{errors.company}</span>}
            </label>

            <label className="flex flex-col gap-2 font-label-md text-label-md text-slate-700">
              Phone
              <input className={`rounded-lg border px-4 py-3 font-body-md outline-none focus:ring-2 ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'}`} name="phone" type="tel" value={formData.phone} onChange={handleChange} aria-invalid={Boolean(errors.phone)} autoComplete="tel" />
              {errors.phone && <span className="text-sm text-red-600">{errors.phone}</span>}
            </label>

            <label className="flex flex-col gap-2 font-label-md text-label-md text-slate-700 md:col-span-2">
              Service
              <select className="rounded-lg border border-slate-200 bg-white px-4 py-3 font-body-md outline-none focus:ring-2 focus:ring-blue-500" name="service" value={formData.service} onChange={handleChange}>
                {services.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 font-label-md text-label-md text-slate-700 md:col-span-2">
              Message
              <textarea className={`min-h-36 rounded-lg border px-4 py-3 font-body-md outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'}`} name="message" value={formData.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} />
              {errors.message && <span className="text-sm text-red-600">{errors.message}</span>}
            </label>

            {message && (
              <div className={`rounded-lg p-3 text-sm font-semibold md:col-span-2 ${messageType === 'success' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                {message}
              </div>
            )}

            <button className="btn-ripple rounded-lg bg-primary px-6 py-4 font-label-md text-on-primary shadow-lg shadow-blue-950/10 transition-all hover:-translate-y-0.5 hover:bg-blue-700 disabled:opacity-50 md:col-span-2" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Book a Consultation'}
            </button>
          </form>
        </div>

        <aside className="reveal-right rounded-lg bg-primary p-8 text-white shadow-2xl shadow-blue-950/15">
          <h3 className="mb-6 font-h3 text-2xl">Enterprise contact desk</h3>
          <div className="space-y-5 text-body-md text-slate-200">
            <p><strong className="text-white">Office:</strong> Namakkal, Tamil Nadu</p>
            <p><strong className="text-white">Email:</strong> <a className="hover:underline" href="mailto:info@durozen.in">info@durozen.in</a></p>
            <p><strong className="text-white">Phone:</strong> <a className="hover:underline" href="tel:+918122339694">+(91) 81223 39694</a></p>
            <p><strong className="text-white">Business hours:</strong> Monday to Saturday, 9:30 AM - 6:30 PM IST</p>
          </div>

          <div className="mt-8 rounded-lg border border-white/10 bg-white/10 p-5">
            <p className="font-label-sm text-label-sm uppercase text-cyan-100">Map</p>
            <iframe
              allowFullScreen
              className="mt-4 h-64 w-full rounded-lg border-0 bg-slate-950/35"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.6576058538906!2d78.21522499999999!3d11.148956300000032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babcbd8fe6408d7%3A0x70d17da5da2fc025!2sDurozen%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1781117437241!5m2!1sen!2sin"
              title="Durozen Technologies Private Limited location map"
            />
          </div>

          <div className="mt-8 rounded-lg border border-white/10 bg-white/10 p-5">
            <p className="font-label-sm text-label-sm uppercase text-cyan-100">Social media</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                ['LinkedIn', 'https://www.linkedin.com/company/durozen-technologies/'],
                ['Instagram', 'https://www.instagram.com/durozen_technologies/'],
              ].map(([item, href]) => (
                <a key={item} className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10" href={href} rel="noreferrer" target="_blank">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default ContactSection

import { Link } from 'react-router-dom'
import DurozenLogo from '../assets/Durozen.png'

const columns = [
  {
    title: 'Company',
    links: [
      ['About', '#about'],
      ['Case Studies', '#case-studies'],
      ['Contact', '#contact'],
    ],
  },
  {
    title: 'Services',
    links: [
      ['Custom Software', '#services'],
      ['Cloud Engineering', '#services'],
      ['AI Solutions', '#services'],
      ['Product Development', '#services'],
    ],
  },
  {
    title: 'Resources',
    links: [
      ['Process', '#process'],
      ['Technologies', '#technologies'],
      ['Solutions', '#solutions'],
      // ['Testimonials', '#testimonials'],
    ],
  },
  {
    title: 'Contact',
    links: [
      ['info@durozen.in', 'mailto:info@durozen.in'],
      ['+(91) 81223 39694', 'tel:+918122339694'],
      ['Namakkal, Tamil Nadu', '#contact'],
      ['Book Consultation', '#contact'],
      ['LinkedIn', 'https://www.linkedin.com/company/durozen-technologies/'],
      ['Instagram', 'https://www.instagram.com/durozen_technologies/'],
    ],
  },
]

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="site-container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.9fr]">
          <div className="reveal">
            <div className="mb-5 flex items-center gap-3">
              <img
                alt="Durozen logo"
                className="h-9 w-auto"
                src={DurozenLogo}
              />
              <span className="font-h3 text-xl font-bold">Durozen</span>
            </div>
            <p className="max-w-sm text-body-sm text-slate-400">
              Premium IT services and enterprise software delivery for businesses building scalable digital platforms.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title} className="reveal">
                <h3 className="mb-4 font-h3 text-base">{column.title}</h3>
                <div className="grid gap-3">
                  {column.links.map(([label, href]) => (
                    <a key={label} className="text-body-sm text-slate-400 transition-colors hover:text-white" href={href} rel={href.startsWith('http') ? 'noreferrer' : undefined} target={href.startsWith('http') ? '_blank' : undefined}>
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-body-sm text-slate-400 md:flex-row">
          <p>Copyright 2026 Durozen. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link className="hover:text-white" to="/legal">Privacy Policy</Link>
            <Link className="hover:text-white" to="/legal">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

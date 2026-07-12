import { useEffect, useState } from 'react'

function PageEnhancements() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight

      setProgress(pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0)
      setVisible(scrollTop > 560)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className="fixed left-0 top-0 z-[60] h-1 bg-cyan-400 transition-all" style={{ width: `${progress}%` }} />
      <button
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-lg bg-primary text-white shadow-lg shadow-blue-950/20 transition-all hover:-translate-y-1 hover:bg-blue-700 ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
          <path d="m6 15 6-6 6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        </svg>
      </button>
    </>
  )
}

export default PageEnhancements

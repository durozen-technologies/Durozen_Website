import { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import LegalDocuments from '../components/LegalDocuments'

function LegalPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="overflow-x-hidden bg-surface-main text-on-surface font-body-md">
      <Navbar />
      <div className="pt-16">
        <LegalDocuments />
      </div>
      <Footer />
    </div>
  )
}

export default LegalPage

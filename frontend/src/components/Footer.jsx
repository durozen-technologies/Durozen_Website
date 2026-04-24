function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="site-container flex flex-col items-center justify-between gap-8 py-12 md:flex-row">
        <div className="reveal flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img
              alt="Durozen logo"
              className="h-6"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4HAUSM4ZKAjYmeX4-O3mXPtEi9rZKgWGf_NSMULKb88krHPvyJYUrT7G3gmWIX9jZ1TCqkADgDXVrkumsfqeF3X8Ot6VSF9PDbG4cdA1vIzkaBIAPv9_GKEkuCU4tiCRZGWRVjqaVJ3B5bVHVB36RYaDwu2eG2F1Buo4juXhsVSg1krBmBqQmUPhSyxQR1IyStRPMvBWQSlP_P1j4T7YSUOHqCsRN6JbY7mjnbeBAf4ZI3Yl2oOHPsreSSMJdtoFgtUrgxPnboYk"
            />
            <span className="font-h3 text-lg font-bold text-slate-900">Durozen</span>
          </div>
          <p className="max-w-xs font-label-sm text-label-sm uppercase tracking-tight text-slate-500">
            Copyright 2025 Durozen. All rights reserved.
          </p>
        </div>

        <div className="reveal flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-slate-500 font-label-md">
          <a className="underline transition-all duration-200 hover:text-slate-900" href="#services">Services</a>
          <a className="underline transition-all duration-200 hover:text-slate-900" href="#industries">Industries</a>
          <a className="underline transition-all duration-200 hover:text-slate-900" href="#contact">Contact</a>
          <a className="underline transition-all duration-200 hover:text-slate-900" href="#">LinkedIn</a>
          <a className="underline transition-all duration-200 hover:text-slate-900" href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

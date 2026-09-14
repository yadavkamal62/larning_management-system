import React from 'react'

const Footer = () => {
  return (
    
  
    <footer className="border-t border-white/10 bg-red-950 px-6 py-10 text-center text-white sm:mb-5 sm:px-10 sm:text-left lg:px-16">
      <div className="mx-auto   grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <img src="/LOGO1.png" alt="Logo" className="mx-auto mt-5 h-14 w-14 rounded-full object-cover sm:mx-0" />
          <h2 className="text-xl font-semibold">Learn without limits</h2>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
            Build practical skills with expert lessons and a community that helps you keep growing.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Pricing</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li><a href="#free" className="transition hover:text-amber-300">Free plan</a></li>
            <li><a href="#pro" className="transition hover:text-amber-300">Pro plan</a></li>
            <li><a href="#teams" className="transition hover:text-amber-300">For teams</a></li>
            <li><a href="#compare" className="transition hover:text-amber-300">Compare plans</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Resources</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li><a href="#courses" className="transition hover:text-amber-300">All courses</a></li>
            <li><a href="#blog" className="transition hover:text-amber-300">Learning blog</a></li>
            <li><a href="#help" className="transition hover:text-amber-300">Help center</a></li>
            <li><a href="#faq" className="transition hover:text-amber-300">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Social media</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li><a href="#instagram" className="transition hover:text-amber-300">Instagram</a></li>
            <li><a href="#youtube" className="transition hover:text-amber-300">YouTube</a></li>
            <li><a href="#linkedin" className="transition hover:text-amber-300">LinkedIn</a></li>
            <li><a href="#twitter" className="transition hover:text-amber-300">X / Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5 text-sm text-slate-500">
        <p className="text-center sm:text-left">© 2026 Learn without limits. All rights reserved.</p>
      </div>
    </footer>
)}

export default Footer

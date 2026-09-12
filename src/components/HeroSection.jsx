import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

const HeroSection = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <div className='relative flex min-h-screen flex-col  overflow-hidden bg-[radial-gradient(circle_at_center,#2c0b47_0%,#150424_40%,#08010f_75%,#000000_100%)] text-white'>
      <div>
        <nav className='mx-4 mt-4 flex h-20 items-center justify-between rounded-full bg-white/10 px-6 z-10'>
          <img src="/LOGO1.png" alt="Logo" className="h-15 w-15 rounded-full object-cover" />
          <div className="hidden items-center md:flex">
          <ul className='flex items-center cursor-pointer justify-center gap-10 pr-6 font-semibold text-red-500'>
                <li>Home</li>
                <li>About</li>
                <li>Courses</li>
                <li>servicse</li>

            </ul>
            <button
            type="button"
            className="cursor-pointer rounded-full bg-amber-400 px-3 py-2 text-sm font-semibold text-amber-950 shadow-lg shadow-amber-950/30 transition hover:bg-amber-300 hover:shadow-amber-400/20 focus:outline-none focus:ring-2 focus:ring-amber-300 "
            onClick={() => navigate('/login')}>
            SignUp
          </button>
          </div>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="rounded-lg p-2 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <img src="/hamburger.png" alt="" className="h-8 w-8 object-contain" />
          </button>
        </nav>

        {isMenuOpen && (
          <div className="mx-4 mt-2 rounded-2xl bg-white p-5 text-slate-900 shadow-xl md:hidden">
            <ul className="space-y-4 font-semibold">
              <li>Home</li>
              <li>About</li>
              <li>Courses</li>
              <li>Services</li>
            </ul>
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="mt-5 w-full rounded-full bg-amber-400 px-4 py-2 font-semibold text-amber-950"
            >
              Sign Up
            </button>
          </div>
        )}

      </div>
      <section className="flex w-full flex-1 flex-col items-center text-white md:flex-row">
        <div className="w-full px-8 py-20 md:w-1/2 md:px-12 lg:px-20">
          <div className="max-w-xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Learn without limits
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Make your future bright by joining us
          </h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-slate-300 md:text-lg">
            Unlock your potential with an educational experience designed for the modern world. We
            combine expert instruction, dynamic interactive coursework, and a global community to
            help you master new skills with confidence.
          </p>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="mt-8 rounded-full bg-amber-400 px-6 py-3  cursor-pointer font-semibold text-amber-950 shadow-lg shadow-amber-950/30 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-purple-950"
          >
            Start learning
          </button>
          </div>
        </div>
        <div className="flex min-h-[320px] w-full items-center justify-center p-6 md:min-h-full md:w-1/2 md:p-10">
            <img
              src="/hero image.jpg"
              alt="Students learning together"
              className="h-full max-h-[560px] w-full rounded-3xl object-cover shadow-2xl"
            />
        </div>
      </section>

      <Footer/>
      </div>
    
  )
}

export default HeroSection

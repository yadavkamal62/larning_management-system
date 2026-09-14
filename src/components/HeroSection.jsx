import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoHome } from "react-icons/io5"
import { HiMiniAcademicCap } from "react-icons/hi2";
import { HiOutlineMenu } from "react-icons/hi";

import { IoSettingsSharp } from "react-icons/io5";
import Footer from './Footer'

const HeroSection = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
     <>
    <div className='relative flex min-h-screen flex-col overflow-hidden bg-[radial-gradient(circle_at_center,#fb923c_0%,#db2777_40%,#4c0519_75%,#000000_100%)]

 text-white'>
      <div>
        <nav className='z-10 mx-3 mt-3 flex h-16 items-center justify-between rounded-full bg-white/10 px-4 sm:mx-4 sm:mt-4 sm:h-20 sm:px-6'>
          <h1 className="h-12 w-12  font-bold  items-center  text-white text-4xl font-serif rounded-full object-cover sm:h-15 sm:w-15"> FRND</h1>
          <div className="hidden items-center md:flex">
            <ul className='flex items-center cursor-pointer justify-center gap-10 pr-6 font-semibold '>
              <li className="flex items-center gap-2">
                <IoHome className="text-xl" />
                <span>Home</span>
              </li>

              <li className='flex items-center gap-2'>
                <HiMiniAcademicCap className='text-xl' />
                <span>courses</span>
              </li>
              <li className='flex items-center gap-2 '>
                <IoSettingsSharp />
                <span>Services</span></li>
            </ul>
            <button
              type="button"
              className="cursor-pointer rounded-full bg-amber-400 px-3 py-2 text-sm font-semibold text-amber-950 shadow-lg shadow-amber-950/30 transition hover:bg-amber-300 hover:shadow-amber-400/20 focus:outline-none focus:ring-2 focus:ring-amber-300"
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
            <div className=''><HiOutlineMenu /> </div>
          </button>
        </nav>

        {isMenuOpen && (
          <div className="mx-4 mt-2 rounded-2xl bg-white p-5 text-red-400 shadow-xl md:hidden">
            <ul className="space-y-4 font-semibold">
              <li className="flex items-center gap-2">
                <IoHome className="text-xl" />
                <span>Home</span>
              </li>
              <li className='flex items-center gap-2'>
                <HiMiniAcademicCap className='text-xl' />
                <span>courses</span>
              </li>
              <li className='flex items-center gap-2 '>
                <IoSettingsSharp />
                <span>Services</span></li>

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
        <div className="w-full px-5 py-16 sm:px-8 sm:py-20 md:w-1/2 md:px-12 lg:px-20">
          <div className="max-w-xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Learn without limits
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Your next favorite memory is just a swipe away
            </h1>
            <p className="mt-7 max-w-lg text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-lg">
              The best things that ever happened to you
              started with "let's just see.
              "
              More to connect on. More to explore.
              More possibilities than you could even
              expect.
            </p>
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="mt-8 rounded-full bg-amber-400 px-6 py-3 cursor-pointer font-semibold text-amber-950 shadow-lg shadow-amber-950/30 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-purple-950"
            >
              create account
            </button>
          </div>
        </div>
        

      </section>

      {/* <Footer/> */}
    </div>
    <div className='flex min-h-screen items-center justify-center bg-white px-5 py-16 text-center text-4xl sm:px-8 sm:text-6xl md:text-8xl'>
      
          <div className='font-serif font-extrabold text-red-500' >
            <h1>you + one friend</h1>
          <h1>Them + one friend</h1>
          <p>first dates  hit different with friends</p>
          </div>

        </div>
        <section>
          <div className='flex min-h-screen flex-wrap items-start gap-6 bg-red-400 p-5 sm:p-8'>
            <p className='basis-full text-center text-3xl font-semibold text-white sm:text-2xl md:text-4xl'>
             Your safety comes first.
             Match chat and meets,
             with more confidents

            </p>
            <div className='min-h-100 min-w-[min(100%,16rem)] flex-1 rounded-2xl bg-white p-6'>
<p className='font-bold text-3xl'>Connect confidently</p>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iYCb5DY6uBnxopEkRvlltLNejiEfv9_xXXlK-L4dZg&s=10" alt="logo" />


            </div>
            <div className='min-h-100 min-w-[min(100%,16rem)] flex-1 rounded-2xl bg-white p-6'>
              <p className='font-bold text-3xl'>Chat respectFully</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYqFnAg6pN_6sA9fNb5KRZuj5dwG4F6OIdyYNPY8UXw&s=10" alt="logo" />
            </div>
            <div className='min-h-100 min-w-[min(100%,16rem)] flex-1 rounded-2xl bg-white p-6'>
              <p className='font-bold text-3xl'>Stay in control</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQalqdy7EKIaZ3lv_i_zP6jIRKn5fx6AVw_D17Ayr4jvg&s=10" alt="img" />
            </div>
            <div className='min-h-100 min-w-[min(100%,16rem)] flex-1 rounded-2xl bg-white p-6'>
              <p className='font-bold text-3xl'>Meet safely</p>
              <img src="https://png.pngtree.com/png-vector/20250527/ourmid/pngtree-blue-security-shield-icon-png-image_16390521.png" alt="" />
            </div>
          </div>
        </section>
        <Footer/>
       </>
  )
}

export default HeroSection
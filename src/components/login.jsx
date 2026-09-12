import { useState } from 'react'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isSignIn, setIsSignIn] = useState(true)

  const toggleForm = () => {
    setIsSignIn((prev) => !prev)
    setShowPassword(false) // Reset password visibility on toggle
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSignIn) {
      
    } else {
     
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-950 via-slate-950 to-amber-950 px-6 py-12 [perspective:1000px]">
      
      <div
          className={`relative min-h-[560px] w-full max-w-md transition-transform duration-700 [transform-style:preserve-3d] ${
          !isSignIn ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        
        <form
          onSubmit={handleSubmit}
          className="min-h-[560px] w-full space-y-6 rounded-2xl border border-white/10 bg-slate-900/90 p-8 shadow-2xl backdrop-blur [backface-visibility:hidden]"
        >
          <div className="space-y-2 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Welcome back
            </p>
            <h1 className="text-3xl font-semibold text-white">Sign In</h1>
            <p className="text-sm text-slate-400">
              Enter your details to continue.
            </p>
          </div>

          <div className="space-y-4">
            {/* Username */}
            <div className="space-y-2">
              <label htmlFor="signin-username" className="text-sm font-medium text-slate-200">
                Username
              </label>
              <input
                id="signin-username"
                name="username"
                type="text"
                placeholder="Username"
                autoComplete="username"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="signin-password" className="text-sm font-medium text-slate-200">
                Password
              </label>
              <div className="relative">
                <input
                  id="signin-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 pr-20 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-amber-400 hover:text-amber-300"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-full bg-amber-400 px-4 py-3 font-semibold text-amber-950 shadow-lg shadow-amber-950/30 transition hover:bg-amber-300 hover:shadow-amber-400/20 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Sign In
          </button>

          <p
            className="cursor-pointer text-center text-sm text-slate-300 transition hover:text-white hover:underline"
            onClick={toggleForm}
          >
            New user? <span className="text-amber-400 font-medium">Sign Up Now</span>
          </p>
        </form>

        
        <form
          onSubmit={handleSubmit}
          className="absolute inset-0 min-h-[560px] w-full space-y-5 rounded-2xl border border-white/10 bg-slate-900/90 p-8 shadow-2xl backdrop-blur [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <div className="space-y-1 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Get Started
            </p>
            <h1 className="text-3xl font-semibold text-white">Create Account</h1>
            <p className="text-sm text-slate-400">
              Fill in your information below.
            </p>
          </div>

          <div className="space-y-3">
        
            <div className="space-y-1">
              <label htmlFor="signup-name" className="text-sm font-medium text-slate-200">
                Full Name
              </label>
              <input
                id="signup-name"
                name="fullName"
                type="text"
                placeholder="John Doe"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            
            <div className="space-y-1">
              <label htmlFor="signup-username" className="text-sm font-medium text-slate-200">
                Username
              </label>
              <input
                id="signup-username"
                name="username"
                type="text"
                placeholder="Username"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            
            <div className="space-y-1">
              <label htmlFor="signup-password" className="text-sm font-medium text-slate-200">
                Password
              </label>
              <div className="relative">
                <input
                  id="signup-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 pr-20 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-amber-400 hover:text-amber-300"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-full bg-amber-400 px-4 py-3 font-semibold text-amber-950 shadow-lg shadow-amber-950/30 transition hover:bg-amber-300 hover:shadow-amber-400/20 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Sign Up
          </button>

          <p
            className="cursor-pointer text-center text-sm text-slate-300 transition hover:text-white hover:underline"
            onClick={toggleForm}
          >
            Already registered? <span className="text-amber-400 font-medium">Sign In Now</span>
          </p>
        </form>
      </div>
    </main>
  )
}

export default Login
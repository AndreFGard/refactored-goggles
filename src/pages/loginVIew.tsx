"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function LoginView() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    // Add login logic here
    navigate('/interests') // Navigate to interests selection after login
  }

  const handleSignUpClick = () => {
    navigate('/signup')
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-[#111811] text-white font-sans justify-between">
      <div>
        {/* Hero Image Section */}
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#111811] @[480px]:rounded-xl min-h-80"
              style={{
                backgroundImage: `url("/placeholder.svg?height=320&width=480")`,
              }}
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
          Connect with Your Campus
        </h2>

        {/* Email Input */}
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#293829] focus:border-none h-14 placeholder:text-[#9db89d] p-4 text-base font-normal leading-normal"
            />
          </label>
        </div>

        {/* Password Input */}
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#293829] focus:border-none h-14 placeholder:text-[#9db89d] p-4 text-base font-normal leading-normal"
            />
          </label>
        </div>

        {/* Institutional Email Note */}
        <p className="text-[#9db89d] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
          An institutional email is required for registration.
        </p>

        {/* Login Button */}
        <div className="flex px-4 py-3">
          <button 
            onClick={handleLogin}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#19e519] text-[#111811] text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Log In</span>
          </button>
        </div>

        {/* Sign Up Link */}
        <p 
          onClick={handleSignUpClick}
          className="text-[#9db89d] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline cursor-pointer"
        >
          {"Don't have an account? Sign up"}
        </p>
      </div>

      {/* Bottom Spacer */}
      <div>
        <div className="h-5 bg-[#111811]" />
      </div>
    </div>
  )
}

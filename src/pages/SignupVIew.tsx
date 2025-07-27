"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { HelpCircle } from "lucide-react"

export function SignUpPage() {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSignUp = () => {
    // Add signup logic here
    navigate('/interests') // Navigate to interests selection after signup
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-[#111811] text-white font-sans justify-between">
      <div>
        {/* Header with Help Icon */}
        <div className="flex items-center bg-[#111811] p-4 pb-2 justify-end">
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <HelpCircle size={24} />
            </button>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">
          Create an account
        </h1>

        {/* Full Name Input */}
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#293829] focus:border-none h-14 placeholder:text-[#9db89d] p-4 text-base font-normal leading-normal"
            />
          </label>
        </div>

        {/* University Email Input */}
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              type="email"
              placeholder="University email"
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

        {/* Confirm Password Input */}
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#293829] focus:border-none h-14 placeholder:text-[#9db89d] p-4 text-base font-normal leading-normal"
            />
          </label>
        </div>

        {/* Sign up with Google Button */}
        <div className="flex px-4 py-3">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#293829] text-white gap-2 pl-5 text-base font-bold leading-normal tracking-[0.015em]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"></path>
            </svg>
            <span className="truncate">Sign up with Google</span>
          </button>
        </div>

        {/* Sign Up Button */}
        <div className="flex px-4 py-3">
          <button 
            onClick={handleSignUp}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#19e519] text-[#111811] text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Sign up</span>
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <p 
          onClick={handleLoginClick}
          className="text-[#9db89d] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline cursor-pointer"
        >
          Already have an account? Log in
        </p>
        <div className="h-5 bg-[#111811]" />
      </div>
    </div>
  )
}

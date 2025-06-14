"use client"

import { useState } from "react"
import Logo from "@/components/reusables/Logo"
import Button from "@/components/reusables/Button"
import OTPInput from "@/components/reusables/OtpInput"

const EmailConfirmation = ({ onNavigate }) => {
  const [otp, setOtp] = useState("")

  const handleOTPComplete = (value) => {
    setOtp(value)
  }

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <Logo />
          <div className="text-right text-gray-600">
            <div className="text-sm">Step 3/5</div>
            <div className="font-medium">Email Confirmation</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-16 shadow-sm">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Verify Your Email</h1>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Kindly input the code sent to your email
              <br />
              to complete your registration.
            </p>

            <div className="mb-8">
              <OTPInput length={5} onComplete={handleOTPComplete} />
            </div>

            <div className="mb-8">
              <button className="text-gray-600 hover:text-gray-800 text-sm">Resend code</button>
            </div>

            <Button
              className="w-full bg-teal-600 hover:bg-teal-700 text-white"
              onClick={() => onNavigate("user-category")}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailConfirmation

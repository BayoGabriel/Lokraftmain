"use client"

import { useState, useRef } from "react"

const OTPInput = ({ length = 5, onComplete }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""))
  const inputRefs = useRef([])

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus()
    }

    if (otp.join("").length === length - 1 && element.value !== "") {
      const newOtp = [...otp]
      newOtp[index] = element.value
      onComplete && onComplete(newOtp.join(""))
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  return (
    <div className="flex gap-3 justify-center">
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          ref={(ref) => (inputRefs.current[index] = ref)}
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-lg font-medium focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-colors"
          placeholder="2"
        />
      ))}
    </div>
  )
}

export default OTPInput

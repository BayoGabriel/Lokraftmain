"use client"

import { useState } from "react"
import Logo from "@/components/reusables/Logo"
import Button from "@/components/reusables/Button"
import Input from "@/components/reusables/Input"
import Carousel from "@/components/reusables/Carousel"
import { Car, Car2, Car3 } from "@/public"
const SignIn = ({ onNavigate }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const carouselImages = [
    Car,
    Car2,
    Car3
  ]

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Carousel */}
      <div className="flex-1 relative">
        <Carousel images={carouselImages} className="h-full" />
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-12 bg-white">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-12">
            <Logo />
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back !</h1>
              <p className="text-gray-600">{"Let's get you back in"}</p>
            </div>

            <div className="space-y-6">
              <Input
                label="Email address"
                type="email"
                placeholder="Johndoe@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                type="password"
                placeholder="Johndoe@email.com"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="text-right">
                <Button
                  variant="link"
                  onClick={() => onNavigate("forgot-password")}
                  className="text-orange-500 hover:text-orange-600"
                >
                  Forgot your password? →
                </Button>
              </div>

              <Button
                className="w-full bg-gray-400 hover:bg-gray-500 text-white"
                onClick={() => onNavigate("dashboard")}
              >
                Sign in
              </Button>

              <div className="text-center text-gray-600">
                Are you a new user?{" "}
                <button
                  onClick={() => onNavigate("account-type")}
                  className="text-gray-900 font-medium underline hover:text-gray-700"
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn

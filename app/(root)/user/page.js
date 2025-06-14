"use client"

import { useState } from "react"
import SignIn from "@/screens/SignIn"
import AccountType from "@/screens/AccountType"
import Registration from "@/screens/Registration"
import EmailConfirmation from "@/screens/EmailConfirmation"
import UserCategory from "@/screens/UserCategory"
import SelfieCapture from "@/screens/SelfieCapture"
import ProfileComplete from "@/screens/ProfileComplete"

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("sign-in")

  const handleNavigate = (screen) => {
    setCurrentScreen(screen)
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "sign-in":
        return <SignIn onNavigate={handleNavigate} />
      case "account-type":
        return <AccountType onNavigate={handleNavigate} />
      case "registration":
        return <Registration onNavigate={handleNavigate} />
      case "email-confirmation":
        return <EmailConfirmation onNavigate={handleNavigate} />
      case "user-category":
        return <UserCategory onNavigate={handleNavigate} />
      case "selfie-capture":
        return <SelfieCapture onNavigate={handleNavigate} />
      case "profile-complete":
        return <ProfileComplete onNavigate={handleNavigate} />
      case "dashboard":
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
              <p className="text-gray-600">Welcome to your Lokraft dashboard!</p>
              <button
                onClick={() => handleNavigate("sign-in")}
                className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
              >
                Back to Sign In
              </button>
            </div>
          </div>
        )
      default:
        return <SignIn onNavigate={handleNavigate} />
    }
  }

  return <div className="font-sans">{renderScreen()}</div>
}

export default App

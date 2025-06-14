"use client"
import Logo from "@/components/reusables/Logo"
import Button from "@/components/reusables/Button"

const ProfileComplete = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Logo />
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Profile Setup complete</h1>
          <p className="text-xl text-gray-600 mb-16">Congratulations! You are all setup</p>

          {/* Success Badge */}
          <div className="mb-16">
            <div className="w-32 h-32 mx-auto bg-orange-400 rounded-full flex items-center justify-center relative">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {/* Decorative border */}
              <div
                className="absolute inset-0 rounded-full border-4 border-orange-300"
                style={{
                  clipPath:
                    "polygon(0% 0%, 15% 0%, 20% 5%, 25% 0%, 40% 0%, 45% 5%, 50% 0%, 65% 0%, 70% 5%, 75% 0%, 90% 0%, 95% 5%, 100% 0%, 100% 15%, 95% 20%, 100% 25%, 100% 40%, 95% 45%, 100% 50%, 100% 65%, 95% 70%, 100% 75%, 100% 90%, 95% 95%, 100% 100%, 85% 100%, 80% 95%, 75% 100%, 60% 100%, 55% 95%, 50% 100%, 35% 100%, 30% 95%, 25% 100%, 10% 100%, 5% 95%, 0% 100%, 0% 85%, 5% 80%, 0% 75%, 0% 60%, 5% 55%, 0% 50%, 0% 35%, 5% 30%, 0% 25%, 0% 10%, 5% 5%)",
                }}
              ></div>
            </div>
          </div>

          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-4 text-lg"
            onClick={() => onNavigate("dashboard")}
          >
            Goto dashboard
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProfileComplete

"use client"
import Logo from "@/components/reusables/Logo"
import Button from "@/components/reusables/Button"

const SelfieCapture = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <Logo />
          <div className="text-right text-gray-600">
            <div className="text-sm">Step 3/5</div>
            <div className="font-medium">Selfie image</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-teal-700 rounded-3xl p-16 text-center text-white">
            <h1 className="text-4xl font-bold mb-6">Portrait Selfie</h1>
            <p className="text-lg mb-12 leading-relaxed max-w-md mx-auto">
              Please ensure that you have enough light in your environment and make sure you are stead for us to capture
              your face properly.
            </p>

            {/* Selfie Placeholder */}
            <div className="bg-white rounded-full w-64 h-80 mx-auto mb-12 flex items-center justify-center">
              <div className="text-gray-400 text-6xl">👤</div>
            </div>

            <Button
              className="bg-orange-300 hover:bg-orange-400 text-gray-900 font-semibold px-16 py-4 text-lg"
              onClick={() => onNavigate("profile-complete")}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelfieCapture

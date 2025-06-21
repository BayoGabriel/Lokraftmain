"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import User_Category_Screen from "@/views/onboarding_view/onboarding_views_components/User_Category_Screen"
import Account_Type_Screen from "@/views/onboarding_view/onboarding_views_components/Account_Type_Screen"
import General_Details_Screen from "@/views/onboarding_view/onboarding_views_components/General_Details_Screen"
import Customer_Details_Screen from "@/views/onboarding_view/onboarding_views_components/Customer_Details_Screen"
import Email_Confirmation_Screen from "@/views/onboarding_view/onboarding_views_components/Email_Confirmation_Screen"
import Selfie_Screen from "@/views/onboarding_view/onboarding_views_components/Selfie_Screen"
import CompletionScreen from "@/views/onboarding_view/onboarding_views_components/Completion_Screen"

const Onboarding_View = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    userCategory: "",
    accountType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    lga: "",
    skills: [],
  })

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1)
  }

  // Handle category selection with auto-navigation
  const handleCategorySelect = (category) => {
    updateFormData({ userCategory: category })
    // Auto-navigate to next step after a short delay
    setTimeout(() => {
      nextStep()
    }, 300)
  }

  // Handle account type selection with auto-navigation
  const handleAccountTypeSelect = (type) => {
    updateFormData({ accountType: type })
    setTimeout(() => {
      nextStep()
    }, 300)
  }

  // Determine total steps based on user category
  const getTotalSteps = () => {
    return formData.userCategory === "customer" ? 5 : 6
  }

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 },
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <User_Category_Screen onSelect={handleCategorySelect} selected={formData.userCategory} />
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Account_Type_Screen
              onBack={prevStep}
              onSelect={handleAccountTypeSelect}
              selected={formData.accountType}
              step={2}
              totalSteps={getTotalSteps()}
            />
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            key="step3"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            {formData.userCategory === "artisan" ? (
              <General_Details_Screen
                onNext={nextStep}
                onBack={prevStep}
                formData={formData}
                updateFormData={updateFormData}
                step={3}
                totalSteps={getTotalSteps()}
              />
            ) : (
              <Customer_Details_Screen
                onNext={nextStep}
                onBack={prevStep}
                formData={formData}
                updateFormData={updateFormData}
                step={3}
                totalSteps={getTotalSteps()}
              />
            )}
          </motion.div>
        )}

        {currentStep === 4 && (
          <motion.div
            key="step4"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Email_Confirmation_Screen onNext={nextStep} onBack={prevStep} step={4} totalSteps={getTotalSteps()} />
          </motion.div>
        )}

        {currentStep === 5 && formData.userCategory === "artisan" && (
          <motion.div
            key="step5"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Selfie_Screen onNext={nextStep} onBack={prevStep} step={5} totalSteps={getTotalSteps()} />
          </motion.div>
        )}

        {((currentStep === 6 && formData.userCategory === "artisan") ||
          (currentStep === 5 && formData.userCategory === "customer")) && (
          <motion.div
            key="completion"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <CompletionScreen userCategory={formData.userCategory} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Onboarding_View

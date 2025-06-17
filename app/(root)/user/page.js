"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import UserCategoryScreen from "@/components/UserCategoryScreen"
import AccountTypeScreen from "@/components/AccountTypeScreen"
import GeneralDetailsScreen from "@/components/GeneralDetailsScreen"
import EmailConfirmationScreen from "@/components/EmailConfirmationScreen"
import SelfieScreen from "@/components/SelfieScreen"
import CompletionScreen from "@/components/CompletionScreen"

export default function Home() {
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
    <div className="min-h-screen bg-gray-50">
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
            <UserCategoryScreen
              onNext={nextStep}
              onSelect={(category) => updateFormData({ userCategory: category })}
              selected={formData.userCategory}
            />
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
            <AccountTypeScreen
              onNext={nextStep}
              onBack={prevStep}
              onSelect={(type) => updateFormData({ accountType: type })}
              selected={formData.accountType}
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
            <GeneralDetailsScreen
              onNext={nextStep}
              onBack={prevStep}
              formData={formData}
              updateFormData={updateFormData}
            />
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
            <EmailConfirmationScreen onNext={nextStep} onBack={prevStep} />
          </motion.div>
        )}

        {currentStep === 5 && (
          <motion.div
            key="step5"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <SelfieScreen onNext={nextStep} onBack={prevStep} />
          </motion.div>
        )}

        {currentStep === 6 && (
          <motion.div
            key="step6"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <CompletionScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

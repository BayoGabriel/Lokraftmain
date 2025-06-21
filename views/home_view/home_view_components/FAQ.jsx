"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci"

const faqData = [
  {
    question: "What is Lokraft and how does it work?",
    answer:
      "Lokraft is a platform that connects skilled artisans with customers who need their services. We provide a secure marketplace where you can find verified professionals for various crafts and services.",
  },
  {
    question: "Is there a guarantee for quality of service?",
    answer:
      "Yes, we offer quality guarantees for all services booked through our platform. If you're not satisfied with the work, we have a resolution process to ensure your concerns are addressed.",
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Absolutely. We use industry-standard encryption and security measures to protect your personal information. Your data is never shared with third parties without your consent.",
  },
  {
    question: "What happens if the artisan doesn't show up?",
    answer:
      "If an artisan doesn't show up for a scheduled appointment, we will immediately work to find you a replacement or provide a full refund. We also have policies in place to prevent this from happening.",
  },
  {
    question: "Can I use the platform on mobile and desktop?",
    answer:
      "Yes, Lokraft is fully responsive and works seamlessly on both mobile devices and desktop computers. We also have mobile apps available for iOS and Android.",
  },
  {
    question: "Are the artisans verified before being listed?",
    answer:
      "Yes, all artisans go through a comprehensive verification process including background checks, skill assessments, and reference verification before being approved on our platform.",
  },
  {
    question: "Do you offer training or upskilling for artisans?",
    answer:
      "Yes, we provide various training programs and workshops to help artisans improve their skills and stay updated with the latest techniques and tools in their craft.",
  },
  {
    question: "Is it safe to make payments through the platform?",
    answer:
      "Absolutely. We use secure payment gateways and escrow services to ensure your payments are protected. Money is only released to artisans after you confirm satisfactory completion of work.",
  },
  {
    question: "How does Lokraft ensure fair job matching?",
    answer:
      "We use advanced algorithms that consider factors like location, skills, availability, ratings, and preferences to match you with the most suitable artisans for your specific needs.",
  },
  {
    question: "Do I need to pay to join the platform as an artisan?",
    answer:
      "No, joining Lokraft as an artisan is completely free. We only charge a small commission on completed jobs, so you only pay when you earn.",
  },
  {
    question: "Why should I use Lokraft as an Artisan?",
    answer:
      "Lokraft provides artisans with a steady stream of customers, secure payments, marketing support, and tools to grow their business. You can focus on your craft while we handle the business side.",
  },
  {
    question: "How will I get paid after completing a job?",
    answer:
      "Payments are processed automatically after job completion and customer approval. You can choose to receive payments via bank transfer, mobile money, or other available payment methods.",
  },
  {
    question: "Can I see reviews and ratings before booking someone?",
    answer:
      "Yes, all artisans have detailed profiles showing their ratings, reviews from previous customers, portfolio of work, and verified credentials to help you make informed decisions.",
  },
  {
    question: "What happens if a client cancels a job last-minute?",
    answer:
      "We have a cancellation policy that protects both artisans and clients. Depending on the timing and circumstances, cancellation fees may apply to compensate for lost time and preparation.",
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-36 py-8 sm:py-12 md:py-20">
      <div className="w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[25px] font-[800] text-black mb-2 sm:mb-4">FAQ</h1>
          <h4 className="text-[#8E59FF] text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[85px] font-[700] leading-[100%] tracking-[0px]">
            Frequently Asked
          </h4>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="flex flex-col gap-6 sm:gap-8">
            {faqData
              .filter((_, i) => i % 2 === 0)
              .map((item, index) => {
                const actualIndex = faqData.findIndex((f) => f === item)
                return (
                  <motion.div
                    key={actualIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(actualIndex)}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="text-gray-700 font-medium pr-4 text-sm sm:text-base">{item.question}</span>
                      <motion.div
                        animate={{ rotate: openItems.has(actualIndex) ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        {openItems.has(actualIndex) ? (
                          <CiCircleMinus className="w-5 h-5 text-gray-500" />
                        ) : (
                          <CiCirclePlus className="w-5 h-5 text-gray-500" />
                        )}
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openItems.has(actualIndex) && (
                        <motion.div
                          initial={{ opacity: 0, scaleY: 0 }}
                          animate={{ opacity: 1, scaleY: 1 }}
                          exit={{ opacity: 0, scaleY: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden origin-top"
                        >
                          <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
          </div>
          <div className="flex flex-col gap-6 sm:gap-8">
            {faqData
              .filter((_, i) => i % 2 !== 0)
              .map((item, index) => {
                const actualIndex = faqData.findIndex((f) => f === item)
                return (
                  <motion.div
                    key={actualIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(actualIndex)}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="text-gray-700 font-medium pr-4 text-sm sm:text-base">{item.question}</span>
                      <motion.div
                        animate={{ rotate: openItems.has(actualIndex) ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        {openItems.has(actualIndex) ? (
                          <CiCircleMinus className="w-5 h-5 text-gray-500" />
                        ) : (
                          <CiCirclePlus className="w-5 h-5 text-gray-500" />
                        )}
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openItems.has(actualIndex) && (
                        <motion.div
                          initial={{ opacity: 0, scaleY: 0 }}
                          animate={{ opacity: 1, scaleY: 1 }}
                          exit={{ opacity: 0, scaleY: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden origin-top"
                        >
                          <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
          </div>
        </div>
      </div>
    </section>
  )
}

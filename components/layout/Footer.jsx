"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaSquareXTwitter } from "react-icons/fa6"
import Image from "next/image"
import Link from "next/link";
import { LogoBeige } from "@/public";
export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="bg-[#02846B] text-white w-full mx-auto">
      <div className="container mx-auto">
      <div className="mx-auto px-6 md:px-12 lg:px-36 py-12 md:py-20">
        <div className="mb-4">
          <Image src={LogoBeige} alt="logo"/>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-1"
        >
          <p className="text-white text-[18px] font-[400] epilogue leading-[28px]">
            We are committed to empowering artisans and skilled workers by  providing them with resources and opportunities they need to succeed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-start gap-16"
        >
          <div className="">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            {["About Us", "Careers", "Team", "Contact Us"].map((item, index) => (
              <li key={index}>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-green-100 hover:text-white transition-colors duration-200"
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
          </div>
          <div className="">
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {["Help", "Training Videos", "Webinars", "Request a Demo"].map((item, index) => (
              <li key={index}>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-green-100 hover:text-white transition-colors duration-200"
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-4">Let's keep in Touch</h3>
          <p className="text-green-100 text-sm mb-4">
            Enter your email to keep in the know with the latest updates from Clarity.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-2 rounded-lg bg-[#343841] border border-white text-white placeholder-white focus:outline-none focus:border-white transition-colors duration-200"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-2 bg-[#F9A607] text-white rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="border-t border-green-500 pt-8 flex flex-col md:flex-row items-center justify-between mx-auto px-6 md:px-12 lg:px-36 py-3"
      >
        <span>Copyright 2023 Lokraft. All rights reserved.</span>
        <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Link href="#"><TiSocialLinkedinCircular className="size-8 text-white" /></Link>
            <Link href="#"><FaSquareXTwitter className="size-8 text-white" /></Link>
            
          </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-green-100">
          <div className="flex gap-4">
            {["Privacy Policy", "Data & Security", "Terms of Service", "Data & Security"].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -2 }}
                className="hover:text-white transition-colors duration-200"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
      </div>
    </footer>
  )
}

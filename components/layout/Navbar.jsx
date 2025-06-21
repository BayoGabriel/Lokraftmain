"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-white py-4 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks pathname={pathname} />
          <Link href='/onboarding'
            className="px-6 py-2 rounded-[8px] border-2 border-[#02846B] text-[#02846B] font-medium hover:bg-[#02846B] hover:text-white transition-all duration-300"
          >
            Get started
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-4 py-4 px-4 bg-white"
        >
          <div className="flex flex-col space-y-4">
            <NavLinks pathname={pathname} mobile={true} />
            <Link href="/onboarding" className="px-6 py-2 rounded-full border-2 border-[#02846B] text-[#02846B] font-medium hover:bg-[#02846B] hover:text-white transition-all duration-300">
              Get started
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

function NavLinks({ mobile = false, pathname }) {
  const links = [
    { name: "Home", href: "/" },
    { name: "For Users", href: "/users" },
    { name: "For Artisans", href: "/artisans" },
    { name: "About Us", href: "/about" },
  ]

  return (
    <>
      {links.map((link, index) => {
        const isActive = pathname === link.href

        return (
          <a
            key={index}
            href={link.href}
            className={`${mobile ? "block py-2" : "relative"} font-medium ${
              isActive ? "text-[#02846B]" : "text-gray-600 hover:text-[#02846B]"
            } transition-colors duration-300`}
          >
            {link.name}
            {isActive && (
              <motion.div
                layoutId="activeIndicator"
                className={`absolute ${
                  mobile ? "-left-4 top-0 -translate-y-1/2" : "left-1/2 -translate-x-1/2 -bottom-2"
                } w-2 h-2 rounded-full bg-[#E97124]`}
              />
            )}
          </a>
        )
      })}
    </>
  )
}

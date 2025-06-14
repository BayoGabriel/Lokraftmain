'use client'

import { motion } from 'framer-motion'
import blog from "@/public/blog.png"
import Image from 'next/image'
const blogPosts = [
  {
    id: 1,
    title: "Ada x Martins",
    description: "Not all clients are the same. Spot your top spenders, frequent visitors, and biggest referrers. Keep them engaged, reward their loyalty, and build lasting relationships.",
    image: blog
  },
  {
    id: 2,
    title: "Ada x Martins",
    description: "Not all clients are the same. Spot your top spenders, frequent visitors, and biggest referrers. Keep them engaged, reward their loyalty, and build lasting relationships.",
    image: blog
  },
  {
    id: 3,
    title: "Ada x Martins",
    description: "Not all clients are the same. Spot your top spenders, frequent visitors, and biggest referrers. Keep them engaged, reward their loyalty, and build lasting relationships.",
    image: blog
  }
]

export default function BlogSection() {
  return (
    <section className="w-full mx-auto px-6 md:px-12 lg:px-36 py-12 md:py-20 bg-[#EDF1C9]">
      <div className="mx-auto">
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-green-700"
          >
            Read our blog
          </motion.h2>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-gray-400 rounded-full text-gray-700 hover:border-green-600 hover:text-green-600 transition-colors duration-200"
          >
            See all articles
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className=""
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full rounded-[10px] hover:scale-[1.2] duration-[0.3s] h-48 object-cover"
                />
              </div>
              
              <div className="py-6 flex flex-col gap-4">
                <h3 className="text-[23px] font-[700] text-[#333333]">{post.title}</h3>
                <p className="text-[#333333] text-[16px] font-[400] leading-relaxed">
                  {post.description}
                </p>
                <div className="">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-2 border border-gray-400 rounded-full text-gray-700 hover:border-green-600 text-[14px] hover:text-green-600 transition-colors duration-200"
                  >
                    Read more
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

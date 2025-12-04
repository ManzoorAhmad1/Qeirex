// src/components/CategorySection.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Coffee, Leaf, Bath, Wind, ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 1,
    name: 'Coffee',
    description: 'For cleaner sessions',
    icon: Coffee,
    color: 'from-brown-500 to-brown-700',
    bgColor: 'bg-cream-light dark:bg-brown-800/30',
    borderColor: 'border-brown-200 dark:border-brown-700',
    count: 5,
    link: '/shop?category=coffee',
  },
  {
    id: 2,
    name: 'Detoxification',
    description: 'Detoxification mix',
    icon: Leaf,
    color: 'from-green-500 to-green-700',
    bgColor: 'bg-cream-light dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-700',
    count: 3,
    link: '/shop?category=detox',
  },
  {
    id: 3,
    name: 'Bath Herbs',
    description: 'For healthy & clean skin',
    icon: Bath,
    color: 'from-blue-500 to-blue-700',
    bgColor: 'bg-cream-light dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-700',
    count: 4,
    link: '/shop?category=bath',
  },
  {
    id: 4,
    name: 'Smoking Mix',
    description: 'Premium herbal smoking blends',
    icon: Wind,
    color: 'from-purple-500 to-purple-700',
    bgColor: 'bg-cream-light dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-700',
    count: 6,
    link: '/shop?category=smoking',
  },
]

export default function CategorySection() {
  return (
    <section id="categories" className="section-padding bg-natural-secondary">
      <div className="container-natural">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="badge-natural mb-4">
            <Leaf className="w-4 h-4 mr-2" />
            SHOP BY CATEGORY
          </span>
          
          <h2 className="section-title mb-4 text-brown-900 dark:text-cream">
            Discover Premium Herbal Collections
          </h2>
          
          {/* یہاں صرف ڈسکرپشن کو سینٹر کیا گیا ہے */}
          <div className="max-w-2xl mx-auto">
            <p className="section-subtitle text-brown-700 dark:text-brown-300 text-center">
              Explore our carefully crafted herbal blends, each designed for specific wellness 
              needs and mindful moments.
            </p>
          </div>
        </motion.div>

        {/* Categories Grid - Only 4 Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full group"
            >
              <Link href={category.link}>
                <div className={`${category.bgColor} rounded-2xl p-8 h-full border ${category.borderColor} hover:border-accent dark:hover:border-accent-light transition-all duration-300 cursor-pointer flex flex-col items-center text-center hover:shadow-xl`}>
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow`}>
                      <category.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-brown-900 dark:text-cream mb-3 hover:text-brown-700 dark:hover:text-accent-light transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-brown-700 dark:text-brown-300 mb-6">
                      {category.description}
                    </p>
                  </div>

                  {/* Shop Button */}
                  <div className="mt-auto">
                    <button className="btn-natural-light text-sm px-6 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Shop Now
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Shop All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/shop"
            className="btn-natural-primary px-8 py-4 text-lg"
          >
            <span>Shop All</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
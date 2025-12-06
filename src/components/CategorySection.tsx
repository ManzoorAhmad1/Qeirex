// src/components/CategorySection.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Coffee, Leaf, Bath, Wind, ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 1,
    name: 'Herbal Coffee Blend',
    description: 'For cleaner, smoother sessions',
    icon: Coffee,
    link: '/shop?category=coffee',
  },
  {
    id: 2,
    name: 'Detox Herbal Mix',
    description: 'A gentle blend for cleansing',
    icon: Leaf,
    link: '/shop?category=detox',
  },
  {
    id: 3,
    name: 'Bath Herbs',
    description: 'For calm, clean, natural skin care',
    icon: Bath,
    link: '/shop?category=bath',
  },
  {
    id: 4,
    name: 'Smoking Mix',
    description: 'Premium herbal smoking blends',
    icon: Wind,
    link: '/shop?category=smoking',
  },
]

export default function CategorySection() {
  return (
    <section id="categories" className="section-padding" style={{ backgroundColor: 'var(--color-off-white)' }}>
      <div className="container-natural">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-6" style={{ color: 'var(--color-deep-herbal)' }}>
            Discover Premium Herbal Collections
          </h2>
          
          <p className="section-subtitle max-w-3xl mx-auto">
            Explore our carefully crafted herbal blends, each designed for specific wellness 
            needs and mindful moments.
          </p>
        </motion.div>

        {/* Categories Grid - 4 Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group h-full"
            >
              <Link href={category.link}>
                <div 
                  className="rounded-3xl p-8 h-full flex flex-col items-center text-center transition-all duration-300 cursor-pointer hover:shadow-2xl"
                  style={{
                    backgroundColor: 'var(--color-warm-beige)',
                    boxShadow: '0 4px 12px rgba(62, 107, 72, 0.08)',
                    border: '1px solid rgba(123, 170, 127, 0.1)',
                  }}
                >
                  {/* Icon Circle */}
                  <motion.div 
                    className="mb-6 w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: 'rgba(123, 170, 127, 0.1)',
                      borderRadius: '20px',
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <category.icon 
                      className="w-10 h-10 transition-all duration-300"
                      style={{ color: 'var(--color-deep-herbal)', strokeWidth: 1.5 }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: 'var(--color-deep-herbal)' }}>
                      {category.name}
                    </h3>
                    
                    <p className="text-base" style={{ color: 'black' }}>
                      {category.description}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <motion.div 
                    className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <ArrowRight 
                      className="w-5 h-5" 
                      style={{ color: 'var(--color-sage-green)' }}
                    />
                  </motion.div>
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
          className="text-center mt-14"
        >
          <Link href="/shop" className="btn-primary">
            <span>Shop All Collections</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
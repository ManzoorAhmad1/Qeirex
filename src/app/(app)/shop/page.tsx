// src/app/shop/page.tsx
'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Leaf, ArrowRight } from 'lucide-react'
import FeaturedProducts from '@/components/FeaturedProducts'

// Loading Component
function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-natural-primary">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-16 h-16 border-4 rounded-full mx-auto mb-4"
          style={{
            borderColor: 'rgba(123, 170, 127, 0.2)',
            borderTopColor: 'var(--color-sage-green)',
          }}
        />
        <p className="text-natural-secondary">Loading products...</p>
      </div>
    </div>
  )
}

// Main Shop Page Component
export default function ShopPage() {
  return (
    <div className="min-h-screen bg-natural-primary">
      {/* Hero Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="section-padding relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--color-dark-bg) 0%, var(--color-deep-herbal) 100%)',
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{
          backgroundColor: 'var(--color-warm-beige)',
          filter: 'blur(80px)',
        }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10" style={{
          backgroundColor: 'var(--color-sage-green)',
          filter: 'blur(80px)',
        }} />

        <div className="container-natural text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(123, 170, 127, 0.15)' }}>
              <Leaf className="w-4 h-4" style={{ color: 'var(--color-sage-green)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--color-sage-green)' }}>Premium Collection</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: 'var(--color-off-white)' }}>
              Premium Herbal <span style={{ color: 'var(--color-warm-beige)' }}>Blends</span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8" style={{ color: 'rgba(167, 176, 166, 0.9)' }}>
              Discover our carefully crafted herbal alternatives for a mindful, tobacco-free lifestyle
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all" style={{ backgroundColor: 'var(--color-sage-green)', color: 'white' }}>
                <ShoppingCart className="w-5 h-5" />
                Start Shopping
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Products with Suspense for URL params */}
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturedProducts />
      </Suspense>

      {/* Categories Summary */}
      <div className="section-padding bg-natural-primary">
        <div className="container-natural">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-deep-herbal)' }}>
              Explore Our <span style={{ color: 'var(--color-sage-green)' }}>Categories</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'black' }}>
              Each category offers unique benefits for your wellness journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Coffee Blends',
                desc: 'Herbal alternatives for coffee sessions',
                icon: '☕',
                link: '/shop?category=coffee'
              },
              {
                title: 'Detoxification',
                desc: 'Natural cleansing and detox blends',
                icon: '🌿',
                link: '/shop?category=detox'
              },
              {
                title: 'Bath Herbs',
                desc: 'Luxurious herbs for bath rituals',
                icon: '🛁',
                link: '/shop?category=bath'
              },
              {
                title: 'Smoking Mix',
                desc: 'Premium herbal smoking alternatives',
                icon: '💨',
                link: '/shop?category=smoking'
              },
            ].map((category, index) => (
              <motion.a
                key={index}
                href={category.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card-premium p-8 text-center rounded-2xl border transition-all"
                style={{
                  borderColor: 'rgba(230, 220, 197, 0.3)',
                }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(123, 170, 127, 0.1)' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-4xl">{category.icon}</span>
                </motion.div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-deep-herbal)' }}>
                  {category.title}
                </h3>
                <p className="text-black mb-4">
                  {category.desc}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm font-semibold" style={{ color: 'var(--color-sage-green)' }}>
                  Browse <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-padding"
        style={{ backgroundColor: 'var(--color-natural-secondary)' }}
      >
        <div className="container-natural">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '✓', label: '100% Natural', desc: 'Pure herbal ingredients' },
              { icon: '🔬', label: 'Lab Tested', desc: 'Rigorous quality control' },
              { icon: '🚚', label: 'Fast Delivery', desc: '3-5 business days' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-bold mb-1" style={{ color: 'var(--color-deep-herbal)' }}>
                  {item.label}
                </h4>
                <p style={{ color: 'black' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}
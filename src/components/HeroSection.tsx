// src/components/HeroSection.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Leaf, Shield, Sparkles } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-herbal-gradient">
      <div className="absolute inset-0 bg-natural-pattern opacity-10"></div>
      
      <div className="container-natural py-16 md:py-24 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center mb-6"
            >
              <span className="badge-natural">
                <Leaf className="w-4 h-4 mr-2" />
                AYURVEDA, VEGAN, PREMIUM MIXED NATURAL
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-natural-primary leading-tight">
              No Nicotine,{' '}
              <span className="text-gradient-herbal">
                No Tobacco
              </span>
            </h1>

            <p className="text-lg text-natural-secondary max-w-2xl mx-auto">
              Herbal Alternative for a mindful, tobacco-free lifestyle. 
              Crafted with ancient Ayurvedic wisdom and modern quality standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/shop"
                  className="btn-natural-primary"
                >
                  Buy Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#categories"
                  className="btn-natural-outline"
                >
                  Shop by Category
                </Link>
              </motion.div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
              {[
                { icon: Shield, text: '100% Herbal Blends' },
                { icon: Leaf, text: 'No Tobacco, No Nicotine' },
                { icon: Sparkles, text: 'Slow burn, smooth drag' },
                { text: 'Fresh smell' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2 justify-center"
                >
                  <div className="w-8 h-8 rounded-full bg-accent-20 flex items-center justify-center">
                    {feature.icon && <feature.icon className="w-4 h-4 text-accent-primary" />}
                  </div>
                  <span className="text-sm font-medium text-natural-secondary">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-accent-20 blur-xl opacity-50"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
          className="absolute bottom-1/4 right-10 w-24 h-24 rounded-full bg-accent-10 blur-xl opacity-30"
        />
      </div>
    </section>
  )
}
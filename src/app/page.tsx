// src/app/page.tsx
'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import CategorySection from '@/components/CategorySection'
import WhyChooseUs from '@/components/WhyChooseUs'

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <CategorySection />
      <WhyChooseUs />
    </motion.div>
  )
}
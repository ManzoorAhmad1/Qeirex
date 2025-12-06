// src/app/(app)/about/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Beaker, Leaf, Heart, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ProductCollection from '@/components/ProductCollection'

export default function AboutPage() {
  const coreValues = [
    {
      icon: Leaf,
      title: '100% Herbal',
      description: 'Pure, natural ingredients rooted in Ayurvedic tradition',
    },
    {
      icon: Heart,
      title: 'Mindful Living',
      description: 'Created for conscious wellness seekers and nature lovers',
    },
    {
      icon: Beaker,
      title: 'Lab-Tested',
      description: 'Rigorous quality control for purity and potency',
    },
    {
      icon: Lightbulb,
      title: 'Modern Innovation',
      description: 'Ancient wisdom meets contemporary quality standards',
    },
  ]

  const highlights = [
    {
      number: '10K+',
      label: 'Happy Customers',
      icon: '👥',
    },
    {
      number: '100%',
      label: 'Natural Blends',
      icon: '🌿',
    },
    {
      number: '50+',
      label: 'Herbal Varieties',
      icon: '🌱',
    },
    {
      number: '5+',
      label: 'Years Experience',
      icon: '⏱️',
    },
  ]

  return (
    <div style={{ backgroundColor: 'var(--color-off-white)' }}>
      {/* Hero Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-dark-bg)' }}>
        <div className="container-natural">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: 'var(--color-off-white)' }}>
              About <span style={{ color: 'var(--color-sage-green)' }}>Qeirex</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--color-warm-beige)' }}>
              Ancient Herbs. Modern Rituals. Premium Living.
            </p>

            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(167, 176, 166, 0.9)' }}>
              We bring together Ayurvedic wisdom and modern science to create premium herbal alternatives 
              for a mindful, conscious lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-natural">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] relative bg-gradient-to-br" style={{ backgroundColor: 'rgba(230, 220, 197, 0.5)' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1607721098274-e54cbfab475d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Herbal ingredients"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20"
                style={{
                  backgroundColor: 'var(--color-sage-green)',
                  filter: 'blur(30px)',
                }}
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-10"
                style={{
                  backgroundColor: 'var(--color-warm-beige)',
                  filter: 'blur(40px)',
                }}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-deep-herbal)' }}>
                  Our Story
                </h2>
                <div className="space-y-4">
                  <p className="text-lg" style={{ color: 'black' }}>
                    Qeirex was born from a belief that wellness should be natural, mindful, and rooted in tradition. 
                    We blend Ayurvedic wisdom with modern quality standards to create herbal alternatives for the 
                    conscious consumer.
                  </p>
                  <p className="text-lg" style={{ color: 'black' }}>
                    Every herb we source is carefully selected from ethical suppliers who share our commitment to 
                    sustainability and purity. We believe in transparency, quality, and the power of nature.
                  </p>
                  <p className="text-lg" style={{ color: 'black' }}>
                    Today, thousands of customers trust Qeirex as their partner in mindful living. We're not just 
                    selling products—we're building a community of conscious choices.
                  </p>
                </div>
              </div>

              {/* Mission Box */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl"
                style={{
                  backgroundColor: 'rgba(230, 220, 197, 0.3)',
                  border: '1px solid rgba(123, 170, 127, 0.2)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(123, 170, 127, 0.15)' }}
                  >
                    <Leaf className="w-6 h-6" style={{ color: 'var(--color-sage-green)' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-deep-herbal)' }}>
                      Our Mission
                    </h3>
                    <p style={{ color: 'black' }}>
                      To empower individuals with premium, natural herbal alternatives that elevate their wellness 
                      journey and honor both mind and nature.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-dark-bg)' }}>
        <div className="container-natural">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-off-white)' }}>
              What We Stand For
            </h2>
            <p className="text-lg" style={{ color: 'rgba(167, 176, 166, 0.85)' }}>
              Our core values guide everything we create at Qeirex
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-2xl p-8 transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(123, 170, 127, 0.08)',
                  border: '1px solid rgba(123, 170, 127, 0.2)',
                }}
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: 'rgba(123, 170, 127, 0.15)',
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <value.icon className="w-7 h-7" style={{ color: 'var(--color-sage-green)' }} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-off-white)' }}>
                  {value.title}
                </h3>
                <p style={{ color: 'rgba(167, 176, 166, 0.85)' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-natural">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--color-sage-green)' }}>
                  {stat.number}
                </div>
                <p className="text-lg" style={{ color: 'black' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Qeirex Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-dark-bg)' }}>
        <div className="container-natural">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: 'var(--color-off-white)' }}>
              Why Choose Qeirex?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
              {[
                'Lab-tested for purity and potency',
                'Ethically sourced from certified suppliers',
                'No tobacco, nicotine, or synthetic additives',
                'Rooted in 5+ years of herbal expertise',
                'Premium quality at fair prices',
                'Dedicated customer support team',
              ].map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--color-sage-green)' }} />
                  <span className="text-lg" style={{ color: 'rgba(167, 176, 166, 0.9)' }}>
                    {reason}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Collection */}
      <ProductCollection />

      {/* CTA Section */}
      <section className="section-padding" style={{
        background: 'linear-gradient(135deg, var(--color-sage-green) 0%, var(--color-deep-herbal) 100%)',
      }}>
        <div className="container-natural">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join the Qeirex Community?
            </h2>
            <p className="text-lg md:text-xl text-white mb-8 opacity-95">
              Experience the perfect balance of ancient wisdom and modern wellness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    border: '2px solid rgba(255, 255, 255, 0.5)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'white'
                    e.currentTarget.style.color = 'var(--color-deep-herbal)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                    e.currentTarget.style.color = 'white'
                  }}
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '2px solid white',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

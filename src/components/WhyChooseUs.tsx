// src/components/WhyChooseUs.tsx
'use client'

import { motion } from 'framer-motion'
import { Check, Leaf, Shield, Clock, Heart, Award, Users } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: '100% Natural Ingredients',
    description: 'No synthetic additives, preservatives, or artificial ingredients. Pure herbs from nature.',
    color: 'text-accent-primary',
    bgColor: 'bg-accent-20',
  },
  {
    icon: Heart,
    title: 'Vegan & Cruelty-Free',
    description: 'Plant-based ingredients, never tested on animals. Ethical and compassionate choices.',
    color: 'text-accent-secondary',
    bgColor: 'bg-accent-10',
  },
  {
    icon: Clock,
    title: 'Time-Tested Formulas',
    description: 'Rooted in traditional Ayurvedic practices and centuries of herbal wisdom.',
    color: 'text-accent-primary',
    bgColor: 'bg-accent-20',
  },
  {
    icon: Shield,
    title: 'Pure & Clean',
    description: 'No tobacco, nicotine, or harmful chemicals in any of our products.',
    color: 'text-accent-secondary',
    bgColor: 'bg-accent-10',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Rigorous testing and quality control for the finest herbal blends.',
    color: 'text-accent-primary',
    bgColor: 'bg-accent-20',
  },
  {
    icon: Users,
    title: 'Trusted Community',
    description: 'Thousands of satisfied customers who have chosen a healthier, conscious path.',
    color: 'text-accent-secondary',
    bgColor: 'bg-accent-10',
  },
]

const stats = [
  { number: '10K+', label: 'Happy Customers' },
  { number: '100%', label: 'Natural Ingredients' },
  { number: '50+', label: 'Herbal Varieties' },
  { number: '24/7', label: 'Customer Support' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-off-white)' }}>
      <div className="container-natural">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-natural mb-6" style={{ backgroundColor: 'var(--color-sage-green)', color: 'white' }}>
              <Award className="w-4 h-4 mr-2" />
              Why Choose Qeirex
            </span>
            
            <h2 className="section-title mb-6" style={{ color: 'var(--color-deep-herbal)' }}>
              Herbal Excellence Rooted in Nature
            </h2>
            
            <p className="text-lg mb-8 text-black" >
              Not everyone smokes to get high. Not everyone smokes to quit, some just 
              want to feel good without the damage. Qeirex is for those people, for 
              the chillers, the creatives, the deep thinkers, the mindful rollers.
            </p>
            
            <p className="text-lg mb-10" style={{ color: 'black' }}>
              For anyone who wants to light up something that feels light on their 
              body & right for their vibes.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-10">
              {[
                '100% Herbal Blends',
                'No Tobacco, No Nicotine',
                'Slow burn, smooth drag, Fresh smell',
                'Legal, natural and with care',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: 'var(--color-sage-green)' }}>
                    <Check className="w-4 h-4" style={{ color: 'white' }} />
                  </div>
                  <span style={{ color: 'var(--color-deep-herbal)' }}>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: 'var(--color-sage-green)' }}>
                    {stat.number}
                  </div>
                  <div className="text-sm" style={{ color: 'black' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card-premium p-6"
                style={{ backgroundColor: 'var(--color-warm-beige)' }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--color-sage-green)' }}>
                    <feature.icon className="w-6 h-6" style={{ color: 'white' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-deep-herbal)' }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'black' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="rounded-3xl p-8 md:p-12 border" style={{ backgroundColor: 'var(--color-warm-beige)', borderColor: 'var(--color-sage-green)' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-deep-herbal)' }}>
              Ready to Experience Herbal Excellence?
            </h3>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'black' }}>
              Join thousands of satisfied customers who have chosen a healthier, 
              more conscious path with Qeirex.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-3"
                style={{ backgroundColor: 'var(--color-sage-green)', color: 'white' }}
              >
                Shop Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary px-8 py-3"
                style={{ borderColor: 'var(--color-sage-green)', color: 'var(--color-deep-herbal)' }}
              >
                Learn More About Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
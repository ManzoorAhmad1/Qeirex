// src/components/Footer.tsx
'use client'

import Link from 'next/link'
import { Instagram, Linkedin, Mail, Phone, Leaf, ArrowRight, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')

  const footerSections = [
    {
      title: 'Company',
      links: ['Our Story', 'Ingredients & Quality', 'Sustainability', 'Careers'],
    },
    {
      title: 'Support',
      links: ['Shipping & Returns', 'FAQ', 'Contact Us', 'Track Order'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms & Conditions', 'Herbal Disclaimer', 'Cookie Policy'],
    },
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'Threads' },
    { icon: Mail, href: '#', label: 'Twitter/X' },
  ]

  return (
    <footer 
      className="relative"
      style={{ backgroundColor: 'var(--color-dark-bg)' }}
    >
      {/* Top Accent Line */}
      <div 
        className="h-1"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--color-sage-green), transparent)',
        }}
      />

      <div className="container-natural py-16 md:py-24">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-8 md:p-12 rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(123, 170, 127, 0.1) 0%, rgba(230, 220, 197, 0.05) 100%)',
            border: '1px solid rgba(123, 170, 127, 0.2)',
          }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-off-white)' }}>
              Stay Connected with Qeirex
            </h3>
            <p className="text-base md:text-lg mb-6" style={{ color: 'rgba(167, 176, 166, 0.85)' }}>
              Get exclusive offers, wellness tips, and new herbal collections delivered to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-6 py-3 rounded-full transition-all duration-300 focus:outline-none"
                style={{
                  backgroundColor: 'var(--color-off-white)',
                  color: 'var(--color-dark-bg)',
                }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2"
              >
                Subscribe
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-sage-green)' }}
              >
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold" style={{ color: 'var(--color-off-white)' }}>
                Qeirex
              </span>
            </div>

            <p className="text-sm md:text-base" style={{ color: 'rgba(167, 176, 166, 0.85)' }}>
              Premium herbal blends rooted in Ayurvedic wisdom. Ancient herbs for modern rituals.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(123, 170, 127, 0.15)',
                    color: 'var(--color-sage-green)',
                  }}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-bold" style={{ color: 'var(--color-off-white)' }}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-sm md:text-base transition-colors duration-300 group"
                      style={{ color: 'rgba(167, 176, 166, 0.85)' }}
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link}
                      </span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: 'var(--color-sage-green)' }} />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold" style={{ color: 'var(--color-off-white)' }}>
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:qeirex@gmail.com"
                className="flex items-center gap-3 text-sm md:text-base group transition-colors duration-300"
                style={{ color: 'rgba(167, 176, 166, 0.85)' }}
              >
                <Mail className="w-5 h-5" style={{ color: 'var(--color-sage-green)' }} />
                <span className="group-hover:text-sage-green transition-colors duration-300">
                  qeirex@gmail.com
                </span>
              </a>
              <a
                href="tel:+919999999999"
                className="flex items-center gap-3 text-sm md:text-base group transition-colors duration-300"
                style={{ color: 'rgba(167, 176, 166, 0.85)' }}
              >
                <Phone className="w-5 h-5" style={{ color: 'var(--color-sage-green)' }} />
                <span className="group-hover:text-sage-green transition-colors duration-300">
                  +91 (XXX) XXX-XXXX
                </span>
              </a>
            </div>
            <p className="text-xs mt-4" style={{ color: 'rgba(167, 176, 166, 0.6)' }}>
              Response time: Within 24 hours
              <br />
              Available Mon-Fri: 9AM - 6PM IST
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t"
          style={{ borderColor: 'rgba(123, 170, 127, 0.2)' }}
        >
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm md:text-base">
            <p style={{ color: 'rgba(167, 176, 166, 0.7)' }}>
              © {currentYear} Qeirex. All rights reserved.
            </p>

            <div className="flex gap-6" style={{ color: 'rgba(167, 176, 166, 0.7)' }}>
              <a href="#" className="hover:text-sage-green transition-colors duration-300">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-sage-green transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-sage-green transition-colors duration-300">
                Herbal Disclaimer
              </a>
            </div>
          </div>

          {/* Brand Message */}
          <p 
            className="text-center text-xs md:text-sm mt-6 pt-6"
            style={{ 
              color: 'rgba(123, 170, 127, 0.6)',
              borderTop: '1px solid rgba(123, 170, 127, 0.1)',
            }}
          >
            Crafted with intention. Made with love. Rooted in ancient wisdom, designed for modern living.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

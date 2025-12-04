// src/components/Footer.tsx
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, Leaf } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-natural-header border-t border-natural">
      <div className="container-natural py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-accent-primary p-2 rounded-lg">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-natural-primary">Qeirex</span>
            </div>
            <p className="text-natural-secondary">
              AYURVEDA, VEGAN, PREMIUM MIXED NATURAL
              <br />
              Herbal Alternative
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-natural-secondary hover:text-accent-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-natural-secondary hover:text-accent-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-natural-secondary hover:text-accent-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-natural-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About us', 'Terms & conditions', 'Privacy policy', 'FAQ', 'Shipping & Returns'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-natural-secondary hover:text-accent-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold text-natural-primary mb-4">Customer Support</h3>
            <p className="text-natural-secondary mb-4">
              We're here to help! Reach out to us anytime.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:qeirex@gmail.com"
                className="flex items-center space-x-2 text-natural-secondary hover:text-natural-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>qeirex@gmail.com</span>
              </a>
              <button className="flex items-center space-x-2 text-accent-primary hover:text-accent-secondary transition-colors">
                <Phone className="w-4 h-4" />
                <span>Contact Support</span>
              </button>
            </div>
            <p className="text-sm text-natural-secondary mt-4">
              Response time: Within 24 hours
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-natural-primary mb-4">Newsletter</h3>
            <p className="text-natural-secondary mb-4">
              Subscribe for exclusive offers and updates
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="input-natural"
              />
              <button
                type="submit"
                className="btn-natural-primary w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-natural mt-8 pt-8 text-center text-natural-secondary">
          <p>© {currentYear} Qeirex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
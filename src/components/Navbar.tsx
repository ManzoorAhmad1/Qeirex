'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingCart, User, Menu, X, Leaf } from 'lucide-react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { toggleCart, selectCartItemCount } from '@/store/slices/cartSlice'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()
  const cartItemCount = useSelector(selectCartItemCount)
  const pathname = usePathname() // Get current path

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ]

  const handleCartClick = () => {
    dispatch(toggleCart())
  }

  // Function to check if link is active
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-40 bg-natural-header border-b border-natural">
      <div className="container-natural py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="w-10 h-10 bg-accent-primary rounded-lg flex items-center justify-center"
            >
              <Leaf className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-natural-primary">
              Qeirex
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-link-natural relative group ${
                    isActive ? 'text-accent-primary font-semibold' : ''
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-accent-primary transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Cart with Redux */}
            <button 
              onClick={handleCartClick}
              className="p-2 rounded-full hover:bg-accent-10 transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5 text-natural-secondary" />
              {cartItemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-accent-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {cartItemCount > 9 ? '9+' : cartItemCount}
                </motion.span>
              )}
            </button>

            {/* User */}
            <Link
              href="/auth/login"
              className="p-2 rounded-full hover:bg-accent-10 transition-colors"
            >
              <User className="w-5 h-5 text-natural-secondary" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-natural-primary" />
              ) : (
                <Menu className="w-6 h-6 text-natural-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 border-t border-natural pt-4 space-y-2"
          >
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block py-2 px-4 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-accent-10 text-accent-primary font-semibold'
                      : 'nav-link-natural hover:bg-accent-10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            })}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
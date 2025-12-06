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
    <nav
      className="sticky top-0 z-40 border-b"
      style={{
        backgroundColor: 'var(--color-dark-bg)',
        borderColor: 'transparent',
      }}
    >
      <div className="container-natural py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-sage-green)' }}
            >
              <Leaf className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold" style={{ color: 'var(--color-deep-herbal)' }}>
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
                  className="nav-link relative group font-medium transition-colors duration-300"
                  style={{
                    color: isActive ? 'var(--color-sage-green)' : 'var(--color-soft-grey)',
                  }}
                >
                  {link.name}
                  <span
                    className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--color-sage-green)',
                      width: isActive ? '100%' : '0',
                    }}
                  />
                </Link>
              )
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">

            {/* Cart with Redux */}
            <button
              onClick={handleCartClick}
              className="p-2 rounded-full transition-colors relative"
              style={{
                color: 'black',
                backgroundColor: 'rgba(230, 220, 197, 0.3)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(123, 170, 127, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(230, 220, 197, 0.3)'}
            >
              <ShoppingCart className="w-5 h-5 " style={{
                color: 'var(--color-soft-grey)',
              }} />
              {cartItemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1  text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                  style={{ backgroundColor: 'var(--color-sage-green)' }}
                >
                  {cartItemCount > 9 ? '9+' : cartItemCount}
                </motion.span>
              )}
            </button>

            {/* User */}
            <Link
              href="/auth/login"
              className="p-2 rounded-full transition-colors"
              style={{
                color: 'black',
                backgroundColor: 'rgba(230, 220, 197, 0.3)',
              }}
              onMouseEnter={(e: any) => e.style.backgroundColor = 'rgba(123, 170, 127, 0.1)'}
              onMouseLeave={(e: any) => e.style.backgroundColor = 'rgba(230, 220, 197, 0.3)'}
            >
              <User className="w-5 h-5 " style={{
                color: 'var(--color-soft-grey)',
              }} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              style={{ color: 'var(--color-deep-herbal)' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 " style={{
                  color: 'var(--color-soft-grey)',
                }} />
              ) : (
                <Menu className="w-6 h-6 " style={{
                  color: 'var(--color-soft-grey)',
                }} />
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
            className="md:hidden mt-4 pb-4 border-t pt-4 space-y-2"
            style={{ borderColor: 'rgba(230, 220, 197, 0.3)' }}
          >
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-2 px-4 rounded-lg transition-colors font-medium"
                  style={{
                    color: isActive ? 'white' : 'var(--color-soft-grey)',
                    backgroundColor: isActive ? 'var(--color-sage-green)' : 'transparent',
                  }}
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
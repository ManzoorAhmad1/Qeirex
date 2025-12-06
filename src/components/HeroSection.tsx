// src/components/HeroSection.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { ArrowRight, Coffee, Sprout, Bath, Wind, ChevronLeft, ChevronRight, Leaf } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const heroIcons = [
    { icon: Coffee, text: 'Herbal Coffee Blend' },
    { icon: Sprout, text: 'Detox Herbal Mix' },
    { icon: Bath, text: 'Bath Herbs' },
    { icon: Wind, text: 'Smoking Mix' },
    { icon: ArrowRight, text: '100% Natural Ingredients' },
  ]

  const sliderContent = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      title: 'Herbal Coffee Blend',
      description: 'For cleaner, smoother sessions with natural energy boost',
      category: 'Wellness',
      icon: Coffee,
      link: '/shop?category=coffee'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1711749108302-afb82b0d7693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Detox Herbal Mix',
      description: 'A gentle, effective blend for natural cleansing and renewal',
      category: 'Detox',
      icon: Sprout,
      link: '/shop?category=detox'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1723885182679-4a3a392c8e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Bath Herbs',
      description: 'For calm, clean, and natural skin care rituals',
      category: 'Relaxation',
      icon: Bath,
      link: '/shop?category=bath'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Smoking Mix',
      description: 'Premium herbal smoking blends for mindful moments',
      category: 'Rituals',
      icon: Wind,
      link: '/shop?category=smoking'
    }
  ]

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

  // Autoplay effect
  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderContent.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoplay, sliderContent.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderContent.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderContent.length) % sliderContent.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Function to handle category card click
  const handleCategoryClick = (categoryName: string) => {
    // Find the index of the category in sliderContent
    const index = sliderContent.findIndex(slide => 
      slide.title.toLowerCase().includes(categoryName.toLowerCase())
    );
    
    if (index !== -1) {
      setCurrentSlide(index);
      // keep autoplay running when switching via category cards
    }
  }

  const scrollToCategories = () => {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Keyboard handler kept, but wheel & drag navigation removed to match request
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide()
    if (e.key === 'ArrowRight') nextSlide()
  }

  return (
    <section className="relative overflow-hidden">
      {/* Full Width Image Slider */}
      <div
        className="relative h-[80vh] min-h-[700px] max-h-[900px] w-full"
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-roledescription="carousel"
        role="region"
        aria-label="Hero slider carousel"
      >
          {sliderContent.map((slide, index) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 1 }}
              className={`absolute inset-0 ${currentSlide === index ? 'z-10' : 'z-0'}`}
            >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </motion.div>
        ))}
        {/* slides mapped directly without drag wrapper */}
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl pointer-events-auto"
          style={{
            backgroundColor: 'rgba(123, 170, 127, 0.95)',
            color: 'white',
            backdropFilter: 'blur(10px)'
          }}
          aria-label="Previous slide"
          title="Previous slide"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl pointer-events-auto"
          style={{
            backgroundColor: 'rgba(123, 170, 127, 0.95)',
            color: 'white',
            backdropFilter: 'blur(10px)'
          }}
          aria-label="Next slide"
          title="Next slide"
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        {/* Slide Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="container-natural mx-auto px-4 md:px-8">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl"
            >
              {/* Category Badge with Icon */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="p-3 rounded-full"
                  style={{ backgroundColor: 'rgba(123, 170, 127, 0.9)' }}>
                  {/* <sliderContent[currentSlide].icon className="w-6 h-6 text-white" /> */}
                </div>
                <div
                  className="px-5 py-2 rounded-full text-sm font-semibold tracking-wide uppercase"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: 'var(--color-off-white)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {sliderContent[currentSlide].category}
                </div>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
              >
                {sliderContent[currentSlide].title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed"
              >
                {sliderContent[currentSlide].description}
              </motion.p>

              {/* Quick Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href={sliderContent[currentSlide].link}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:gap-4 hover:shadow-2xl"
                  style={{
                    backgroundColor: 'var(--color-sage-green)',
                    color: 'white'
                  }}
                >
                  Explore {sliderContent[currentSlide].title}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {sliderContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group flex flex-col items-center gap-2"
            >
              <div
                className={`rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-10' : 'w-3'
                } h-3 group-hover:w-8`}
                style={{
                  backgroundColor: currentSlide === index 
                    ? 'var(--color-sage-green)' 
                    : 'rgba(255, 255, 255, 0.5)',
                }}
              />
              <span className={`text-xs font-medium transition-all duration-300 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ color: 'var(--color-sage-green)' }}>
                {index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Categories Cards Section */}
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
            
            <p className="section-subtitle max-w-3xl mx-auto" style={{ color: 'var(--color-dark-bg)' }}>
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
                <div 
                  onClick={() => handleCategoryClick(category.name)}
                  className="cursor-pointer rounded-3xl p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl"
                  style={{
                    backgroundColor: currentSlide === index ? 'var(--color-sage-green)' : 'var(--color-warm-beige)',
                    boxShadow: '0 4px 12px rgba(62, 107, 72, 0.08)',
                    border: `1px solid ${
                      currentSlide === index 
                      ? 'var(--color-sage-green)' 
                      : 'rgba(123, 170, 127, 0.1)'
                    }`,
                  }}
                >
                  {/* Icon Circle */}
                  <motion.div 
                    className="mb-6 w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: currentSlide === index 
                        ? 'rgba(255, 255, 255, 0.2)' 
                        : 'rgba(123, 170, 127, 0.1)',
                      borderRadius: '20px',
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <category.icon 
                      className="w-10 h-10 transition-all duration-300"
                      style={{ 
                        color: currentSlide === index 
                          ? 'white' 
                          : 'var(--color-deep-herbal)',
                        strokeWidth: 1.5 
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-3" 
                      style={{ 
                        color: currentSlide === index 
                          ? 'white' 
                          : 'var(--color-deep-herbal)' 
                      }}>
                      {category.name}
                    </h3>
                    
                    <p className="text-base" 
                      style={{ 
                        color: currentSlide === index 
                          ? 'rgba(255, 255, 255, 0.9)' 
                          : 'black' 
                      }}>
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
                      style={{ 
                        color: currentSlide === index 
                          ? 'white' 
                          : 'var(--color-sage-green)' 
                      }}
                    />
                  </motion.div>
                </div>
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

      {/* Feature Icons Section */}
      <div className="relative" style={{ backgroundColor: 'var(--color-dark-bg)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-5"
            style={{ backgroundColor: 'var(--color-sage-green)' }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-5"
            style={{ backgroundColor: 'var(--color-warm-beige)' }}
          />
        </div>

        <div className="relative z-10 py-16 md:py-20">
          <div className="container-natural">
            {/* Feature Icons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-8 md:gap-12"
            >
              {heroIcons.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ 
                      backgroundColor: 'rgba(123, 170, 127, 0.1)',
                      border: '1px solid rgba(123, 170, 127, 0.3)'
                    }}>
                    <feature.icon className="w-7 h-7" style={{ color: 'var(--color-sage-green)' }} />
                  </div>
                  <span className="text-sm font-medium text-center max-w-[150px]" 
                    style={{ color: 'var(--color-warm-beige)' }}>
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Main CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center mt-12 md:mt-16"
            >
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-light" style={{ color: 'var(--color-warm-beige)' }}>
                  Ancient Wisdom. Modern Wellness.
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/shop"
                      className="btn-primary"
                    >
                      Shop All Collections
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <button
                      onClick={scrollToCategories}
                      className="btn-secondary"
                    >
                      View Categories
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1" 
          style={{ 
            background: 'linear-gradient(90deg, transparent, var(--color-sage-green), transparent)',
            opacity: 0.5
          }} 
        />
      </div>
    </section>
  )
}
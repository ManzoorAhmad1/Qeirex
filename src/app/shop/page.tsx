// src/app/shop/page.tsx
'use client'

import { Suspense } from 'react'
import FeaturedProducts from '@/components/FeaturedProducts'

// Loading Component
function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-accent-20 border-t-accent-primary rounded-full animate-spin mx-auto mb-4"></div>
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
      <div className="bg-herbal-gradient py-16">
        <div className="container-natural text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-natural-primary mb-4">
            Shop Premium Herbal Blends
          </h1>
          <p className="text-xl text-natural-secondary max-w-3xl mx-auto">
            Discover our carefully crafted herbal alternatives for a mindful, tobacco-free lifestyle
          </p>
        </div>
      </div>

      {/* Featured Products with Suspense for URL params */}
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturedProducts />
      </Suspense>

      {/* Categories Summary */}
      <div className="section-padding bg-natural-secondary">
        <div className="container-natural">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Explore Our Categories
            </h2>
            <p className="section-subtitle">
              Each category offers unique benefits for your wellness journey
            </p>
          </div>

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
              <a
                key={index}
                href={category.link}
                className="card-natural-hover p-6 text-center"
              >
                <div className="w-12 h-12 bg-accent-20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-natural-primary mb-2">
                  {category.title}
                </h3>
                <p className="text-natural-secondary">
                  {category.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
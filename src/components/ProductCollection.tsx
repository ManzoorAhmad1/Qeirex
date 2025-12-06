// src/components/ProductCollection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle, Coffee, Leaf, Bath, Wind, ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Coffee Blend',
    tagline: 'For cleaner sessions',
    description: 'Our premium coffee blend is crafted from 100% natural herbs that provide a rich, aromatic experience without caffeine jitters. Perfect for those seeking a cleaner, healthier alternative to traditional coffee.',
    icon: Coffee,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    image: 'https://images.unsplash.com/photo-1711749108302-afb82b0d7693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    benefits: [
      'Natural energy boost without caffeine crash',
      'Rich, smooth flavor profile',
      'Antioxidant-rich ingredients',
      'Supports digestive health'
    ],
    usage: 'Add 1-2 teaspoons to a cup of hot water (90-95°C), steep for 5-7 minutes, strain and enjoy',
    bestFor: ['Morning rituals', 'Social gatherings', 'Meditation sessions']
  },
  {
    id: 2,
    name: 'Detoxification Mix',
    tagline: 'Detoxification mix',
    description: 'A carefully formulated blend of cleansing herbs designed to support your body\'s natural detoxification processes. This powerful mix helps eliminate toxins while nourishing your system.',
    icon: Leaf,
    color: 'from-emerald-500 to-green-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
    image: 'https://images.unsplash.com/photo-1723885182679-4a3a392c8e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    benefits: [
      'Supports liver and kidney function',
      'Promotes healthy digestion',
      'Boosts immune system',
      'Reduces inflammation naturally'
    ],
    usage: 'Mix 1 tablespoon with warm water or herbal tea, consume twice daily',
    bestFor: ['Seasonal cleanses', 'Digestive health', 'Immune support']
  },
  {
    id: 3,
    name: 'Bath Herbs',
    tagline: 'For healthy & clean skin',
    description: 'Transform your bathing routine into a luxurious spa experience with our aromatic bath herb blend. Specially selected botanicals nourish skin while providing deep relaxation.',
    icon: Bath,
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50 dark:bg-rose-900/20',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    benefits: [
      'Deeply moisturizes and softens skin',
      'Reduces stress and promotes relaxation',
      'Soothes muscle tension and aches',
      'Natural aromatherapy benefits'
    ],
    usage: 'Add 3-4 tablespoons to warm bath water, soak for 20-30 minutes',
    bestFor: ['Evening relaxation', 'Skin care routines', 'Self-care rituals']
  },
  {
    id: 4,
    name: 'Smoking Mix',
    tagline: 'Premium herbal smoking blends',
    description: 'A premium herbal smoking blend that offers a satisfying ritual without tobacco or nicotine. Carefully curated herbs provide a smooth, flavorful experience for conscious consumers.',
    icon: Wind,
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50 dark:bg-violet-900/20',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    benefits: [
      '100% tobacco and nicotine-free',
      'Smooth flavorful smoke',
      'Calming and grounding effects',
      'Supports mindful relaxation'
    ],
    usage: 'Use as you would traditional smoking blends, roll with natural papers or use in a pipe',
    bestFor: ['Social occasions', 'Evening wind-down', 'Mindful moments']
  }
]

export default function ProductCollection() {
  return (
    <section className="section-padding bg-gradient-to-b from-natural-primary to-natural-secondary">
      <div className="container-natural">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-natural mb-4">
            <Leaf className="w-4 h-4 mr-2" />
            PREMIUM COLLECTION
          </span>
          
          <h2 className="section-title mb-6">
            Our <span className="text-accent-primary">Product</span> Collection
          </h2>
          
          <p className="section-subtitle">
            Discover the unique benefits and proper usage of each carefully crafted blend
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="space-y-24">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Image Column */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  
                  {/* Product Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {product.name}
                        </h3>
                        <p className="text-white/80 font-medium">
                          {product.tagline}
                        </p>
                      </div>
                      <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                        <span className="ml-2 text-white font-semibold">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-10 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-warm-beige rounded-full opacity-10 blur-xl" />
              </div>

              {/* Content Column */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent-10 text-accent-primary text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Premium Quality
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-natural-primary mb-4">
                  {product.name}
                </h3>
                
                <p className="text-lg text-black mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-natural-primary mb-4 flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-natural-secondary">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Usage Instructions */}
                <div className="mb-8 p-6 bg-natural-card rounded-2xl border border-natural">
                  <h4 className="text-xl font-semibold text-natural-primary mb-3 flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    How to Use for Best Results
                  </h4>
                  <p className="text-black">
                    {product.usage}
                  </p>
                </div>

                {/* Best For Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="text-natural-primary font-medium">Best for:</span>
                  {product.bestFor.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full bg-secondary text-accent text-sm font-medium border border-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/shop/${product.id}`}
                    className="btn-natural-primary flex items-center justify-center group"
                  >
                    Shop Now
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="btn-natural-outline">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-16 border-t border-natural"
        >
          <Link
            href="/shop"
            className="btn-natural-primary px-10 py-4 text-lg inline-flex items-center group"
          >
            <span>View All Products</span>
            <ChevronRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
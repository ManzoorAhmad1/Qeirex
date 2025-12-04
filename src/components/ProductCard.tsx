// src/components/ProductCard.tsx
'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Star } from 'lucide-react'
import { useState } from 'react'

interface ProductCardProps {
  id: string
  name: string
  category: string
  price: number
  image: string
  rating: number
}

export default function ProductCard({ product }: { product: ProductCardProps }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="product-card-natural"
    >
      {/* Product Image */}
      <div className="h-48 w-full bg-accent-5 flex items-center justify-center">
        {/* Add your product image here */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-accent-10"></div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="badge-natural">
            {product.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-accent-20 backdrop-blur-sm px-2 py-1 rounded-lg border border-accent-10">
          <div className="flex items-center space-x-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium text-natural-primary">{product.rating}</span>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <h3 className="font-semibold text-natural-primary line-clamp-1 hover:text-accent-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-natural-primary">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-natural-secondary">per unit</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
              isHovered 
                ? 'bg-accent-primary text-white' 
                : 'bg-accent-10 text-natural-secondary'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
          </motion.button>
        </div>

        {/* View Details Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="w-full py-2 text-sm font-medium text-accent-primary hover:text-accent-secondary transition-colors"
        >
          View Details →
        </motion.button>
      </div>
    </motion.div>
  )
}
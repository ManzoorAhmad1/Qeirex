'use client'

import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { addToCart, openCart } from '@/store/slices/cartSlice'
import { ShoppingCart, Leaf, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    image?: string
    description?: string
    category?: string
  }
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      category: product.category
    }))
    dispatch(openCart())
  }

  const tags = ['Herbal', 'No Nicotine', 'Ayurveda Inspired']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="rounded-[32px] overflow-hidden transition-all duration-300 h-full flex flex-col"
      style={{
        backgroundColor: 'white',
        boxShadow: '0 20px 40px rgba(62, 107, 72, 0.12), 0 8px 16px rgba(62, 107, 72, 0.08)',
      }}
    >
      {/* Product Image Container */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br" style={{ backgroundColor: 'rgba(230, 220, 197, 0.5)' }}>
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Leaf className="w-20 h-20" style={{ color: 'var(--color-sage-green)', opacity: 0.3 }} />
          </div>
        )}
        
        {/* Premium Badge */}
        <motion.div 
          className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full backdrop-blur-sm"
          style={{
            backgroundColor: 'rgba(123, 170, 127, 0.9)',
            color: 'white',
          }}
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-xs font-semibold">Premium</span>
        </motion.div>
      </div>
      
      {/* Product Info */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'var(--color-deep-herbal)' }}>
          {product.name}
        </h3>

        <p className="text-sm mb-4 line-clamp-2" style={{ color: 'black' }}>
          {product.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span 
              key={idx}
              className="text-xs px-2 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(123, 170, 127, 0.12)',
                color: 'var(--color-deep-herbal)',
                fontWeight: '500',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price & Button */}
        <div className="mt-auto flex items-center justify-between gap-3">
          <div>
            <span className="text-2xl font-bold" style={{ color: 'var(--color-sage-green)' }}>
              ${product.price.toFixed(2)}
            </span>
          </div>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleAddToCart}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-medium text-white transition-all duration-300"
            style={{ backgroundColor: 'var(--color-sage-green)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-deep-herbal)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-sage-green)'}
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm">Add</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
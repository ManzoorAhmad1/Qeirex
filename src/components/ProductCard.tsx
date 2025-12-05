'use client'

import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { addToCart, openCart } from '@/store/slices/cartSlice'
import { ShoppingCart, Leaf } from 'lucide-react'
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-natural-primary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Product Image */}
      <div className="h-48 bg-gradient-to-br from-accent-10 to-natural-secondary relative overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Leaf className="w-16 h-16 text-accent-primary" />
          </div>
        )}
        
        {/* Category Badge */}
        {product.category && (
          <span className="absolute top-3 left-3 bg-accent-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium">
            {product.category}
          </span>
        )}
      </div>
      
      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-natural-primary mb-2">
          {product.name}
        </h3>
        <p className="text-natural-secondary mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-accent-primary">
              ${product.price.toFixed(2)}
            </span>
          </div>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-accent-primary text-white px-4 py-2 rounded-lg hover:bg-accent-primary/90 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
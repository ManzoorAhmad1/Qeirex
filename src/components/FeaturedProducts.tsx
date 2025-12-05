'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Star, Heart, Eye, Filter } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { addToCart, openCart } from '@/store/slices/cartSlice'

const products = [
  {
    id: 'prod_1',
    name: 'Coffee Blend',
    category: 'COFFEE',
    description: 'For cleaner sessions',
    price: 22.99,
    rating: 4.8,
    reviews: 128,
    image: '/products/coffee-blend.jpg',
    tags: ['Best Seller'],
    inStock: true,
  },
  {
    id: 'prod_2',
    name: 'Espresso Blend',
    category: 'COFFEE',
    description: 'Rich coffee flavor',
    price: 23.99,
    rating: 4.7,
    reviews: 98,
    image: '/products/espresso-blend.jpg',
    tags: ['New'],
    inStock: true,
  },
  {
    id: 'prod_3',
    name: 'Detoxification Mix',
    category: 'DETOX',
    description: 'Natural cleansing blend',
    price: 24.99,
    rating: 4.8,
    reviews: 145,
    image: '/products/detox-mix.jpg',
    tags: ['Best Seller'],
    inStock: true,
  },
  {
    id: 'prod_4',
    name: 'Green Vitality',
    category: 'DETOX',
    description: 'Energizing herbal blend',
    price: 26.99,
    rating: 4.8,
    reviews: 112,
    image: '/products/green-vitality.jpg',
    tags: ['Popular'],
    inStock: true,
  },
  {
    id: 'prod_5',
    name: 'Rose Petal Spa',
    category: 'BATH',
    description: 'Luxurious bath experience',
    price: 31.99,
    rating: 4.9,
    reviews: 203,
    image: '/products/rose-petal-spa.jpg',
    tags: ['Premium'],
    inStock: true,
  },
  {
    id: 'prod_6',
    name: 'Lavender Dreams',
    category: 'BATH',
    description: 'Relaxing herbal blend',
    price: 22.99,
    rating: 4.7,
    reviews: 94,
    image: '/products/lavender-dreams.jpg',
    tags: ['Popular'],
    inStock: true,
  },
  {
    id: 'prod_7',
    name: 'Premium Smoking Blend',
    category: 'SMOKING',
    description: 'Smooth herbal experience',
    price: 28.99,
    rating: 4.9,
    reviews: 187,
    image: '/products/smoking-blend.jpg',
    tags: ['Best Seller'],
    inStock: true,
  },
  {
    id: 'prod_8',
    name: 'Calming Mix',
    category: 'SMOKING',
    description: 'Relaxing smoking blend',
    price: 26.99,
    rating: 4.6,
    reviews: 89,
    image: '/products/calming-mix.jpg',
    tags: ['New'],
    inStock: true,
  },
]

const categories = ['All', 'COFFEE', 'DETOX', 'BATH', 'SMOKING']

interface FeaturedProductsProps {
  initialCategory?: string
}

export default function FeaturedProducts({ initialCategory = 'All' }: FeaturedProductsProps) {
  const dispatch = useDispatch<AppDispatch>()
  const searchParams = useSearchParams()
  const urlCategory = searchParams.get('category')
  
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    // Check for category in URL parameters
    if (urlCategory && categories.map(c => c.toLowerCase()).includes(urlCategory.toLowerCase())) {
      setActiveCategory(urlCategory.toUpperCase())
    }
  }, [urlCategory])

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    )
  }

  const getCategoryDescription = (category: string) => {
    switch(category) {
      case 'COFFEE':
        return 'Premium herbal coffee alternatives for cleaner sessions'
      case 'DETOX':
        return 'Natural detoxification blends for body cleansing'
      case 'BATH':
        return 'Luxurious bath herbs for healthy and clean skin'
      case 'SMOKING':
        return 'Premium herbal smoking blends without tobacco'
      default:
        return 'Discover our carefully crafted herbal blends across all categories'
    }
  }

  const handleAddToCart = (product: typeof products[0]) => {
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
    <section className="section-padding bg-natural-primary">
      <div className="container-natural">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge-light mb-4">
            <Star className="w-4 h-4 mr-2" />
            {activeCategory === 'All' ? 'Featured Products' : `${activeCategory} Collection`}
          </span>
          
          <h2 className="section-title mb-4">
            {activeCategory === 'All' 
              ? 'Shop Our Premium Collections' 
              : `${activeCategory} Herbal Blends`}
          </h2>
          
          <p className="section-subtitle">
            {getCategoryDescription(activeCategory)}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <div className="flex items-center px-4 py-2 bg-natural-card rounded-full shadow-sm border border-natural mr-2">
            <Filter className="w-4 h-4 text-natural-secondary mr-2" />
            <span className="text-sm font-medium text-natural-secondary">
              Filter:
            </span>
          </div>
          
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'btn-natural-primary'
                  : 'bg-natural-card text-natural-secondary hover:bg-natural-secondary border border-natural'
              }`}
            >
              {category === 'All' ? 'All Products' : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Count */}
        <div className="mb-8 text-center">
          <p className="text-natural-secondary">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
          </p>
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  layout
                >
                  <div className="product-card-natural">
                    {/* Product Image */}
                    <div className="h-64 w-full bg-accent-5 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full bg-accent-10 flex items-center justify-center">
                        <span className="text-accent-primary text-4xl">🌿</span>
                      </div>
                      
                      {/* Tags */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {product.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="badge-natural"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Actions */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleFavorite(product.id)}
                          className="card-glass w-10 h-10 flex items-center justify-center"
                        >
                          <Heart
                            className={`w-5 h-5 ${
                              favorites.includes(product.id)
                                ? 'fill-red-500 text-red-500'
                                : 'text-natural-secondary'
                            }`}
                          />
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="card-glass w-10 h-10 flex items-center justify-center"
                        >
                          <Eye className="w-5 h-5 text-natural-secondary" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="badge-natural">
                          {product.category}
                        </span>
                        
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-bold text-natural-primary">
                            {product.rating}
                          </span>
                          <span className="text-xs text-natural-secondary">
                            ({product.reviews})
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-natural-primary mb-2 hover:text-accent-primary transition-colors">
                        {product.name}
                      </h3>
                      
                      <p className="text-natural-secondary text-sm mb-4">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-natural-primary">
                            ${product.price.toFixed(2)}
                          </p>
                          <p className="text-sm text-natural-secondary">
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                          </p>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleAddToCart(product)}
                          className="btn-natural-light text-sm px-4 py-2"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4 text-accent-primary">🌿</div>
                <h3 className="text-2xl font-bold text-natural-primary mb-2">
                  No Products Found
                </h3>
                <p className="text-natural-secondary mb-6">
                  We couldn't find any products in this category. Please try another category.
                </p>
                <button
                  onClick={() => setActiveCategory('All')}
                  className="btn-natural-primary"
                >
                  View All Products
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
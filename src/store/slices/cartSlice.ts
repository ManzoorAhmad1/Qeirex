import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: string
  name: string
  price: number
  image?: string
  description?: string
  quantity: number
  category?: string
}

interface CartState {
  items: CartItem[]
  isCartOpen: boolean
  total: number
}

const initialState: CartState = {
  items: [],
  isCartOpen: false,
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        })
      }
      state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    },
    
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    },
    
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload
      const item = state.items.find(item => item.id === id)
      
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(item => item.id !== id)
        } else {
          item.quantity = quantity
        }
      }
      state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    },
    
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen
    },
    
    openCart: (state) => {
      state.isCartOpen = true
    },
    
    closeCart: (state) => {
      state.isCartOpen = false
    },
    
    clearCart: (state) => {
      state.items = []
      state.total = 0
    },
    
    initializeCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload
      state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    },
  },
})

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  toggleCart, 
  openCart, 
  closeCart,
  clearCart,
  initializeCart
} = cartSlice.actions

export const selectCartItems = (state: { cart: CartState }) => state.cart.items
export const selectCartTotal = (state: { cart: CartState }) => state.cart.total
export const selectCartItemCount = (state: { cart: CartState }) => 
  state.cart.items.reduce((count, item) => count + item.quantity, 0)
export const selectIsCartOpen = (state: { cart: CartState }) => state.cart.isCartOpen

export default cartSlice.reducer
// src/app/auth/login/page.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@/lib/validations/auth'
import { z } from 'zod'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, Leaf, ArrowRight, Smartphone, AlertCircle } from 'lucide-react'
import Image from 'next/image'

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showOtp, setShowOtp] = useState(false)
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    try {
      console.log('Login data:', data)
      // Show OTP input for phone login
      if (data.email.includes('@')) {
        // Email login
        // API call here
      } else {
        // Phone login - show OTP
        setShowOtp(true)
      }
    } catch (error) {
      setError('root', {
        message: 'Invalid credentials. Please try again.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    
    // Auto focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      nextInput?.focus()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container-natural py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-md mx-auto w-full"
          >
            {/* Logo */}
            <div className="text-center mb-8">
              <Link href="/" className="inline-flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold text-natural-primary">
                  Qeirex
                </span>
              </Link>
              <p className="text-natural-secondary mt-2">
                Premium Herbal Alternatives
              </p>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-natural p-8 shadow-xl">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-natural-primary mb-2">
                  Welcome Back
                </h1>
                <p className="text-natural-secondary">
                  Sign in to your account to continue
                </p>
              </div>

              {!showOtp ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Email/Phone Input */}
                  <div>
                    <label className="block text-natural-primary font-medium mb-2">
                      Email or Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        {errors.email ? (
                          <AlertCircle className="w-5 h-5 text-rose-500" />
                        ) : (
                          <Mail className="w-5 h-5 text-natural-secondary" />
                        )}
                      </div>
                      <input
                        type="text"
                        placeholder="Enter email or phone"
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                          errors.email 
                            ? 'border-rose-500 focus:ring-rose-500' 
                            : 'border-natural focus:ring-emerald-500'
                        } bg-transparent text-natural-primary placeholder:text-natural-secondary focus:outline-none focus:ring-2`}
                        {...register('email')}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-sm text-rose-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Password Input */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-natural-primary font-medium">
                        Password
                      </label>
                      <Link
                        href="/auth/forgot-password"
                        className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        {errors.password ? (
                          <AlertCircle className="w-5 h-5 text-rose-500" />
                        ) : (
                          <Lock className="w-5 h-5 text-natural-secondary" />
                        )}
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        className={`w-full pl-12 pr-12 py-3 rounded-xl border ${
                          errors.password 
                            ? 'border-rose-500 focus:ring-rose-500' 
                            : 'border-natural focus:ring-emerald-500'
                        } bg-transparent text-natural-primary placeholder:text-natural-secondary focus:outline-none focus:ring-2`}
                        {...register('password')}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-natural-secondary hover:text-natural-primary"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="mt-2 text-sm text-rose-500">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  {/* Remember Me */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      className="w-4 h-4 text-emerald-600 rounded border-natural focus:ring-emerald-500"
                      {...register('rememberMe')}
                    />
                    <label htmlFor="rememberMe" className="ml-2 text-natural-secondary text-sm">
                      Remember me for 30 days
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Sign In
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-natural"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white dark:bg-slate-800 text-natural-secondary">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  {/* OTP Login Button */}
                  <button
                    type="button"
                    onClick={() => setShowOtp(true)}
                    className="w-full border border-natural hover:border-emerald-500 text-natural-primary py-3 rounded-xl font-medium transition-colors flex items-center justify-center"
                  >
                    <Smartphone className="w-5 h-5 mr-2" />
                    Login with OTP
                  </button>

                  {/* Error Message */}
                  {errors.root && (
                    <div className="p-3 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-700 rounded-xl">
                      <p className="text-rose-600 dark:text-rose-400 text-sm">
                        {errors.root.message}
                      </p>
                    </div>
                  )}
                </form>
              ) : (
                /* OTP Verification */
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-natural-primary mb-2">
                      Enter OTP
                    </h3>
                    <p className="text-natural-secondary">
                      We've sent a 6-digit code to your phone
                    </p>
                  </div>

                  {/* OTP Inputs */}
                  <div className="flex justify-center gap-3 mb-6">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        className="w-12 h-12 text-center text-2xl font-bold border-2 border-natural rounded-lg bg-transparent text-natural-primary focus:border-emerald-500 focus:outline-none"
                      />
                    ))}
                  </div>

                  {/* Resend OTP */}
                  <div className="text-center">
                    <p className="text-natural-secondary">
                      Didn't receive code?{' '}
                      <button className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
                        Resend OTP
                      </button>
                    </p>
                  </div>

                  {/* Verify Button */}
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition-colors">
                    Verify OTP
                  </button>

                  {/* Back to Email Login */}
                  <button
                    onClick={() => setShowOtp(false)}
                    className="w-full text-natural-secondary hover:text-natural-primary text-sm"
                  >
                    ← Back to email login
                  </button>
                </div>
              )}

              {/* Sign Up Link */}
              <div className="mt-8 text-center">
                <p className="text-natural-secondary">
                  Don't have an account?{' '}
                  <Link
                    href="/auth/signup"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                  >
                    Sign up now
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Herbal wellness"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500 rounded-full opacity-10 blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-amber-500 rounded-full opacity-10 blur-xl" />
              
              {/* Feature Cards */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-11/12">
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border border-natural shadow-xl">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: '🔐', label: 'Secure Login' },
                      { icon: '⚡', label: 'Fast OTP' },
                      { icon: '👑', label: 'Premium Access' }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <p className="text-sm font-medium text-natural-primary">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
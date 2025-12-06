// src/app/auth/signup/page.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signupSchema } from '@/lib/validations/auth'
import { z } from 'zod'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, User, Phone, Check, AlertCircle, Leaf, ArrowRight } from 'lucide-react'
import Image from 'next/image'

type SignupFormData = z.infer<typeof signupSchema>

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema)
  })

  const password = watch('password')

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true)
    try {
      console.log('Signup data:', data)
      // Send OTP to phone
      if (data.phone) {
        setOtpSent(true)
      }
    } catch (error) {
      setError('root', {
        message: 'Something went wrong. Please try again.'
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
    
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      nextInput?.focus()
    }
  }

  const verifyOtp = () => {
    // Verify OTP logic
    console.log('Verifying OTP:', otp.join(''))
  }

  return (
    <div style={{ backgroundColor: 'var(--color-off-white)', minHeight: '100vh' }}>
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
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--color-sage-green)' }}>
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold text-natural-primary">
                  Qeirex
                </span>
              </Link>
              <p className="text-natural-secondary mt-2">
                Create your account
              </p>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl border border-natural p-8 shadow-xl" style={{ borderColor: 'rgba(230, 220, 197, 0.5)' }}>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-natural-primary mb-2">
                  Join Qeirex
                </h1>
                <p className="text-natural-secondary">
                  Create account to explore premium herbal products
                </p>
              </div>

              {!otpSent ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-natural-primary font-medium mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        {errors.name ? (
                          <AlertCircle className="w-5 h-5 text-rose-500" />
                        ) : (
                          <User className="w-5 h-5 text-natural-secondary" />
                        )}
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                          errors.name 
                            ? 'border-rose-500 focus:ring-rose-500' 
                            : 'border-natural focus:ring-emerald-500'
                        } bg-transparent text-natural-primary placeholder:text-natural-secondary focus:outline-none focus:ring-2`}
                        {...register('name')}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-2 text-sm text-rose-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-natural-primary font-medium mb-2">
                      Email Address
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
                        type="email"
                        placeholder="Enter your email"
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                          errors.email 
                            ? 'border-rose-500 focus:ring-rose-500' 
                            : 'border-natural focus:ring-2'
                        } bg-transparent text-natural-primary placeholder:text-natural-secondary focus:outline-none`}
                        style={!errors.email ? { '--tw-ring-color': 'var(--color-sage-green)' } as React.CSSProperties : {}}
                        {...register('email')}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-sm text-rose-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-natural-primary font-medium mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        {errors.phone ? (
                          <AlertCircle className="w-5 h-5 text-rose-500" />
                        ) : (
                          <Phone className="w-5 h-5 text-natural-secondary" />
                        )}
                      </div>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                          errors.phone 
                            ? 'border-rose-500 focus:ring-rose-500' 
                            : 'border-natural focus:ring-2'
                        } bg-transparent text-natural-primary placeholder:text-natural-secondary focus:outline-none`}
                        style={!errors.phone ? { '--tw-ring-color': 'var(--color-sage-green)' } as React.CSSProperties : {}}
                        {...register('phone')}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-2 text-sm text-rose-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Password Input */}
                  <div>
                    <label className="block text-natural-primary font-medium mb-2">
                      Password
                    </label>
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
                        placeholder="Create a strong password"
                        className={`w-full pl-12 pr-12 py-3 rounded-xl border ${
                          errors.password 
                            ? 'border-rose-500 focus:ring-rose-500' 
                            : 'border-natural focus:ring-2'
                        } bg-transparent text-natural-primary placeholder:text-natural-secondary focus:outline-none`}
                        style={!errors.password ? { '--tw-ring-color': 'var(--color-sage-green)' } as React.CSSProperties : {}}
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
                    
                    {/* Password Requirements */}
                    {password && (
                      <div className="mt-3 space-y-2">
                        {[
                          { condition: password.length >= 6, text: 'At least 6 characters' },
                          { condition: /[A-Z]/.test(password), text: 'One uppercase letter' },
                          { condition: /[0-9]/.test(password), text: 'One number' }
                        ].map((req, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${
                              req.condition ? 'bg-accent' : 'bg-secondary'
                            }`}>
                              {req.condition && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <span className={req.condition ? 'text-accent' : 'text-natural-secondary'}>
                              {req.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-natural-primary font-medium mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        {errors.confirmPassword ? (
                          <AlertCircle className="w-5 h-5 text-rose-500" />
                        ) : (
                          <Lock className="w-5 h-5 text-natural-secondary" />
                        )}
                      </div>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        className={`w-full pl-12 pr-12 py-3 rounded-xl border ${
                          errors.confirmPassword 
                            ? 'border-rose-500 focus:ring-rose-500' 
                            : 'border-natural focus:ring-2'
                        } bg-transparent text-natural-primary placeholder:text-natural-secondary focus:outline-none`}
                        style={!errors.confirmPassword ? { '--tw-ring-color': 'var(--color-sage-green)' } as React.CSSProperties : {}}
                        {...register('confirmPassword')}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-natural-secondary hover:text-natural-primary"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="mt-2 text-sm text-rose-500">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      className="w-4 h-4 mt-1 rounded border-natural"
                      style={{ accentColor: 'var(--color-sage-green)' }}
                      {...register('agreeTerms')}
                    />
                    <label htmlFor="agreeTerms" className="ml-2 text-natural-secondary text-sm">
                      I agree to the{' '}
                      <Link href="/terms" className="hover:underline" style={{ color: 'var(--color-sage-green)' }}>
                        Terms & Conditions
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="hover:underline" style={{ color: 'var(--color-sage-green)' }}>
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  {errors.agreeTerms && (
                    <p className="mt-2 text-sm text-rose-500">
                      {errors.agreeTerms.message}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full text-white py-3 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--color-sage-green)',
                      '--hover-color': 'var(--color-deep-herbal)'
                    } as React.CSSProperties}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-deep-herbal)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-sage-green)')}
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Create Account
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>

                  {/* Already have account */}
                  <div className="text-center">
                    <p className="text-natural-secondary">
                      Already have an account?{' '}
                      <Link
                        href="/auth/login"
                        className="hover:underline font-medium"
                        style={{ color: 'var(--color-sage-green)' }}
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                </form>
              ) : (
                /* OTP Verification */
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(230, 220, 197, 0.3)' }}>
                      <Phone className="w-8 h-8" style={{ color: 'var(--color-sage-green)' }} />
                    </div>
                    <h3 className="text-xl font-bold text-natural-primary mb-2">
                      Verify Phone Number
                    </h3>
                    <p className="text-natural-secondary">
                      Enter the 6-digit code sent to your phone
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
                        className="w-12 h-12 text-center text-2xl font-bold border-2 border-natural rounded-lg bg-transparent text-natural-primary focus:outline-none"
                        style={{ '--tw-ring-color': 'var(--color-sage-green)' } as React.CSSProperties}
                      />
                    ))}
                  </div>

                  {/* Resend OTP */}
                  <div className="text-center">
                    <p className="text-natural-secondary">
                      Didn't receive code?{' '}
                      <button className="hover:underline font-medium" style={{ color: 'var(--color-sage-green)' }}>
                        Resend OTP
                      </button>
                    </p>
                  </div>

                  {/* Verify Button */}
                  <button
                    onClick={verifyOtp}
                    className="w-full text-white py-3 rounded-xl font-semibold transition-colors"
                    style={{
                      backgroundColor: 'var(--color-sage-green)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-deep-herbal)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-sage-green)')}
                  >
                    Verify & Create Account
                  </button>

                  {/* Back to Form */}
                  <button
                    onClick={() => setOtpSent(false)}
                    className="w-full text-natural-secondary hover:text-natural-primary text-sm"
                  >
                    ← Back to form
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Column - Benefits */}
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
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Herbal benefits"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              {/* Benefits Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border border-natural">
                  <h3 className="text-xl font-bold text-natural-primary mb-4">
                    Benefits of Joining
                  </h3>
                  <div className="space-y-4">
                    {[
                      '🎁 Exclusive member discounts',
                      '🚚 Free shipping on orders above ₹999',
                      '⭐ Early access to new products',
                      '📦 Easy order tracking',
                      '🎯 Personalized recommendations',
                      '💎 Priority customer support'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="w-5 h-5 text-emerald-500 mr-3" />
                        <span className="text-natural-primary">{benefit}</span>
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
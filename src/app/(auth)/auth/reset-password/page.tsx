// src/app/auth/reset-password/page.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetPasswordSchema } from '@/lib/validations/auth'
import { z } from 'zod'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Lock, Eye, EyeOff, Check, AlertCircle, Leaf, KeyRound, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

type ResetPasswordData = z.infer<typeof resetPasswordSchema>

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema)
  })

  const password = watch('password')

  const onSubmit = async (data: ResetPasswordData) => {
    setIsLoading(true)
    try {
      // API call to reset password with token
      console.log('Reset password with token:', token)
      console.log('New password:', data.password)
      
      // Simulate API call
      setTimeout(() => {
        setIsSuccess(true)
        setIsLoading(false)
      }, 1500)
    } catch (error) {
      setIsLoading(false)
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
                Set new password
              </p>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-natural p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  {isSuccess ? (
                    <Check className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <KeyRound className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  )}
                </div>
                
                <h1 className="text-3xl font-bold text-natural-primary mb-2">
                  {isSuccess ? 'Password Reset!' : 'Reset Password'}
                </h1>
                <p className="text-natural-secondary">
                  {isSuccess 
                    ? 'Your password has been successfully reset'
                    : 'Create a new secure password for your account'
                  }
                </p>
              </div>

              {!isSuccess ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* New Password Input */}
                  <div>
                    <label className="block text-natural-primary font-medium mb-2">
                      New Password
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
                        placeholder="Enter new password"
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
                              req.condition ? 'bg-emerald-500' : 'bg-slate-200 dark:bg-slate-700'
                            }`}>
                              {req.condition && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <span className={req.condition ? 'text-emerald-600 dark:text-emerald-400' : 'text-natural-secondary'}>
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
                      Confirm New Password
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
                        placeholder="Confirm new password"
                        className={`w-full pl-12 pr-12 py-3 rounded-xl border ${
                          errors.confirmPassword 
                            ? 'border-rose-500 focus:ring-rose-500' 
                            : 'border-natural focus:ring-emerald-500'
                        } bg-transparent text-natural-primary placeholder:text-natural-secondary focus:outline-none focus:ring-2`}
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
                        Reset Password
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Message */
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-natural-primary mb-2">
                      All Set! 🎉
                    </h3>
                    <p className="text-natural-secondary">
                      You can now login with your new password
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="space-y-4">
                    <Link
                      href="/auth/login"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition-colors inline-block text-center"
                    >
                      Login Now
                    </Link>
                    <Link
                      href="/"
                      className="w-full border border-natural text-natural-primary hover:border-emerald-500 py-3 rounded-xl font-medium transition-colors inline-block text-center"
                    >
                      Return Home
                    </Link>
                  </div>
                </div>
              )}
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
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Security"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              {/* Security Info */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-11/12">
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border border-natural shadow-xl">
                  <h4 className="font-bold text-natural-primary mb-3">
                    💡 Keep Your Account Secure
                  </h4>
                  <ul className="space-y-3 text-sm text-natural-secondary">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Use a password manager to generate and store strong passwords</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Enable two-factor authentication for extra security</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Log out from shared devices after use</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
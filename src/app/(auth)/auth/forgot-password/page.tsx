// src/app/auth/forgot-password/page.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { forgotPasswordSchema } from '@/lib/validations/auth'
import { z } from 'zod'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, ArrowLeft, CheckCircle, AlertCircle, Leaf, Send } from 'lucide-react'
import Image from 'next/image'

type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema)
  })

  const email = watch('email')

  const onSubmit = async (data: ForgotPasswordData) => {
    setIsLoading(true)
    try {
      // API call to send reset email
      console.log('Reset email sent to:', data.email)
      setTimeout(() => {
        setEmailSent(true)
        setIsLoading(false)
      }, 1500)
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-off-white)', minHeight: '100vh' }}>
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
                Reset your password
              </p>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl border border-natural p-8 shadow-xl" style={{ borderColor: 'rgba(230, 220, 197, 0.5)' }}>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-natural-primary mb-2">
                  {emailSent ? 'Check Your Email' : 'Forgot Password?'}
                </h1>
                <p className="text-natural-secondary">
                  {emailSent 
                    ? `We've sent reset instructions to ${email}`
                    : 'Enter your email to receive reset instructions'
                  }
                </p>
              </div>

              {!emailSent ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                        placeholder="Enter your registered email"
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

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full text-white py-3 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--color-sage-green)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-deep-herbal)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-sage-green)')}
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Reset Link
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>

                  {/* Back to Login */}
                  <Link
                    href="/auth/login"
                    className="flex items-center justify-center text-natural-secondary hover:text-natural-primary"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to login
                  </Link>
                </form>
              ) : (
                /* Success Message */
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto" style={{ backgroundColor: 'rgba(230, 220, 197, 0.3)' }}>
                    <CheckCircle className="w-8 h-8" style={{ color: 'var(--color-sage-green)' }} />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-natural-primary">
                      Email Sent Successfully!
                    </h3>
                    <p className="text-natural-secondary">
                      Check your inbox for password reset instructions. The link will expire in 1 hour.
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="space-y-4">
                    <button
                      onClick={() => setEmailSent(false)}
                      className="w-full hover:underline font-medium"
                      style={{ color: 'var(--color-sage-green)' }}
                    >
                      Resend email
                    </button>
                    <Link
                      href="/auth/login"
                      className="w-full text-white py-3 rounded-xl font-semibold transition-colors inline-block"
                      style={{
                        backgroundColor: 'var(--color-sage-green)',
                        display: 'block'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-deep-herbal)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-sage-green)')}
                    >
                      Return to Login
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
                    alt="Password security"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              {/* Security Tips */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-11/12">
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border border-natural shadow-xl">
                  <h4 className="font-bold text-natural-primary mb-3">
                    🔒 Password Security Tips
                  </h4>
                  <ul className="space-y-2 text-sm text-natural-secondary">
                    <li>• Use a mix of letters, numbers & symbols</li>
                    <li>• Avoid using personal information</li>
                    <li>• Don't reuse passwords across sites</li>
                    <li>• Change passwords regularly</li>
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
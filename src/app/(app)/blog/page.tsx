// src/app/blog/page.tsx - Updated with functional tabs
'use client'

import { Calendar, User, Clock, Tag, MessageSquare, ThumbsUp, Star, ChevronDown, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Mindful Consumption',
    excerpt: 'How conscious consumption of herbal alternatives can lead to a more mindful and balanced lifestyle.',
    author: 'James Wilson',
    date: 'Nov 30, 2024',
    readTime: '5 min read',
    category: 'Lifestyle',
    comments: 12,
    likes: 45,
    rating: 4.8,
    featured: true
  },
  // ... other posts
]

const faqs = [
  {
    question: 'How do I use herbal blends safely?',
    answer: 'Start with small amounts and consult with a healthcare professional if you have any medical conditions.',
    category: 'Usage'
  },
  {
    question: 'Are your products 100% natural?',
    answer: 'Yes, all our products are made from 100% natural ingredients with no synthetic additives.',
    category: 'Quality'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day money-back guarantee if you are not satisfied with your purchase.',
    category: 'Shipping'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Most orders are delivered within 3-5 business days within India.',
    category: 'Shipping'
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to select international destinations. Check our shipping page for details.',
    category: 'Shipping'
  },
  {
    question: 'Are the products vegan?',
    answer: 'Yes, all our products are vegan and cruelty-free.',
    category: 'Quality'
  }
]

const categories = [
  { name: 'All Topics', count: 24 },
  { name: 'Wellness', count: 8 },
  { name: 'Ayurveda', count: 6 },
  { name: 'Detox', count: 5 },
  { name: 'Lifestyle', count: 4 },
  { name: 'Sustainability', count: 3 },
  { name: 'Rituals', count: 4 }
]

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<'reviews' | 'faq'>('reviews')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-natural-primary">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container-natural">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-natural-primary mb-6">
              Customer Reviews <span className="text-accent-primary">&</span> FAQ
            </h1>
            
            <p className="text-2xl text-natural-secondary mb-8 font-light">
              Hear from our verified buyers and find answers to common questions
            </p>
            
            {/* Divider Line */}
            <div className="relative h-px bg-gradient-to-r from-transparent via-natural to-transparent my-12">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 px-8 text-natural-secondary">
                <span className="text-sm font-medium">Scroll to explore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="section-padding">
        <div className="container-natural">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="flex border-b border-natural mb-8">
                <button 
                  onClick={() => setActiveTab('reviews')}
                  className={`px-6 py-4 font-semibold transition-all duration-300 ${
                    activeTab === 'reviews' 
                      ? 'border-b-2 border-accent-primary text-accent-primary' 
                      : 'text-natural-secondary hover:text-natural-primary'
                  }`}
                >
                  Customer Reviews
                </button>
                <button 
                  onClick={() => setActiveTab('faq')}
                  className={`px-6 py-4 font-semibold transition-all duration-300 ${
                    activeTab === 'faq' 
                      ? 'border-b-2 border-accent-primary text-accent-primary' 
                      : 'text-natural-secondary hover:text-natural-primary'
                  }`}
                >
                  FAQ
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'reviews' ? (
                <>
                  {/* Reviews Content */}
                  <div className="space-y-12">
                    {/* Verification Notice */}
                    <div className="p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl">
                      <p className="text-amber-800 dark:text-amber-300 font-medium">
                        🔐 You must be a verified buyer to post reviews
                      </p>
                    </div>

                    {/* Share Review Form */}
                    <div>
                      <h2 className="text-2xl font-bold text-natural-primary mb-6">
                        Share Your Experience
                      </h2>
                      
                      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-natural p-8">
                        <div className="space-y-6">
                          {/* Name */}
                          <div>
                            <label className="block text-natural-primary font-medium mb-2">
                              Your Name
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your name"
                              className="w-full px-4 py-3 rounded-xl border border-natural bg-transparent text-natural-primary placeholder:text-natural-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary"
                            />
                          </div>

                          {/* Rating */}
                          <div>
                            <label className="block text-natural-primary font-medium mb-2">
                              Rating
                            </label>
                            <div className="flex gap-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                  key={star}
                                  className="w-10 h-10 bg-amber-50 dark:bg-amber-900/20 rounded-lg flex items-center justify-center hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
                                >
                                  <Star className="w-6 h-6 text-amber-400" />
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Review Text */}
                          <div>
                            <label className="block text-natural-primary font-medium mb-2">
                              Your Review
                            </label>
                            <textarea
                              placeholder="Share your experience with this product..."
                              rows={4}
                              className="w-full px-4 py-3 rounded-xl border border-natural bg-transparent text-natural-primary placeholder:text-natural-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary"
                            />
                          </div>

                          {/* Product Selection */}
                          <div>
                            <label className="block text-natural-primary font-medium mb-2">
                              Product Name
                            </label>
                            <select className="w-full px-4 py-3 rounded-xl border border-natural bg-transparent text-natural-primary focus:outline-none focus:ring-2 focus:ring-accent-primary">
                              <option value="">Which product did you purchase?</option>
                              <option value="coffee">Coffee Blend</option>
                              <option value="detox">Detoxification Mix</option>
                              <option value="bath">Bath Herbs</option>
                              <option value="smoking">Smoking Mix</option>
                            </select>
                          </div>

                          {/* Submit Button */}
                          <button className="w-full bg-accent-primary text-white py-4 rounded-xl font-semibold hover:bg-accent-secondary transition-colors">
                            Post Review
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Customer Reviews List */}
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-natural-primary">
                          Customer Reviews ({blogPosts.length})
                        </h2>
                        <select className="px-4 py-2 rounded-lg border border-natural bg-transparent text-natural-primary">
                          <option value="newest">Newest First</option>
                          <option value="oldest">Oldest First</option>
                          <option value="highest">Highest Rated</option>
                          <option value="lowest">Lowest Rated</option>
                        </select>
                      </div>

                      {/* Reviews Grid */}
                      <div className="space-y-8">
                        {blogPosts.map((post) => (
                          <div
                            key={post.id}
                            className="bg-white dark:bg-slate-800 rounded-2xl border border-natural p-6 hover:border-accent transition-colors"
                          >
                            {/* Review Header */}
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                                  {post.author.charAt(0)}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h3 className="font-bold text-natural-primary">
                                      {post.author}
                                    </h3>
                                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-xs rounded-full">
                                      Verified Buyer
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-4 text-sm text-natural-secondary mt-1">
                                    <span>{post.category}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Rating */}
                              <div className="flex items-center gap-2">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                      key={star}
                                      className={`w-5 h-5 ${
                                        star <= Math.floor(post.rating)
                                          ? 'text-amber-400 fill-amber-400'
                                          : star === Math.ceil(post.rating) && post.rating % 1 !== 0
                                          ? 'text-amber-400'
                                          : 'text-slate-300 dark:text-slate-600'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="font-bold text-natural-primary">
                                  {post.rating}
                                </span>
                              </div>
                            </div>

                            {/* Review Content */}
                            <div className="mb-4">
                              <p className="text-natural-secondary leading-relaxed">
                                {post.excerpt}
                              </p>
                            </div>

                            {/* Review Stats */}
                            <div className="flex items-center justify-between pt-4 border-t border-natural">
                              <div className="flex items-center gap-6">
                                <button className="flex items-center gap-2 text-natural-secondary hover:text-accent-primary transition-colors">
                                  <ThumbsUp className="w-5 h-5" />
                                  <span>{post.likes}</span>
                                </button>
                                <button className="flex items-center gap-2 text-natural-secondary hover:text-accent-primary transition-colors">
                                  <MessageSquare className="w-5 h-5" />
                                  <span>{post.comments}</span>
                                </button>
                              </div>
                              <button className="text-accent-primary hover:text-accent-secondary font-medium">
                                Read Full Review →
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Pagination */}
                      <div className="flex justify-center items-center gap-2 mt-12">
                        <button className="w-10 h-10 rounded-lg border border-natural flex items-center justify-center text-natural-secondary hover:bg-accent-10 hover:text-accent-primary transition-colors">
                          ←
                        </button>
                        <button className="w-10 h-10 rounded-lg bg-accent-primary text-white flex items-center justify-center">
                          1
                        </button>
                        <button className="w-10 h-10 rounded-lg border border-natural flex items-center justify-center text-natural-secondary hover:bg-accent-10 hover:text-accent-primary transition-colors">
                          2
                        </button>
                        <button className="w-10 h-10 rounded-lg border border-natural flex items-center justify-center text-natural-secondary hover:bg-accent-10 hover:text-accent-primary transition-colors">
                          3
                        </button>
                        <span className="px-2 text-natural-secondary">...</span>
                        <button className="w-10 h-10 rounded-lg border border-natural flex items-center justify-center text-natural-secondary hover:bg-accent-10 hover:text-accent-primary transition-colors">
                          →
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* FAQ Content */}
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-natural-primary">
                      Frequently Asked Questions
                    </h2>
                    
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div
                          key={index}
                          className="bg-white dark:bg-slate-800 rounded-xl border border-natural overflow-hidden"
                        >
                          <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-accent-5 transition-colors"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center">
                                <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-natural-primary text-lg">
                                  {faq.question}
                                </h3>
                                <span className="inline-block mt-1 px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full">
                                  {faq.category}
                                </span>
                              </div>
                            </div>
                            <ChevronDown 
                              className={`w-5 h-5 text-natural-secondary transition-transform duration-300 ${
                                expandedFAQ === index ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          
                          {/* FAQ Answer (Collapsible) */}
                          <div 
                            className={`px-6 overflow-hidden transition-all duration-300 ${
                              expandedFAQ === index ? 'pb-6 border-t border-natural' : 'max-h-0'
                            }`}
                          >
                            <p className="pt-4 text-natural-secondary">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Still Have Questions? */}
                    <div className="mt-12 p-8 bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-2xl border border-emerald-200 dark:border-emerald-700">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                          <h3 className="text-xl font-bold text-natural-primary mb-2">
                            Still have questions?
                          </h3>
                          <p className="text-natural-secondary">
                            Can't find the answer you're looking for? Contact our support team.
                          </p>
                        </div>
                        <button className="btn-natural-primary whitespace-nowrap">
                          Contact Support
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Right Column - Sidebar (Same for both tabs) */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-natural p-6">
                <h3 className="text-xl font-bold text-natural-primary mb-4">
                  Blog Categories
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-accent-10 transition-colors group"
                    >
                      <span className="text-natural-secondary group-hover:text-accent-primary">
                        {category.name}
                      </span>
                      <span className="px-2 py-1 bg-accent-10 text-accent-primary text-xs rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-natural p-6">
                <h3 className="text-xl font-bold text-natural-primary mb-4">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  {['About us', 'Terms & conditions', 'Privacy policy', 'FAQ', 'Shipping & Returns'].map((link) => (
                    <Link
                      key={link}
                      href="#"
                      className="block text-natural-secondary hover:text-accent-primary transition-colors py-2"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Customer Support */}
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Customer Support
                </h3>
                <p className="mb-6 text-emerald-100">
                  We're here to help! Reach out to us anytime.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="mailto:qeirex@gmail.com"
                    className="flex items-center gap-3 hover:text-white/80 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      ✉️
                    </div>
                    <span className="font-medium">qeirex@gmail.com</span>
                  </a>
                  
                  <a
                    href="#"
                    className="flex items-center gap-3 hover:text-white/80 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      💬
                    </div>
                    <span className="font-medium">Contact Support</span>
                  </a>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-emerald-200 text-sm">
                    ⏱️ Response time: Within 24 hours
                  </p>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-center text-natural-secondary text-sm">
                <p>© 2025 Qeirex. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="container-natural max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have More Questions?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Our customer support team is always ready to assist you with any queries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Contact Support
            </button>
            <button 
              onClick={() => setActiveTab('faq')}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Browse FAQ
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
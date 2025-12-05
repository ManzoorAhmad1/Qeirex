// src/app/about/page.tsx
import ProductCollection from '@/components/ProductCollection'
import { CheckCircle, Leaf, Heart, Shield, Zap, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
    const coreValues = [
        {
            icon: Leaf,
            title: '100% Natural',
            description: 'No synthetic additives, preservatives, or artificial ingredients',
            color: 'text-emerald-600 dark:text-emerald-400',
            bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
        },
        {
            icon: Heart,
            title: 'Vegan & Cruelty-Free',
            description: 'Plant-based ingredients, never tested on animals',
            color: 'text-rose-600 dark:text-rose-400',
            bgColor: 'bg-rose-50 dark:bg-rose-900/20'
        },
        {
            icon: Shield,
            title: 'Time-Tested',
            description: 'Rooted in traditional Ayurvedic practices and herbal wisdom',
            color: 'text-amber-600 dark:text-amber-400',
            bgColor: 'bg-amber-50 dark:bg-amber-900/20'
        },
        {
            icon: Zap,
            title: 'Pure & Clean',
            description: 'No tobacco, nicotine, or harmful chemicals in any products',
            color: 'text-blue-600 dark:text-blue-400',
            bgColor: 'bg-blue-50 dark:bg-blue-900/20'
        }
    ]

    const qualityPromise = [
        {
            title: 'Lab Tested',
            description: 'Third-party laboratory testing for purity and potency',
            icon: '🔬'
        },
        {
            title: 'Sustainably Sourced',
            description: 'Ethically harvested from certified organic farms',
            icon: '🌱'
        },
        {
            title: 'Freshness Guaranteed',
            description: 'Small batch production ensures maximum freshness',
            icon: '✨'
        }
    ]

    return (
        <div className="min-h-screen bg-natural-primary">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-900/10 dark:to-slate-900">
                <div className="container-natural">
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="badge-natural mb-6">
                            <Leaf className="w-4 h-4 mr-2" />
                            OUR STORY
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-natural-primary mb-6">
                            About <span className="text-accent-primary">Qeirex</span>
                        </h1>

                        <p className="text-xl text-natural-secondary mb-8 leading-relaxed">
                            Rooted in nature, crafted with care. We bring you the finest herbal
                            alternatives for a mindful, tobacco-free lifestyle.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section with Image */}
            <section className="section-padding bg-natural-secondary">
                <div className="container-natural">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <div className="aspect-[4/5] relative">
                                    <Image
                                        src="https://images.unsplash.com/photo-1607721098274-e54cbfab475d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                                        alt="Herbal ingredients"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-500 rounded-full opacity-10" />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-500 rounded-full opacity-10" />
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-natural-primary mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-6 text-natural-secondary text-lg">
                                <p>
                                    Qeirex was born from a simple belief: everyone deserves access to pure,
                                    natural alternatives that honor both tradition and wellness. We combine
                                    ancient Ayurvedic wisdom with modern quality standards to create
                                    products that truly make a difference.
                                </p>
                                <p>
                                    Our journey began with extensive research into herbal medicine and a
                                    commitment to sustainability. Every ingredient is carefully sourced from
                                    ethical suppliers who share our values of environmental stewardship and
                                    fair trade practices.
                                </p>
                                <p>
                                    Today, Qeirex stands as a trusted name in herbal alternatives, serving
                                    thousands of customers who've chosen a healthier, more conscious path.
                                </p>

                                <div className="mt-8 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-natural">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Leaf className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-natural-primary mb-2">
                                                Our Mission
                                            </h3>
                                            <p className="text-natural-secondary">
                                                To empower individuals to embrace healthier lifestyle choices through
                                                premium, natural herbal alternatives that respect both body and nature.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="section-padding bg-natural-primary">
                <div className="container-natural">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="section-title mb-4">
                            Our Core Values
                        </h2>
                        <p className="section-subtitle">
                            The principles that guide everything we do at Qeirex
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreValues.map((value, index) => (
                            <div
                                key={index}
                                className={`${value.bgColor} rounded-2xl p-6 border border-natural hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className={`${value.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                                        <value.icon className={`w-8 h-8 ${value.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-natural-primary mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-natural-secondary">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Promise Section */}
            <section className="section-padding bg-gradient-to-b from-natural-secondary to-natural-primary">
                <div className="container-natural">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="section-title mb-4">
                            Our Quality Promise
                        </h2>
                        <p className="section-subtitle">
                            Every Qeirex product undergoes rigorous testing and quality control to ensure
                            you receive only the finest herbal blends.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {qualityPromise.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-natural-card rounded-2xl p-8 border border-natural hover:border-accent transition-all duration-300 hover:shadow-2xl"
                            >
                                <div className="absolute top-4 right-4 text-3xl opacity-20 group-hover:opacity-30 transition-opacity">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-natural-primary mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-natural-secondary">
                                    {item.description}
                                </p>
                                <div className="mt-6 pt-6 border-t border-natural">
                                    <div className="flex items-center text-accent-primary font-medium">
                                        <span>Learn more</span>
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <ProductCollection />
            </section>
            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
                <div className="container-natural relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Experience Pure Nature?
                        </h2>
                        <p className="text-xl text-emerald-100 mb-8">
                            Join thousands of satisfied customers who've discovered the Qeirex difference.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/shop"
                                className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                Explore Products
                            </Link>
                            <Link
                                href="/blog"
                                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                            >
                                Read Our Blog
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
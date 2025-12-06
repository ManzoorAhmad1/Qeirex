// src/app/page.tsx
import CategorySection from '@/components/CategorySection'
import FeaturedProducts from '@/components/FeaturedProducts'
import HeroSection from '@/components/HeroSection'
import WhyChooseUs from '@/components/WhyChooseUs'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <CategorySection /> */}
      <FeaturedProducts />
      <WhyChooseUs />
    </>
  )
}
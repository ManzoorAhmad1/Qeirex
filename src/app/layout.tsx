// src/app/layout.tsx (Server Component)
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { StoreProvider } from '@/providers/store-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Qeirex - Premium Herbal Alternatives',
  description: '100% Natural, Ayurvedic, Vegan herbal blends for a mindful lifestyle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <StoreProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
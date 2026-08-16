import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { MathParticleBackground } from '@/components/math-particle-background'
import { MathGPTBubble } from '@/components/mathgpt-bubble'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Maths for Mathers - Premium Mathematics Learning Platform',
  description:
    'Master mathematics with AI-powered learning, smart planner, and comprehensive study materials.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <MathParticleBackground />
          <Navbar />
          <main className="relative min-h-screen">
            {children}
          </main>
          <MathGPTBubble />
        </ThemeProvider>
      </body>
    </html>
  )
}

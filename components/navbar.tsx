'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Calculator,
  Calendar,
  Menu,
  X,
  Search,
  Bell,
  Sun,
  Moon,
  Sigma,
  GraduationCap,
  Info,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { SearchModal } from '@/components/search-modal'

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: BookOpen },
  { label: 'Learn',     href: '/learn',      icon: GraduationCap },
  { label: 'Practice',  href: '/practice',   icon: Calculator },
  { label: 'Planner',   href: '/planner',    icon: Calendar },
  { label: 'About',     href: '/about',      icon: Info },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  // Global Ctrl+K / ⌘K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 math-gradient rounded-xl flex items-center justify-center math-glow"
            >
              <Sigma className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <span className="text-xl font-bold math-gradient-text">Maths for Mathers</span>
              <motion.div
                className="h-0.5 math-gradient rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className="text-sm hover:bg-blue-500/10 transition-all duration-200 relative group"
                >
                  <item.icon className="w-4 h-4 mr-2 text-blue-400" />
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </Button>
              </Link>
            ))}
          </div>

          {/* Search trigger */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-6">
            <button
              onClick={() => setSearchOpen(true)}
              className="relative w-full flex items-center gap-3 glass rounded-full px-4 py-2 text-sm text-muted-foreground hover:ring-2 hover:ring-blue-500/30 transition-all duration-200 text-left"
              aria-label="Open search"
            >
              <Search className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="flex-1 text-[#505070]">Search topics, videos, team…</span>
              <kbd className="flex items-center gap-0.5 px-2 py-0.5 text-xs text-muted-foreground bg-blue-500/10 rounded-md border border-blue-500/20">
                <span className="text-[10px]">⌘</span>K
              </kbd>
            </button>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-2">
            {/* Mobile search button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-blue-500/10"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-blue-400" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hover:bg-blue-500/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-blue-400" suppressHydrationWarning />
              ) : (
                <Moon className="w-5 h-5 text-blue-400" suppressHydrationWarning />
              )}
            </Button>

            <Button variant="ghost" size="icon" className="hover:bg-blue-500/10 relative" aria-label="Notifications">
              <Bell className="w-5 h-5 text-blue-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </Button>

            {/* Mobile toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-blue-500/10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-blue-500/10"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover:bg-blue-500/10"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-4 h-4 mr-2 text-blue-400" />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

    <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}

export default Navbar

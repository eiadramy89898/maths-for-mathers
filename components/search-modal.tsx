'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ArrowRight, ExternalLink, BookOpen, PlayCircle, Calculator, Calendar, Users, FolderOpen, FileText } from 'lucide-react'
import { search, type SearchResult } from '@/lib/search-index'

// ── Category icons & colors ──────────────────────────────────────
const categoryMeta: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  Page:     { icon: BookOpen,     color: 'text-blue-400',   bg: 'bg-blue-500/10'   },
  Video:    { icon: PlayCircle,   color: 'text-rose-400',   bg: 'bg-rose-500/10'   },
  Concept:  { icon: Calculator,   color: 'text-violet-400', bg: 'bg-violet-500/10' },
  Planner:  { icon: Calendar,     color: 'text-emerald-400',bg: 'bg-emerald-500/10'},
  Team:     { icon: Users,        color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  Drive:    { icon: FolderOpen,   color: 'text-orange-400', bg: 'bg-orange-500/10' },
}

// ── Quick links shown when query is empty ────────────────────────
const quickLinks: SearchResult[] = [
  { title: 'Learn',     description: 'Videos & resources',    href: '/learn',     category: 'Page',    keywords: [] },
  { title: 'Practice',  description: 'Quiz yourself',          href: '/practice',  category: 'Page',    keywords: [] },
  { title: 'Planner',   description: 'Study schedule',         href: '/planner',   category: 'Page',    keywords: [] },
  { title: 'About',     description: 'Meet the team',          href: '/about',     category: 'Page',    keywords: [] },
]

interface Props {
  open: boolean
  onClose: () => void
}

export function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const results = query.trim() ? search(query) : quickLinks

  // Focus input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 60)
      setQuery('')
      setActive(0)
    }
  }, [open])

  // Reset active index when results change
  useEffect(() => { setActive(0) }, [query])

  // Scroll active item into view
  useEffect(() => {
    const el = listRef.current?.children[active] as HTMLElement | undefined
    el?.scrollIntoView({ block: 'nearest' })
  }, [active])

  const navigate = useCallback((item: SearchResult) => {
    onClose()
    if (item.external) {
      window.open(item.href, '_blank', 'noopener,noreferrer')
    } else {
      router.push(item.href)
    }
  }, [onClose, router])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((a) => Math.min(a + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((a) => Math.max(a - 1, 0))
    } else if (e.key === 'Enter') {
      if (results[active]) navigate(results[active])
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed left-1/2 top-[10vh] z-[70] w-full max-w-xl -translate-x-1/2 px-4"
          >
            <div className="overflow-hidden rounded-2xl border border-blue-500/15 bg-[#0f0f1a] shadow-2xl shadow-black/60">

              {/* Search input */}
              <div className="flex items-center gap-3 border-b border-blue-500/10 px-4 py-3.5">
                <Search className="w-5 h-5 shrink-0 text-blue-400" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search topics, videos, team, planner…"
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-[#505070] focus:outline-none"
                  aria-label="Search"
                />
                {query && (
                  <button onClick={() => setQuery('')} className="text-[#6060a0] hover:text-white transition-colors">
                    <X size={16} />
                  </button>
                )}
                <kbd className="hidden sm:inline-flex items-center gap-1 rounded-md border border-blue-500/20 bg-blue-500/8 px-2 py-0.5 text-[11px] text-[#6060a0]">
                  Esc
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto overscroll-contain">
                {results.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <FileText className="w-10 h-10 text-[#2a2a4a] mb-3" />
                    <p className="text-sm text-[#505070]">No results for &ldquo;{query}&rdquo;</p>
                    <p className="text-xs text-[#3a3a5a] mt-1">Try: absolute value, piecewise, rahma, mai, planner…</p>
                  </div>
                ) : (
                  <>
                    {/* Label */}
                    <p className="px-4 pt-3 pb-1 text-[11px] font-semibold uppercase tracking-widest text-[#404060]">
                      {query.trim() ? `${results.length} result${results.length !== 1 ? 's' : ''}` : 'Quick links'}
                    </p>

                    <ul ref={listRef} role="listbox">
                      {results.map((item, i) => {
                        const meta = categoryMeta[item.category]
                        const Icon = meta.icon
                        const isActive = i === active

                        return (
                          <li
                            key={`${item.href}-${i}`}
                            role="option"
                            aria-selected={isActive}
                            onMouseEnter={() => setActive(i)}
                            onClick={() => navigate(item)}
                            className={`group flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors duration-100 ${
                              isActive ? 'bg-blue-500/8' : 'hover:bg-blue-500/5'
                            }`}
                          >
                            {/* Icon */}
                            <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-lg ${meta.bg}`}>
                              <Icon className={`w-4 h-4 ${meta.color}`} />
                            </div>

                            {/* Text */}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-white truncate">{item.title}</p>
                              <p className="text-xs text-[#5a5a80] truncate mt-0.5">{item.description}</p>
                            </div>

                            {/* Right side */}
                            <div className="shrink-0 flex items-center gap-2">
                              <span className={`hidden sm:inline text-[10px] font-semibold px-2 py-0.5 rounded-full ${meta.bg} ${meta.color}`}>
                                {item.category}
                              </span>
                              {item.external
                                ? <ExternalLink className="w-3.5 h-3.5 text-[#404060] group-hover:text-[#7070a0]" />
                                : <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-150 ${isActive ? 'translate-x-0.5 text-blue-400' : 'text-[#404060]'}`} />
                              }
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-blue-500/10 px-4 py-2.5">
                <div className="flex items-center gap-3 text-[11px] text-[#404060]">
                  <span className="flex items-center gap-1">
                    <kbd className="rounded border border-[#2a2a4a] bg-[#1a1a2e] px-1.5 py-0.5">↑↓</kbd>
                    navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="rounded border border-[#2a2a4a] bg-[#1a1a2e] px-1.5 py-0.5">↵</kbd>
                    open
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="rounded border border-[#2a2a4a] bg-[#1a1a2e] px-1.5 py-0.5">Esc</kbd>
                    close
                  </span>
                </div>
                <span className="text-[11px] text-[#303050]">Maths for Mathers</span>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export function MathGPTBubble() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Dismiss button */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          className="flex items-center gap-3"
        >
          {/* Tooltip label */}
          <motion.span
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-full border border-blue-500/20 bg-[#1a1a2e]/90 backdrop-blur-md px-4 py-2 text-sm font-medium text-[#a78bfa] shadow-lg shadow-blue-500/10 whitespace-nowrap"
          >
            Stuck? Try MathGPT ✨
          </motion.span>

          {/* Main bubble */}
          <div className="relative">
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#6c63ff]/30 animate-ping" />

            <a
              href="https://math-gpt.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open MathGPT"
              className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#6c63ff] to-[#a78bfa] shadow-xl shadow-[#6c63ff]/40 transition-all hover:brightness-110 hover:scale-105 active:scale-95"
            >
              <span className="text-xl font-black text-white select-none">f(x)</span>
            </a>

            {/* Dismiss X */}
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss MathGPT bubble"
              className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#1a1a2e] border border-blue-500/20 text-[#6060a0] hover:text-white hover:bg-[#ff6584]/80 transition-all"
            >
              <X size={10} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

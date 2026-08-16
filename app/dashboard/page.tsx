'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  GraduationCap,
  Calculator,
  Calendar,
  Info,
  ArrowUpRight,
  FolderOpen,
  MessageCircle,
} from 'lucide-react'

const sections = [
  {
    label: 'Learn',
    href: '/learn',
    icon: GraduationCap,
    description: 'Videos, summaries & curated resources for LO6 — Absolute Value, Piecewise, Step Function.',
    from: '#6c63ff',
    to: '#a78bfa',
    tag: 'LO6 Resources',
  },
  {
    label: 'Practice',
    href: '/practice',
    icon: Calculator,
    description: 'Pick a concept and go through 10 real questions. Absolute Value · Piecewise · Step Function.',
    from: '#ff6584',
    to: '#fbbf24',
    tag: 'Quiz',
  },
  {
    label: 'Planner',
    href: '/planner',
    icon: Calendar,
    description: 'Plan your study sessions and keep track of what you still need to cover.',
    from: '#43e97b',
    to: '#38f9d7',
    tag: 'Schedule',
  },
  {
    label: 'Drive Folder',
    href: 'https://drive.google.com/drive/folders/1ce66r2KgeME3QuDhz7BiDuCaN4lrHzQ5',
    icon: FolderOpen,
    description: 'All materials uploaded by Mai — notes, Arabic & English explanations, summaries.',
    from: '#fbbf24',
    to: '#ff9f43',
    tag: 'Google Drive',
    external: true,
  },
  {
    label: 'WhatsApp Group',
    href: 'https://chat.whatsapp.com/LNhRcRIfEoE9ah6JSMD1x7?s=sh&p=a&mlu=0',
    icon: MessageCircle,
    description: 'The main group for updates, announcements, and anything Maths for Mathers.',
    from: '#25d366',
    to: '#128c7e',
    tag: 'Community',
    external: true,
  },
  {
    label: 'About',
    href: '/about',
    icon: Info,
    description: 'Meet the team — Eyad, Rahma, Lilly, Mai, Arwa & Nour — and leave feedback.',
    from: '#a78bfa',
    to: '#ff6584',
    tag: 'Team',
  },
]

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
}

const card = {
  hidden:  { opacity: 0, y: 28, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 math-pattern">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold text-blue-300 tracking-widest uppercase mb-4">
            G10 · S2 · LO6
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-3 math-gradient-text">
            Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Everything you need for LO6 in one place. Lock in.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {sections.map((s) => {
            const Wrapper = s.external ? 'a' : Link
            const extraProps = s.external
              ? { href: s.href, target: '_blank', rel: 'noopener noreferrer' }
              : { href: s.href }

            return (
              <motion.div key={s.href} variants={card} whileHover={{ y: -4, transition: { duration: 0.2 } }}>
                <Wrapper {...extraProps} className="group block h-full">
                  <div className="relative h-full rounded-2xl overflow-hidden border border-white/5 bg-[#13131f] transition-all duration-300 hover:border-white/15">

                    {/* Gradient top stripe */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 opacity-90"
                      style={{ background: `linear-gradient(90deg, ${s.from}, ${s.to})` }}
                    />

                    {/* Soft bg glow */}
                    <div
                      className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-10 pointer-events-none"
                      style={{ background: `radial-gradient(circle, ${s.from}, transparent)` }}
                    />

                    <div className="relative p-6 pt-7">
                      {/* Icon + tag */}
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                          style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}
                        >
                          <s.icon size={22} className="text-white" strokeWidth={2} />
                        </div>
                        <span
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-full border"
                          style={{ color: s.from, borderColor: `${s.from}40`, background: `${s.from}12` }}
                        >
                          {s.tag}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-white mb-1.5">{s.label}</h2>
                      <p className="text-sm text-[#7070a0] leading-relaxed mb-6">{s.description}</p>

                      <div
                        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5"
                        style={{ color: s.from }}
                      >
                        {s.external ? 'Open' : 'Go'}
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </Wrapper>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </div>
  )
}

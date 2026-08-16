'use client'

import { motion } from 'framer-motion'
import { ExternalLink, PlayCircle, List, BookOpenText, Download, Eye, FileText, FolderOpen } from 'lucide-react'

const videos = [
  {
    subject: 'Basic Linear Functions',
    channel: 'Math Antics',
    url: 'https://youtu.be/MXV65i9g1Xg?si=Du3XVoNrKr4xqcer',
    type: 'video',
  },
  {
    subject: 'Graph Linear Equations',
    channel: 'Brian McLogan',
    url: 'https://youtube.com/playlist?list=PL0G-Nd0V5ZMr355cPXOQyqCfIM8obqPs0&si=hVtb8HhaHKdEalx6',
    type: 'playlist',
  },
  {
    subject: 'Direct and Inverse Variation',
    channel: 'Khan Academy',
    url: 'https://youtu.be/92U67CUy9Gc?si=AAmBzFsuFtQ-JoH',
    type: 'video',
  },
  {
    subject: 'Master Graphing Piecewise Functions',
    channel: null,
    url: 'https://youtu.be/1zxKPTcshDw?si=2QoXnst1sS8LEfzq',
    type: 'video',
  },
  {
    subject: 'Solving Absolute Value Equations and Inequalities',
    channel: 'ذاكرلى حساب وماث',
    url: 'https://youtu.be/BUzBdkavbNs?si=ahfiJtI21kK9cyCq',
    type: 'video',
  },
  {
    subject: 'Solving an Absolute Value Equation',
    channel: null,
    url: 'https://youtu.be/TnevdNh32aY?si=zDdoepcHBULCUrU3',
    type: 'video',
  },
  {
    subject: 'Absolute Value',
    channel: 'Math Antics',
    url: 'https://youtu.be/BrYy1bgh3Y0?si=OJgtjxx-HogwSg4Y',
    type: 'video',
  },
  {
    subject: 'Composition of Functions',
    channel: 'Mr TiTo',
    url: 'https://youtu.be/Y0qmYhqZRnM?si=il_AKCp-TJseNie8',
    type: 'video',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
}

export default function LearnPage() {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 math-pattern">
      <div className="max-w-4xl mx-auto">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-extrabold mb-3 math-gradient-text">Learn</h1>
          <p className="text-muted-foreground text-lg">
            Curated resources to help you actually understand the material.
          </p>
        </motion.div>

        {/* ── Videos section ─────────────────────────────────── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-6"
        >
          <motion.h2
            variants={fadeUp}
            className="flex items-center gap-2 text-xl font-bold mb-6 text-foreground"
          >
            <PlayCircle className="w-5 h-5 text-blue-400" />
            Videos
          </motion.h2>

          <motion.div variants={stagger} className="space-y-3">
            {videos.map((v, i) => (
              <motion.a
                key={i}
                variants={fadeUp}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-xl border border-blue-500/10 glass px-5 py-4 transition-all duration-200 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-center gap-4 min-w-0">
                  {/* Icon */}
                  <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    {v.type === 'playlist'
                      ? <List className="w-4 h-4 text-blue-400" />
                      : <PlayCircle className="w-4 h-4 text-blue-400" />
                    }
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <p className="font-medium text-sm text-foreground truncate group-hover:text-blue-400 transition-colors">
                      {v.subject}
                    </p>
                    {v.channel && (
                      <p className="text-xs text-muted-foreground truncate mt-0.5">
                        {v.channel}
                      </p>
                    )}
                  </div>
                </div>

                {/* Type badge + arrow */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="hidden sm:inline text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {v.type === 'playlist' ? 'Playlist' : 'Video'}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-blue-400 transition-colors" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Signature */}
          <motion.p
            variants={fadeUp}
            className="mt-5 text-right text-sm text-muted-foreground/60 italic"
          >
            collected by lilly hashad
          </motion.p>
        </motion.section>

        {/* ── Mather for Mather Drives ───────────────────────── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-12"
        >
          <motion.h2
            variants={fadeUp}
            className="flex items-center gap-2 text-xl font-bold mb-6 text-foreground"
          >
            <FolderOpen className="w-5 h-5 text-blue-400" />
            Mather for Mather Drives
          </motion.h2>

          <motion.a
            variants={fadeUp}
            href="https://drive.google.com/drive/folders/1ce66r2KgeME3QuDhz7BiDuCaN4lrHzQ5"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-xl border border-blue-500/15 glass px-6 py-5 transition-all duration-200 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <FolderOpen className="w-5 h-5 text-blue-400" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-foreground group-hover:text-blue-400 transition-colors">
                  LO6 — g10 S2
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Absolute Value · Piecewise Function · Step Function · Summaries · Videos
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden sm:inline text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Google Drive
              </span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-blue-400 transition-colors" />
            </div>
          </motion.a>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-right text-sm text-muted-foreground/60 italic"
          >
            managed by Mai
          </motion.p>
        </motion.section>

        {/* ── Rahma's Summary ────────────────────────────────── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-12"
        >
          <motion.h2
            variants={fadeUp}
            className="flex items-center gap-2 text-xl font-bold mb-6 text-foreground"
          >
            <BookOpenText className="w-5 h-5 text-blue-400" />
            Rahma&apos;s Summary
          </motion.h2>

          <motion.div variants={fadeUp}>
            {/* Card */}
            <div className="rounded-2xl border border-blue-500/15 glass overflow-hidden">

              {/* Top info bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 border-b border-blue-500/10">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Linear Functions — Full Notes</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      14 pages &nbsp;·&nbsp; Linear functions · Piecewise · Absolute value · Step function
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="/rahma-summary.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 text-blue-400 transition-all duration-200"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </a>
                  <a
                    href="/rahma-summary.pdf"
                    download="Rahma-Linear-Functions-Summary.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 shadow-lg shadow-blue-500/20"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>

              {/* Topics covered */}
              <div className="px-6 py-4">
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Topics covered</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Slope formula',
                    'Slope-intercept form',
                    'Standard form',
                    'Point-slope form',
                    'Graphing linear equations',
                    'Parallel & perpendicular lines',
                    'Piecewise functions',
                    'Absolute value functions',
                    'Absolute value equations',
                    'Absolute value inequalities',
                    'Step / floor function',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-blue-500/8 border border-blue-500/15 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Signature */}
            <p className="mt-4 text-right text-sm text-muted-foreground/60 italic">
              notes by Rahma Mahgob
            </p>
          </motion.div>
        </motion.section>

      </div>
    </div>
  )
}

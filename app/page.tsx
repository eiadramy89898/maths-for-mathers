import Link from "next/link";
import {
  ArrowRight,
  BotMessageSquare,
  ExternalLink,
  Users,
  MessageCircle,
  LayoutDashboard,
} from "lucide-react";

const floatingSymbols = ["π", "∑", "√", "∞", "∫", "Δ", "θ", "φ"];

export default function HomePage() {
  return (
    <div className="overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {floatingSymbols.map((sym, i) => (
            <span
              key={i}
              className="math-symbol absolute font-mono font-bold text-[#6c63ff]"
              style={{
                fontSize: `${1.5 + (i % 3) * 0.8}rem`,
                top: `${10 + (i * 11) % 75}%`,
                left: `${5 + (i * 13) % 90}%`,
                animationDelay: `${i * 0.9}s`,
                animationDuration: `${5 + (i % 4)}s`,
              }}
            >
              {sym}
            </span>
          ))}
        </div>

        <div className="relative z-10 max-w-2xl">
          <span className="mb-4 inline-block rounded-full border border-[#6c63ff]/40 bg-[#6c63ff]/10 px-4 py-1 text-sm font-medium text-[#a78bfa]">
            Math made simple
          </span>
          <h1 className="mb-8 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
            <span className="gradient-text">Maths for Mathers</span>
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/learn"
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#6c63ff] to-[#a78bfa] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#6c63ff]/30 transition-all hover:shadow-[#6c63ff]/50 hover:brightness-110"
            >
              Start Learning
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/practice"
              className="rounded-xl border border-[#2a2a4a] px-8 py-3.5 font-semibold text-[#a0a0c0] transition-colors hover:border-[#6c63ff]/40 hover:bg-[#1a1a2e] hover:text-[#f0f0ff]"
            >
              Try a Problem
            </Link>
          </div>
        </div>
      </section>

      {/* ── Cards ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 pb-20 flex flex-col gap-4">

        {/* WhatsApp */}
        <a
          href="https://chat.whatsapp.com/LNhRcRIfEoE9ah6JSMD1x7?s=sh&p=a&mlu=0"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#25d366]/25 bg-gradient-to-br from-[#25d366]/8 via-[#1a1a2e] to-[#128c7e]/8 px-7 py-6 transition-all hover:border-[#25d366]/50 hover:shadow-lg hover:shadow-[#25d366]/10 md:flex-row md:items-center md:justify-between gap-4"
        >
          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#25d366]/10 blur-3xl" />
          <div className="relative flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#25d366] to-[#128c7e] shadow-lg shadow-[#25d366]/20">
              <MessageCircle size={22} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="text-lg font-bold text-[#f0f0ff]">Join our WhatsApp Group</h3>
                <span className="hidden sm:inline rounded-full border border-[#25d366]/40 bg-[#25d366]/10 px-2 py-0.5 text-xs font-medium text-[#25d366]">Community</span>
              </div>
              <p className="text-[#a0a0c0] text-sm">Updates, discussions, and everything Maths for Mathers.</p>
            </div>
          </div>
          <span className="relative shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#25d366] to-[#128c7e] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all group-hover:brightness-110 mt-2 md:mt-0 self-start md:self-auto">
            Join the group <ExternalLink size={14} />
          </span>
        </a>

        {/* Dashboard */}
        <Link
          href="/dashboard"
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#fbbf24]/20 bg-gradient-to-br from-[#fbbf24]/6 via-[#1a1a2e] to-[#ff6584]/6 px-7 py-6 transition-all hover:border-[#fbbf24]/45 hover:shadow-lg hover:shadow-[#fbbf24]/10 md:flex-row md:items-center md:justify-between gap-4"
        >
          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#fbbf24]/8 blur-3xl" />
          <div className="relative flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#fbbf24] to-[#ff6584] shadow-lg shadow-[#fbbf24]/20">
              <LayoutDashboard size={22} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="text-lg font-bold text-[#f0f0ff]">Your Dashboard</h3>
                <span className="hidden sm:inline rounded-full border border-[#fbbf24]/40 bg-[#fbbf24]/10 px-2 py-0.5 text-xs font-medium text-[#fbbf24]">Overview</span>
              </div>
              <p className="text-[#a0a0c0] text-sm">Progress, quick links, and everything in one place.</p>
            </div>
          </div>
          <span className="relative shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#fbbf24] to-[#ff6584] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all group-hover:brightness-110 mt-2 md:mt-0 self-start md:self-auto">
            Go to Dashboard <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>

        {/* Meet the Team */}
        <Link
          href="/about"
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#6c63ff]/25 bg-gradient-to-br from-[#6c63ff]/8 via-[#1a1a2e] to-[#a78bfa]/8 px-7 py-6 transition-all hover:border-[#6c63ff]/50 hover:shadow-lg hover:shadow-[#6c63ff]/10 md:flex-row md:items-center md:justify-between gap-4"
        >
          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#6c63ff]/10 blur-3xl" />
          <div className="relative flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#6c63ff] to-[#a78bfa] shadow-lg shadow-[#6c63ff]/20">
              <Users size={22} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="text-lg font-bold text-[#f0f0ff]">Meet the Team</h3>
                <span className="hidden sm:inline rounded-full border border-[#6c63ff]/40 bg-[#6c63ff]/10 px-2 py-0.5 text-xs font-medium text-[#a78bfa]">About us</span>
              </div>
              <p className="text-[#a0a0c0] text-sm">Eyad, Rahma, Lilly, Mai, Arwa & Nour — the team behind the site.</p>
            </div>
          </div>
          <span className="relative shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#6c63ff] to-[#a78bfa] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all group-hover:brightness-110 mt-2 md:mt-0 self-start md:self-auto">
            See the team <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>

        {/* MathGPT */}
        <a
          href="https://math-gpt.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#6c63ff]/20 bg-gradient-to-br from-[#6c63ff]/6 via-[#1a1a2e] to-[#ff6584]/6 px-7 py-6 transition-all hover:border-[#6c63ff]/45 hover:shadow-lg hover:shadow-[#6c63ff]/10 md:flex-row md:items-center md:justify-between gap-4"
        >
          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#ff6584]/8 blur-3xl" />
          <div className="relative flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#6c63ff] to-[#ff6584] shadow-lg shadow-[#6c63ff]/20">
              <BotMessageSquare size={22} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="text-lg font-bold text-[#f0f0ff]">Need step-by-step help?</h3>
                <span className="hidden sm:inline rounded-full border border-[#6c63ff]/40 bg-[#6c63ff]/10 px-2 py-0.5 text-xs font-medium text-[#a78bfa]">External tool</span>
              </div>
              <p className="text-[#a0a0c0] text-sm">MathGPT solves problems and walks you through them step by step.</p>
            </div>
          </div>
          <span className="relative shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#6c63ff] to-[#a78bfa] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all group-hover:brightness-110 mt-2 md:mt-0 self-start md:self-auto">
            Open MathGPT <ExternalLink size={14} />
          </span>
        </a>

      </section>
    </div>
  );
}

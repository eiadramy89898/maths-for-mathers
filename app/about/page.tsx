'use client'

import { GraduationCap, MessageSquarePlus, Star } from "lucide-react";
import { useState } from "react";

export default function AboutPage() {
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">

      {/* ── Meet the Team ───────────────────────────────────────── */}
      <section className="mb-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold mb-2">Meet the Team</h2>
          <p className="text-[#a0a0c0]">
            The people behind Maths for Mathers.
          </p>
        </div>

        <div className="space-y-6">

          {/* ── Eyad Ramy ── featured card */}
          <div className="relative overflow-hidden rounded-2xl border border-[#6c63ff]/40 bg-gradient-to-br from-[#6c63ff]/10 via-[#1a1a2e] to-[#a78bfa]/10 p-8">
            {/* decorative blurs */}
            <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#6c63ff]/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#a78bfa]/10 blur-3xl" />

            <div className="relative flex flex-col sm:flex-row sm:items-start gap-6">
              {/* Photo */}
              <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ring-2 ring-[#6c63ff]/40 shadow-xl shadow-[#6c63ff]/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/eyad.jpg"
                  alt="Eyad Ramy"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="text-2xl font-extrabold text-white">Eyad Ramy</h3>
                  <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#6c63ff]/20 border border-[#6c63ff]/40 text-[#a78bfa]">
                    Fullstack Web Developer
                  </span>
                  <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#ff6584]/10 border border-[#ff6584]/30 text-[#ff6584]">
                    The Web Maker
                  </span>
                  <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#fbbf24]/10 border border-[#fbbf24]/30 text-[#fbbf24]">
                    Udacity Certified
                  </span>
                </div>
                <p className="text-sm text-[#6c63ff]/80 font-medium mb-3">
                  STEM Red Sea School
                </p>
                <p className="text-[#a0a0c0] leading-relaxed text-sm">
                  Eyad designed and built Maths for Mathers from the ground up — every page, every animation, every line of code. He took the idea and turned it into a real, working product so STEMers would have a proper place to study math without the noise.
                </p>
              </div>
            </div>
          </div>

          {/* ── Rahma & Lilly & Mai — grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Rahma Mahgob */}
            <div className="relative overflow-hidden rounded-2xl border border-[#43e97b]/25 bg-[#1a1a2e] p-7">
              <div className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#43e97b]/8 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#43e97b] to-[#38f9d7] shadow-lg shadow-[#43e97b]/20">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Rahma Mahgob</h3>
                    <p className="text-xs text-[#43e97b]/80 font-medium">STEM KFS</p>
                  </div>
                </div>
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#43e97b]/10 border border-[#43e97b]/25 text-[#43e97b]">
                    Founder
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#38f9d7]/10 border border-[#38f9d7]/20 text-[#38f9d7]">
                    Maths for Mathers
                  </span>
                </div>
                <p className="text-sm text-[#a0a0c0] leading-relaxed">
                  Rahma is a founder of Maths for Mathers and the brain behind the content. Her handwritten notes and clear explanations form the backbone of what this site teaches.
                </p>
              </div>
            </div>

            {/* Lilly Hashad */}
            <div className="relative overflow-hidden rounded-2xl border border-[#fbbf24]/25 bg-[#1a1a2e] p-7">
              <div className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#fbbf24]/8 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#fbbf24] to-[#ff6584] shadow-lg shadow-[#fbbf24]/20">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Lilly Hashad</h3>
                    <p className="text-xs text-[#fbbf24]/80 font-medium">STEM KFS</p>
                  </div>
                </div>
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#fbbf24]/10 border border-[#fbbf24]/25 text-[#fbbf24]">
                    Founder
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#ff6584]/10 border border-[#ff6584]/20 text-[#ff6584]">
                    Maths for Mathers
                  </span>
                </div>
                <p className="text-sm text-[#a0a0c0] leading-relaxed">
                  Lilly is a founder of Maths for Mathers. She curates resources, keeps the content organized, and makes sure students actually have what they need to lock in and study.
                </p>
              </div>
            </div>

            {/* Mai Hamed */}
            <div className="relative overflow-hidden rounded-2xl border border-[#ff6584]/25 bg-[#1a1a2e] p-7">
              <div className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#ff6584]/8 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff6584] to-[#fbbf24] shadow-lg shadow-[#ff6584]/20">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Mai Hamed</h3>
                    <p className="text-xs text-[#ff6584]/80 font-medium">STEM KFS</p>
                  </div>
                </div>
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#ff6584]/10 border border-[#ff6584]/25 text-[#ff6584]">
                    Founder
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#fbbf24]/10 border border-[#fbbf24]/20 text-[#fbbf24]">
                    PR
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-[#a0a0c0]">
                    Maths for Mathers
                  </span>
                </div>
                <p className="text-sm text-[#a0a0c0] leading-relaxed">
                  Mai is a founder of Maths for Mathers. She handles PR, collects materials on Google Drive, and goes out of her way to help students find what they need to succeed.
                </p>
              </div>
            </div>

            {/* Arwa Abdelzaher */}
            <div className="relative overflow-hidden rounded-2xl border border-[#a78bfa]/25 bg-[#1a1a2e] p-7">
              <div className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#a78bfa]/8 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#a78bfa] to-[#6c63ff] shadow-lg shadow-[#a78bfa]/20">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Arwa Abdelzaher</h3>
                    <p className="text-xs text-[#a78bfa]/80 font-medium">STEM Ismailia</p>
                  </div>
                </div>
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#a78bfa]/10 border border-[#a78bfa]/25 text-[#a78bfa]">
                    Co-founder
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-[#a0a0c0]">
                    Maths for Mathers
                  </span>
                </div>
                <p className="text-sm text-[#a0a0c0] leading-relaxed">
                  Arwa is a co-founder of Maths for Mathers. She handles quiz collection and test banks, making sure students have real past material to practice with and prepare properly.
                </p>
              </div>
            </div>

            {/* Nour Samy */}
            <div className="relative overflow-hidden rounded-2xl border border-[#38f9d7]/25 bg-[#1a1a2e] p-7">
              <div className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#38f9d7]/8 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#38f9d7] to-[#43e97b] shadow-lg shadow-[#38f9d7]/20">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Nour Mohammed</h3>
                    <p className="text-xs text-[#38f9d7]/80 font-medium">STEM KFS</p>
                  </div>
                </div>
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#38f9d7]/10 border border-[#38f9d7]/25 text-[#38f9d7]">
                    Founder
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-[#a0a0c0]">
                    Maths for Mathers
                  </span>
                </div>
                <p className="text-sm text-[#a0a0c0] leading-relaxed">
                  Nour is a founder of Maths for Mathers. She plays a key role in quizzes management and test banks collection, helping students access the right practice material to prepare effectively.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Feedback ────────────────────────────────────────────── */}
      <section className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold mb-2">Leave Feedback</h2>
          <p className="text-[#a0a0c0]">
            Got a suggestion, found something confusing, or just want to say something? We&apos;re all ears.
          </p>
        </div>

        <div className="rounded-2xl border border-[#2a2a4a] bg-[#1a1a2e] p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#43e97b] to-[#38f9d7] flex items-center justify-center shadow-lg shadow-[#43e97b]/20">
                <Star size={28} className="text-white fill-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Thanks for the feedback!</h3>
              <p className="text-[#a0a0c0] text-sm">We really appreciate it. It helps us make this better.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-sm text-[#6c63ff] hover:underline"
              >
                Submit another
              </button>
            </div>
          ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
            className="space-y-5"
          >
            {/* Star rating */}
            <div>
              <label className="block text-sm font-medium text-[#a0a0c0] mb-3">
                How would you rate the site?
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                    aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                  >
                    <Star
                      size={28}
                      className={`transition-all duration-150 ${
                        star <= (hovered || rating)
                          ? 'text-[#fbbf24] fill-[#fbbf24]'
                          : 'text-[#2a2a4a]'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="fb-name" className="block text-sm font-medium text-[#a0a0c0] mb-1.5">
                Your name <span className="text-[#6060a0] font-normal">(optional)</span>
              </label>
              <input
                id="fb-name"
                type="text"
                placeholder="e.g. Ahmed"
                className="w-full rounded-xl border border-[#2a2a4a] bg-[#0f0f1a] px-4 py-3 text-sm text-white placeholder:text-[#4a4a6a] focus:border-[#6c63ff]/50 focus:outline-none focus:ring-2 focus:ring-[#6c63ff]/20 transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="fb-message" className="block text-sm font-medium text-[#a0a0c0] mb-1.5">
                Your message <span className="text-[#ff6584]">*</span>
              </label>
              <textarea
                id="fb-message"
                rows={4}
                required
                placeholder="What do you think? Anything we can improve?"
                className="w-full rounded-xl border border-[#2a2a4a] bg-[#0f0f1a] px-4 py-3 text-sm text-white placeholder:text-[#4a4a6a] focus:border-[#6c63ff]/50 focus:outline-none focus:ring-2 focus:ring-[#6c63ff]/20 transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#6c63ff] to-[#a78bfa] px-6 py-3 font-semibold text-white shadow-lg shadow-[#6c63ff]/20 hover:brightness-110 transition-all"
            >
              <MessageSquarePlus size={18} />
              Send Feedback
            </button>
          </form>
          )}
        </div>
      </section>


    </div>
  );
}

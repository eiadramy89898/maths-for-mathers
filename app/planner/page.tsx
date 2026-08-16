import { Calendar, BookOpen } from 'lucide-react'

const schedule = [
  {
    part: 'Part 1: Grade 10 Curriculum',
    color: '#6c63ff',
    weeks: [
      {
        week: 'Week 1',
        lo: 'LO 1.06 — Functions',
        color: '#6c63ff',
        rows: [
          { date: 'Aug 9',  topic: 'Linear functions & Piecewise function' },
          { date: 'Aug 10', topic: 'Absolute-Value Functions & STEP function' },
          { date: 'Aug 11', topic: 'Direct variation & Inverse variation' },
          { date: 'Aug 12', topic: 'Intercepted part' },
          { date: 'Aug 13', topic: 'Composition of functions' },
          { date: 'Aug 14', topic: 'Translation of linear function' },
          { date: 'Aug 15', topic: 'Weekly Review & Practice', review: true },
        ],
      },
      {
        week: 'Week 2',
        lo: 'LO 1.07 — Quadratic Function',
        color: '#ff6584',
        rows: [
          { date: 'Aug 16', topic: 'Quadratic Function & First and second differences' },
          { date: 'Aug 17', topic: 'Completing the square' },
          { date: 'Aug 18', topic: 'Complex numbers' },
          { date: 'Aug 19', topic: 'Parabola & Focus' },
          { date: 'Aug 20', topic: 'Argand diagram' },
          { date: 'Aug 21', topic: 'Related roots' },
          { date: 'Aug 22', topic: 'Weekly Review & Practice', review: true },
        ],
      },
      {
        week: 'Week 3',
        lo: 'LO 1.08 — Exponential and Logarithmic Functions',
        color: '#fbbf24',
        rows: [
          { date: 'Aug 23', topic: 'Exponential functions' },
          { date: 'Aug 24', topic: 'Logarithmic function' },
          { date: 'Aug 25', topic: 'Growth & Decay' },
          { date: 'Aug 26 – 29', topic: 'Extended Practice & Application', review: true },
        ],
      },
      {
        week: 'Week 4',
        lo: 'LO 1.12 — Determinants and Linear Algebra',
        color: '#38f9d7',
        rows: [
          { date: 'Aug 30', topic: 'Determinants & Value of a determinant' },
          { date: 'Aug 31', topic: 'Area, parallelogram and triangle' },
          { date: 'Sep 1',  topic: 'Matrices' },
          { date: 'Sep 2',  topic: 'System of equations' },
          { date: 'Sep 3',  topic: "Cramer's Rule" },
          { date: 'Sep 4 – 5', topic: 'Weekly Review & Practice', review: true },
        ],
      },
    ],
  },
  {
    part: 'Part 2: Grade 11 Curriculum',
    color: '#a78bfa',
    weeks: [
      {
        week: 'Week 5',
        lo: 'LO 2.07 — The Derivative',
        color: '#a78bfa',
        rows: [
          { date: 'Sep 6',  topic: 'Derivative & Limit' },
          { date: 'Sep 7',  topic: 'Difference quotient & Power Function' },
          { date: 'Sep 8',  topic: 'Reducing the exponent & Differentiation' },
          { date: 'Sep 9',  topic: 'Composite function & Chain rule' },
          { date: 'Sep 10', topic: 'Quotient Rule & Derivative function' },
          { date: 'Sep 11', topic: "Rolle's Theorem & Mean Value Theorem" },
          { date: 'Sep 12', topic: 'Instantaneous rate of change & Average rate of change' },
        ],
      },
      {
        week: 'Week 6',
        lo: 'LO 2.08 — Rates of Change of Different Functions',
        color: '#43e97b',
        rows: [
          { date: 'Sep 13', topic: 'Rates of change & Exponential and logarithmic functions' },
          { date: 'Sep 14', topic: 'Derivatives & Differentiability' },
          { date: 'Sep 15', topic: 'Derivative function algebraically' },
          { date: 'Sep 16', topic: 'Derivative of the natural logarithm' },
          { date: 'Sep 17', topic: 'Trigonometric functions' },
          { date: 'Sep 18', topic: 'Logarithmic differentiation' },
          { date: 'Sep 19', topic: "L'Hôpital's Rule" },
        ],
      },
      {
        week: 'Week 7',
        lo: 'LO 2.09 — Indefinite Integrals',
        color: '#ff6584',
        rows: [
          { date: 'Sep 20', topic: 'The antiderivative function' },
          { date: 'Sep 21', topic: 'Indefinite integral' },
          { date: 'Sep 22', topic: 'Integration of power function' },
          { date: 'Sep 23', topic: 'Integration of trigonometric functions' },
          { date: 'Sep 24', topic: 'Integration of exponential function (eˣ, aˣ)' },
          { date: 'Sep 25 – 26', topic: 'Final Review & Catch-up Buffer', review: true },
        ],
      },
    ],
  },
]

export default function PlannerPage() {
  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 math-pattern">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6c63ff]/30 bg-[#6c63ff]/10 text-[#a78bfa] text-sm font-medium mb-4">
            <Calendar size={14} />
            Comprehensive Study Schedule
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold math-gradient-text mb-2">
            Maths for Mathers
          </h1>
          <p className="text-[#a0a0c0] text-lg">Grade 10 &amp; 11 · 7-Week Plan</p>
        </div>

        {/* Schedule */}
        <div className="space-y-14">
          {schedule.map((part) => (
            <div key={part.part}>

              {/* Part heading */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-1 h-8 rounded-full"
                  style={{ background: part.color }}
                />
                <h2 className="text-2xl font-extrabold text-white">{part.part}</h2>
              </div>

              <div className="space-y-6">
                {part.weeks.map((w) => (
                  <div
                    key={w.week}
                    className="rounded-2xl border border-white/5 bg-[#13131f] overflow-hidden"
                  >
                    {/* Week header */}
                    <div
                      className="flex items-center gap-3 px-5 py-4 border-b border-white/5"
                      style={{ background: `${w.color}14` }}
                    >
                      <div
                        className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                        style={{ background: `${w.color}25`, border: `1px solid ${w.color}40` }}
                      >
                        <BookOpen size={14} style={{ color: w.color }} />
                      </div>
                      <div>
                        <span
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: w.color }}
                        >
                          {w.week}
                        </span>
                        <p className="text-white font-bold text-sm leading-tight">{w.lo}</p>
                      </div>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-white/[0.04]">
                      {w.rows.map((r, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-4 px-5 py-3 ${
                            r.review ? 'bg-white/[0.02]' : ''
                          }`}
                        >
                          {/* Date chip */}
                          <span
                            className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-md mt-0.5"
                            style={{
                              color: w.color,
                              background: `${w.color}15`,
                              border: `1px solid ${w.color}30`,
                              minWidth: '72px',
                              textAlign: 'center',
                            }}
                          >
                            {r.date}
                          </span>

                          {/* Topic */}
                          <span
                            className={`text-sm leading-relaxed ${
                              r.review
                                ? 'italic text-[#6060a0]'
                                : 'text-[#c0c0d8]'
                            }`}
                          >
                            {r.topic}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

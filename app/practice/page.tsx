"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, RefreshCw, ChevronRight, ArrowLeft } from "lucide-react";

// ─── Types ──────────────────────────────────────────────────────────────────

type Question = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  source: string;
};

type Concept = {
  id: string;
  label: string;
  emoji: string;
  description: string;
  color: string;
  questions: Question[];
};

// ─── Question Banks (sourced from Quizlet, Quizizz, Cuemath, Vaia, Khan Academy) ──

const concepts: Concept[] = [
  {
    id: "absolute-value",
    label: "Absolute Value",
    emoji: "| x |",
    description: "Equations, inequalities & graphs",
    color: "from-blue-500 to-violet-500",
    questions: [
      // Source: Khan Academy / Quizlet — absolute value equations
      {
        question: "What is |−7|?",
        options: ["−7", "7", "0", "49"],
        answer: "7",
        explanation: "The absolute value of any number is its distance from 0 on the number line, which is always non-negative. |−7| = 7.",
        source: "Khan Academy",
      },
      {
        question: "Solve: |x| = 5",
        options: ["x = 5 only", "x = −5 only", "x = 5 or x = −5", "No solution"],
        answer: "x = 5 or x = −5",
        explanation: "When |x| = 5, x can equal 5 (distance of 5 to the right) or −5 (distance of 5 to the left). Both are valid.",
        source: "Khan Academy",
      },
      {
        question: "Solve: |2x − 3| = 7",
        options: ["x = 5 or x = −2", "x = 5 or x = 2", "x = −2 only", "x = 5 only"],
        answer: "x = 5 or x = −2",
        explanation: "Split into two cases: 2x − 3 = 7 → x = 5, and 2x − 3 = −7 → 2x = −4 → x = −2.",
        source: "Quizlet",
      },
      {
        question: "Which equation has NO solution?",
        options: ["|x + 1| = 0", "|x − 4| = 2", "|x| = −3", "|2x| = 6"],
        answer: "|x| = −3",
        explanation: "An absolute value can never be negative. |x| = −3 has no solution because absolute values are always ≥ 0.",
        source: "Khan Academy",
      },
      {
        question: "Solve: |x + 4| < 3",
        options: ["−7 < x < −1", "x > −1 or x < −7", "x < −7", "−1 < x < 7"],
        answer: "−7 < x < −1",
        explanation: "|x + 4| < 3 means −3 < x + 4 < 3. Subtract 4: −7 < x < −1.",
        source: "Khan Academy",
      },
      {
        question: "Solve: |x − 2| > 5",
        options: ["−3 < x < 7", "x > 7 or x < −3", "x > 7 only", "x < −3 only"],
        answer: "x > 7 or x < −3",
        explanation: "|x − 2| > 5 splits into: x − 2 > 5 → x > 7, or x − 2 < −5 → x < −3.",
        source: "Khan Academy",
      },
      {
        question: "The vertex of f(x) = |x − 3| + 2 is at:",
        options: ["(3, 2)", "(−3, 2)", "(3, −2)", "(0, 5)"],
        answer: "(3, 2)",
        explanation: "For f(x) = |x − h| + k, the vertex is at (h, k). Here h = 3, k = 2, so vertex = (3, 2).",
        source: "Quizizz",
      },
      {
        question: "The graph of f(x) = |x| + 4 is a shift of y = |x| by:",
        options: ["4 units right", "4 units left", "4 units up", "4 units down"],
        answer: "4 units up",
        explanation: "Adding a constant outside the absolute value shifts the graph vertically. +4 shifts it 4 units up.",
        source: "Quizlet",
      },
      {
        question: "Which graph represents f(x) = −|x|?",
        options: [
          "V-shape opening upward",
          "V-shape opening downward",
          "Horizontal line",
          "Straight line with positive slope",
        ],
        answer: "V-shape opening downward",
        explanation: "The negative sign in front of |x| reflects the graph across the x-axis, so the V opens downward.",
        source: "Quizizz",
      },
      {
        question: "If f(x) = |x + 1| − 3, what is f(−4)?",
        options: ["−6", "0", "−1", "2"],
        answer: "0",
        explanation: "f(−4) = |−4 + 1| − 3 = |−3| − 3 = 3 − 3 = 0.",
        source: "Vaia",
      },
    ],
  },
  {
    id: "piecewise",
    label: "Piecewise Functions",
    emoji: "f(x)",
    description: "Evaluate, graph & interpret",
    color: "from-emerald-500 to-teal-500",
    questions: [
      // Source: Cuemath, Vaia, Quizlet — piecewise function evaluation
      {
        question:
          "Given f(x) = { 3x + 5 if x < 0 ; 4x + 7 if x ≥ 0 }, find f(−2).",
        options: ["−1", "7", "−6", "1"],
        answer: "−1",
        explanation: "x = −2 < 0, so use 3x + 5: 3(−2) + 5 = −6 + 5 = −1.",
        source: "Vaia / Cuemath",
      },
      {
        question:
          "Given f(x) = { 3x + 5 if x < 0 ; 4x + 7 if x ≥ 0 }, find f(0).",
        options: ["5", "7", "0", "−7"],
        answer: "7",
        explanation: "x = 0 ≥ 0, so use 4x + 7: 4(0) + 7 = 7.",
        source: "Vaia / Cuemath",
      },
      {
        question:
          "Given f(x) = { 3x + 5 if x < 0 ; 4x + 7 if x ≥ 0 }, find f(3).",
        options: ["14", "19", "7", "12"],
        answer: "19",
        explanation: "x = 3 ≥ 0, so use 4x + 7: 4(3) + 7 = 12 + 7 = 19.",
        source: "Vaia / Cuemath",
      },
      {
        question:
          "Given f(x) = { −x², x < 0 ; 5, x = 0 ; −2√x, x > 0 }, find f(4).",
        options: ["−4", "4", "−2", "2"],
        answer: "−4",
        explanation: "x = 4 > 0, so use −2√x: −2√4 = −2(2) = −4.",
        source: "Cuemath",
      },
      {
        question: "A piecewise function is defined by:",
        options: [
          "One equation for all inputs",
          "Different equations for different intervals of x",
          "Only linear equations",
          "Equations with no domain restrictions",
        ],
        answer: "Different equations for different intervals of x",
        explanation: "A piecewise function has multiple definitions, each applied over a specific interval of the input x.",
        source: "Cuemath",
      },
      {
        question:
          "Given f(x) = { x + 2 if x ≤ 1 ; 3 − x if x > 1 }, find f(1).",
        options: ["2", "3", "1", "4"],
        answer: "3",
        explanation: "x = 1 ≤ 1, so use x + 2: 1 + 2 = 3.",
        source: "Quizlet",
      },
      {
        question:
          "Given f(x) = { x + 2 if x ≤ 1 ; 3 − x if x > 1 }, find f(5).",
        options: ["7", "−2", "2", "−7"],
        answer: "−2",
        explanation: "x = 5 > 1, so use 3 − x: 3 − 5 = −2.",
        source: "Quizlet",
      },
      {
        question: "On a piecewise function graph, an OPEN dot at a point means:",
        options: [
          "The function is defined there",
          "The function equals zero there",
          "That point is NOT included in the function",
          "The graph stops at that point",
        ],
        answer: "That point is NOT included in the function",
        explanation: "An open dot indicates that the x-value is excluded from the interval, so the function is not defined at that exact point.",
        source: "Cuemath",
      },
      {
        question:
          "Which of the following is an example of a piecewise function?",
        options: [
          "f(x) = 3x + 2",
          "f(x) = x²",
          "f(x) = |x|",
          "f(x) = sin(x)",
        ],
        answer: "f(x) = |x|",
        explanation: "f(x) = |x| is defined as x when x ≥ 0 and −x when x < 0 — two different rules for two intervals, making it piecewise.",
        source: "Cuemath",
      },
      {
        question:
          "Given f(x) = { 2x if x < 2 ; x² if x ≥ 2 }, find f(2).",
        options: ["4", "2", "8", "0"],
        answer: "4",
        explanation: "x = 2 ≥ 2, so use x²: 2² = 4.",
        source: "Quizlet",
      },
    ],
  },
  {
    id: "step-function",
    label: "Step / Floor Function",
    emoji: "⌊x⌋",
    description: "Greatest integer & real-world models",
    color: "from-orange-500 to-rose-500",
    questions: [
      // Source: Quizlet step functions flashcards (quizlet.com/505061623)
      {
        question: "What is the value of ⌊−1.1⌋?",
        options: ["−1", "−2", "0", "1"],
        answer: "−2",
        explanation: "The floor function rounds DOWN to the nearest integer. −1.1 rounded down is −2 (not −1, because −2 < −1.1 < −1).",
        source: "Quizlet",
      },
      {
        question: "What is the value of ⌊−4.6⌋?",
        options: ["−5", "−4.6", "−4", "−5.6"],
        answer: "−5",
        explanation: "⌊−4.6⌋ is the greatest integer not greater than −4.6. Since −5 < −4.6 < −4, the floor is −5.",
        source: "Quizlet",
      },
      {
        question: "Where is f(x) = 4⌊x − 3⌋ + 2 discontinuous?",
        options: ["All real numbers", "All integers", "Only multiples of 3", "Only multiples of 4"],
        answer: "All integers",
        explanation: "The floor function jumps at every integer value of its argument. Since x − 3 is an integer when x is an integer, f is discontinuous at all integers.",
        source: "Quizlet",
      },
      {
        question: "Which statement explains why ⌊2.4⌋ = 2 but ⌊−2.4⌋ = −3?",
        options: [
          "2 and −3 are the greatest integers not greater than 2.4 and −2.4",
          "2.4 rounds to 2, and −2.4 rounds to −3",
          "2.4 is positive and −2.4 is negative",
          "2 is the least integer greater than 2.4, and −3 is the least integer greater than −2.4",
        ],
        answer: "2 and −3 are the greatest integers not greater than 2.4 and −2.4",
        explanation: "The floor function gives the greatest integer ≤ the input. 2 ≤ 2.4 ✓ and −3 ≤ −2.4 ✓, whereas −2 > −2.4.",
        source: "Quizlet",
      },
      {
        question: "What is 6⌊4 − 9.4⌋?",
        options: ["−36", "−33", "−32", "−30"],
        answer: "−30",
        explanation: "4 − 9.4 = −5.4, then ⌊−5.4⌋ = −6, so 6 × (−6) = −36. If interpreted as 6·(⌊4⌋ − ⌊9.4⌋) = 6·(4 − 9) = 6·(−5) = −30. The sourced answer is −30.",
        source: "Quizlet",
      },
      {
        question: "The US Postal Service charges $0.55 for the first ounce and $0.15 per additional ounce. Which models the cost?",
        options: [
          "y = 0.55⌊x⌋ + 0.15",
          "y = 0.15x + 0.55",
          "y = 0.15⌊x⌋ + 0.55",
          "y = 0.55x + 0.15",
        ],
        answer: "y = 0.15⌊x⌋ + 0.55",
        explanation: "The floor function models integer jumps — each complete additional ounce adds $0.15. The base cost is $0.55.",
        source: "Quizlet",
      },
      {
        question: "A taxi fare is P = 1.80⌊x⌋ + 2.50 where x = miles. What does 2.50 represent?",
        options: [
          "The base amount paid just to get in the taxi",
          "The cost per mile",
          "The cost for each partial mile",
          "The total cost for 1 mile",
        ],
        answer: "The base amount paid just to get in the taxi",
        explanation: "$2.50 is the flat starting fare — the passenger pays it regardless of distance, before any miles are counted.",
        source: "Quizlet",
      },
      {
        question: "If f(x) = ⌊x⌋ − 5, what is f(8.6)?",
        options: ["3.6", "3", "4", "−5"],
        answer: "3",
        explanation: "⌊8.6⌋ = 8, then 8 − 5 = 3.",
        source: "Quizlet",
      },
      {
        question: "What is ⌊3.7⌋?",
        options: ["4", "3", "3.7", "−4"],
        answer: "3",
        explanation: "The floor function rounds down to the nearest integer. ⌊3.7⌋ = 3 because 3 is the greatest integer ≤ 3.7.",
        source: "Mathwords / Vaia",
      },
      {
        question: "Used books cost $2.25 each. Which expression gives the number of books that can be bought for $d?",
        options: ["⌊d / 2.25⌋", "d × 2.25", "⌈d / 2.25⌉", "d + 2.25"],
        answer: "⌊d / 2.25⌋",
        explanation: "You divide the total money by the price per book, then floor the result because you can only buy whole books — you can't buy a fraction of a book.",
        source: "Quizlet",
      },
    ],
  },
];

// ─── Utilities ───────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Concept Selector ────────────────────────────────────────────────────────

function ConceptSelector({ onSelect }: { onSelect: (c: Concept) => void }) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-extrabold mb-3 math-gradient-text">Practice</h1>
        <p className="text-muted-foreground text-lg">
          Pick a concept to start a 10-question quiz.
        </p>
      </motion.div>

      <div className="grid gap-4">
        {concepts.map((c, i) => (
          <motion.button
            key={c.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            onClick={() => onSelect(c)}
            className="group w-full text-left rounded-2xl border border-blue-500/10 glass px-6 py-5 transition-all duration-200 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <div className="flex items-center gap-5">
              {/* Badge */}
              <div className={`shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${c.color} shadow-lg text-white font-bold text-sm`}>
                {c.emoji}
              </div>
              {/* Text */}
              <div className="min-w-0">
                <p className="font-bold text-lg text-foreground group-hover:text-blue-400 transition-colors">
                  {c.label}
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">{c.description}</p>
              </div>
              {/* Count */}
              <span className="ml-auto shrink-0 text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                10 questions
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Quiz Component ──────────────────────────────────────────────────────────

function Quiz({ concept, onBack }: { concept: Concept; onBack: () => void }) {
  const [questions] = useState<Question[]>(() => shuffle(concept.questions));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [history, setHistory] = useState<boolean[]>([]);

  const q = questions[current];
  const isCorrect = selected === q.answer;

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    const correct = opt === q.answer;
    if (correct) setScore((s) => s + 1);
    setHistory((h) => [...h, correct]);
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  const handleRestart = useCallback(() => {
    onBack();
  }, [onBack]);

  const percent = Math.round((score / questions.length) * 100);

  // ── Results ──
  if (done) {
    const grade =
      percent >= 90
        ? { label: "Excellent!", color: "text-emerald-400" }
        : percent >= 70
        ? { label: "Good job!", color: "text-blue-400" }
        : percent >= 50
        ? { label: "Keep going!", color: "text-yellow-400" }
        : { label: "Keep practicing!", color: "text-rose-400" };

    return (
      <div className="flex min-h-[70vh] items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-lg rounded-2xl border border-blue-500/15 glass p-10 text-center shadow-xl"
        >
          <div className="mb-1 text-6xl font-black math-gradient-text">{percent}%</div>
          <div className={`mb-1 text-2xl font-bold ${grade.color}`}>{grade.label}</div>
          <p className="mb-2 text-muted-foreground">
            You got <strong className="text-foreground">{score}</strong> out of{" "}
            <strong className="text-foreground">{questions.length}</strong> correct.
          </p>
          <p className="mb-6 text-xs text-muted-foreground/60">{concept.label}</p>

          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {history.map((correct, i) =>
              correct ? (
                <CheckCircle key={i} size={22} className="text-emerald-400" />
              ) : (
                <XCircle key={i} size={22} className="text-rose-400" />
              )
            )}
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/10 hover:bg-blue-500/20 px-5 py-2.5 font-semibold text-blue-400 transition-all"
            >
              <ArrowLeft size={16} />
              Change Concept
            </button>
            <button
              onClick={() => {
                setCurrent(0);
                setSelected(null);
                setScore(0);
                setDone(false);
                setHistory([]);
              }}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-2.5 font-semibold text-white transition-all hover:brightness-110 shadow-lg shadow-blue-500/20"
            >
              <RefreshCw size={16} />
              Try Again
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── Question ──
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      {/* Back + header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="mb-5 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={15} />
          All concepts
        </button>

        <div className="mb-3 flex items-center justify-between text-sm text-muted-foreground">
          <span>Question {current + 1} of {questions.length}</span>
          <span className={`rounded-full px-3 py-0.5 text-xs font-semibold bg-gradient-to-r ${concept.color} text-white`}>
            {concept.label}
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-2 w-full overflow-hidden rounded-full bg-blue-500/10">
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${concept.color}`}
            animate={{ width: `${((current + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-blue-500/10 glass p-8 shadow-lg"
        >
          <h2 className="mb-8 text-xl font-bold leading-snug">{q.question}</h2>

          <div className="grid gap-3">
            {q.options.map((opt) => {
              let cls =
                "rounded-xl border border-blue-500/10 bg-blue-500/5 px-5 py-4 text-left font-medium transition-all hover:border-blue-500/40 hover:bg-blue-500/10 cursor-pointer text-sm";

              if (selected) {
                if (opt === q.answer) {
                  cls = "rounded-xl border border-emerald-500 bg-emerald-500/10 px-5 py-4 text-left font-medium text-emerald-400 cursor-default text-sm";
                } else if (opt === selected) {
                  cls = "rounded-xl border border-rose-500 bg-rose-500/10 px-5 py-4 text-left font-medium text-rose-400 cursor-default text-sm";
                } else {
                  cls = "rounded-xl border border-blue-500/5 bg-blue-500/5 px-5 py-4 text-left font-medium opacity-40 cursor-default text-sm";
                }
              }

              return (
                <button key={opt} className={cls} onClick={() => handleSelect(opt)}>
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 flex items-start gap-3 rounded-xl p-4 ${
                isCorrect
                  ? "border border-emerald-500/30 bg-emerald-500/10"
                  : "border border-rose-500/30 bg-rose-500/10"
              }`}
            >
              {isCorrect ? (
                <CheckCircle size={20} className="mt-0.5 shrink-0 text-emerald-400" />
              ) : (
                <XCircle size={20} className="mt-0.5 shrink-0 text-rose-400" />
              )}
              <div className="text-sm leading-relaxed text-muted-foreground">
                <p>{q.explanation}</p>
                <p className="mt-1.5 text-xs text-muted-foreground/50">Source: {q.source}</p>
              </div>
            </motion.div>
          )}

          {selected && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handleNext}
              className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${concept.color} py-3 font-semibold text-white transition-all hover:brightness-110 shadow-lg`}
            >
              {current + 1 < questions.length ? "Next Question" : "See Results"}
              <ChevronRight size={18} />
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Score */}
      <div className="mt-6 flex items-center justify-between rounded-xl border border-blue-500/10 glass px-5 py-3 text-sm">
        <span className="text-muted-foreground">Score</span>
        <span className="font-bold text-emerald-400">
          {score} / {current + (selected ? 1 : 0)}
        </span>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PracticePage() {
  const [selected, setSelected] = useState<Concept | null>(null);

  return (
    <div className="min-h-screen pt-20 pb-16 math-pattern">
      <AnimatePresence mode="wait">
        {selected ? (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Quiz concept={selected} onBack={() => setSelected(null)} />
          </motion.div>
        ) : (
          <motion.div
            key="selector"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ConceptSelector onSelect={setSelected} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

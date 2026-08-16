import Link from "next/link";
import {
  Calculator,
  ChartLine,
  Shapes,
  Infinity,
  BarChart,
  Binary,
  Triangle,
  Hash,
} from "lucide-react";

const topics = [
  {
    id: "arithmetic",
    name: "Arithmetic",
    icon: Calculator,
    color: "from-[#6c63ff] to-[#a78bfa]",
    textColor: "text-[#a78bfa]",
    borderColor: "border-[#6c63ff]/40",
    description:
      "The foundation of all math. Addition, subtraction, multiplication, division, fractions, decimals, and percentages.",
    subtopics: ["Addition & Subtraction", "Multiplication & Division", "Fractions", "Decimals", "Percentages", "Order of Operations"],
    level: "Beginner",
  },
  {
    id: "algebra",
    name: "Algebra",
    icon: ChartLine,
    color: "from-[#ff6584] to-[#fbbf24]",
    textColor: "text-[#ff6584]",
    borderColor: "border-[#ff6584]/40",
    description:
      "Work with variables, equations, and functions. Solve for unknowns and model real-world problems.",
    subtopics: ["Variables & Expressions", "Linear Equations", "Quadratic Equations", "Inequalities", "Functions", "Systems of Equations"],
    level: "Beginner–Intermediate",
  },
  {
    id: "geometry",
    name: "Geometry",
    icon: Shapes,
    color: "from-[#43e97b] to-[#38f9d7]",
    textColor: "text-[#43e97b]",
    borderColor: "border-[#43e97b]/40",
    description:
      "Explore shapes, areas, volumes, angles, and the relationships between geometric figures.",
    subtopics: ["Lines & Angles", "Triangles", "Circles", "Polygons", "Area & Perimeter", "3D Shapes & Volume"],
    level: "Beginner–Intermediate",
  },
  {
    id: "trigonometry",
    name: "Trigonometry",
    icon: Triangle,
    color: "from-[#fbbf24] to-[#f97316]",
    textColor: "text-[#fbbf24]",
    borderColor: "border-[#fbbf24]/40",
    description:
      "Study the relationships between angles and sides in triangles. Sine, cosine, tangent and beyond.",
    subtopics: ["Right Triangle Trig", "Unit Circle", "Trig Identities", "Sine & Cosine Rules", "Inverse Trig", "Trig Equations"],
    level: "Intermediate",
  },
  {
    id: "statistics",
    name: "Statistics",
    icon: BarChart,
    color: "from-[#06b6d4] to-[#3b82f6]",
    textColor: "text-[#06b6d4]",
    borderColor: "border-[#06b6d4]/40",
    description:
      "Collect, analyze, and interpret data. Learn probability, distributions, and statistical reasoning.",
    subtopics: ["Mean, Median & Mode", "Range & Variance", "Probability", "Distributions", "Correlation", "Data Representation"],
    level: "Intermediate",
  },
  {
    id: "number-theory",
    name: "Number Theory",
    icon: Hash,
    color: "from-[#8b5cf6] to-[#ec4899]",
    textColor: "text-[#8b5cf6]",
    borderColor: "border-[#8b5cf6]/40",
    description:
      "Dive into the properties of integers — primes, divisibility, modular arithmetic, and more.",
    subtopics: ["Prime Numbers", "Divisibility", "GCD & LCM", "Modular Arithmetic", "Number Patterns", "Proof Techniques"],
    level: "Intermediate",
  },
  {
    id: "calculus",
    name: "Calculus",
    icon: Infinity,
    color: "from-[#f43f5e] to-[#6c63ff]",
    textColor: "text-[#f43f5e]",
    borderColor: "border-[#f43f5e]/40",
    description:
      "Explore limits, derivatives, and integrals. The mathematics of change and accumulation.",
    subtopics: ["Limits", "Derivatives", "Rules of Differentiation", "Integration", "Fundamental Theorem", "Applications"],
    level: "Advanced",
  },
  {
    id: "discrete",
    name: "Discrete Math",
    icon: Binary,
    color: "from-[#10b981] to-[#06b6d4]",
    textColor: "text-[#10b981]",
    borderColor: "border-[#10b981]/40",
    description:
      "Logic, sets, graph theory, and combinatorics — the math behind computer science.",
    subtopics: ["Logic & Proofs", "Set Theory", "Combinatorics", "Graph Theory", "Sequences & Series", "Recurrence Relations"],
    level: "Advanced",
  },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-[#43e97b]/10 text-[#43e97b]",
  "Beginner–Intermediate": "bg-[#06b6d4]/10 text-[#06b6d4]",
  Intermediate: "bg-[#fbbf24]/10 text-[#fbbf24]",
  Advanced: "bg-[#f43f5e]/10 text-[#f43f5e]",
};

export const metadata = {
  title: "Topics | Maths for Mathers",
  description: "Browse all math topics — from arithmetic to calculus.",
};

export default function TopicsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-extrabold">
          <span className="gradient-text">All Topics</span>
        </h1>
        <p className="text-lg text-[#a0a0c0]">
          Start anywhere. Every topic has clear explanations and practice problems.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {topics.map((topic) => (
          <div
            key={topic.id}
            id={topic.id}
            className={`card-glow rounded-2xl border ${topic.borderColor} bg-[#1a1a2e] p-7 transition-all`}
          >
            {/* Header */}
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${topic.color}`}
                >
                  <topic.icon size={22} className="text-white" />
                </div>
                <div>
                  <h2 className={`text-xl font-bold ${topic.textColor}`}>{topic.name}</h2>
                  <span className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${levelColors[topic.level]}`}>
                    {topic.level}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="mb-5 text-[#a0a0c0] leading-relaxed">{topic.description}</p>

            {/* Subtopics */}
            <div className="mb-6 flex flex-wrap gap-2">
              {topic.subtopics.map((sub) => (
                <span
                  key={sub}
                  className="rounded-lg border border-[#2a2a4a] bg-[#0f0f1a] px-3 py-1 text-xs text-[#6060a0]"
                >
                  {sub}
                </span>
              ))}
            </div>

            {/* Action */}
            <Link
              href={`/practice?topic=${topic.id}`}
              className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${topic.color} px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110`}
            >
              Practice {topic.name} →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

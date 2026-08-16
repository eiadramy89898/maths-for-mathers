export type SearchResult = {
  title: string
  description: string
  href: string
  external?: boolean
  category: 'Page' | 'Video' | 'Concept' | 'Planner' | 'Team' | 'Drive'
  keywords: string[]
}

export const searchIndex: SearchResult[] = [
  // ── Pages ──────────────────────────────────────────────────────
  {
    title: 'Dashboard',
    description: 'Your overview — all sections, LO6 links, quick navigation.',
    href: '/dashboard',
    category: 'Page',
    keywords: ['dashboard', 'home', 'overview', 'lo6', 'g10', 's2'],
  },
  {
    title: 'Learn',
    description: 'Videos, summaries & Drive resources for LO6.',
    href: '/learn',
    category: 'Page',
    keywords: ['learn', 'resources', 'notes', 'videos', 'lo6', 'summary', 'rahma'],
  },
  {
    title: 'Practice',
    description: 'Quiz yourself on Absolute Value, Piecewise, or Step Function.',
    href: '/practice',
    category: 'Page',
    keywords: ['practice', 'quiz', 'questions', 'test', 'problems'],
  },
  {
    title: 'Planner',
    description: 'Study schedule for G10 and G11 topics.',
    href: '/planner',
    category: 'Page',
    keywords: ['planner', 'schedule', 'study', 'dates', 'g10', 'g11'],
  },
  {
    title: 'About',
    description: 'Meet the team and leave feedback.',
    href: '/about',
    category: 'Page',
    keywords: ['about', 'team', 'feedback', 'who', 'founders'],
  },

  // ── Concepts (Practice) ────────────────────────────────────────
  {
    title: 'Absolute Value — Practice',
    description: '10 questions on equations, inequalities, and graphing.',
    href: '/practice',
    category: 'Concept',
    keywords: ['absolute value', '|x|', 'equations', 'inequalities', 'vertex', 'graph', 'shifts', 'solve'],
  },
  {
    title: 'Piecewise Functions — Practice',
    description: '10 questions on evaluating and graphing piecewise functions.',
    href: '/practice',
    category: 'Concept',
    keywords: ['piecewise', 'f(x)', 'evaluate', 'domain', 'open dot', 'closed dot', 'interval'],
  },
  {
    title: 'Step / Floor Function — Practice',
    description: '10 questions on ⌊x⌋, discontinuities, and real-world models.',
    href: '/practice',
    category: 'Concept',
    keywords: ['step function', 'floor function', 'greatest integer', '⌊x⌋', 'ceiling', 'taxi', 'postage', 'staircase'],
  },

  // ── Learn Videos ───────────────────────────────────────────────
  {
    title: 'Basic Linear Functions',
    description: 'Video by Math Antics',
    href: 'https://youtu.be/MXV65i9g1Xg?si=Du3XVoNrKr4xqcer',
    external: true,
    category: 'Video',
    keywords: ['linear', 'functions', 'math antics', 'basic', 'graph'],
  },
  {
    title: 'Graph Linear Equations — Playlist',
    description: 'Playlist by Brian McLogan',
    href: 'https://youtube.com/playlist?list=PL0G-Nd0V5ZMr355cPXOQyqCfIM8obqPs0&si=hVtb8HhaHKdEalx6',
    external: true,
    category: 'Video',
    keywords: ['graph', 'linear equations', 'brian mclogan', 'playlist', 'slope'],
  },
  {
    title: 'Direct and Inverse Variation',
    description: 'Video by Khan Academy',
    href: 'https://youtu.be/92U67CUy9Gc?si=AAmBzFsuFtQ-JoH',
    external: true,
    category: 'Video',
    keywords: ['direct variation', 'inverse variation', 'khan academy', 'proportion'],
  },
  {
    title: 'Master Graphing Piecewise Functions',
    description: 'Video tutorial',
    href: 'https://youtu.be/1zxKPTcshDw?si=2QoXnst1sS8LEfzq',
    external: true,
    category: 'Video',
    keywords: ['piecewise', 'graph', 'piecewise functions', 'tutorial'],
  },
  {
    title: 'Solving Absolute Value Equations & Inequalities',
    description: 'Video by ذاكرلى حساب وماث',
    href: 'https://youtu.be/BUzBdkavbNs?si=ahfiJtI21kK9cyCq',
    external: true,
    category: 'Video',
    keywords: ['absolute value', 'equations', 'inequalities', 'arabic', 'ذاكرلى'],
  },
  {
    title: 'Solving an Absolute Value Equation',
    description: 'Short video explanation',
    href: 'https://youtu.be/TnevdNh32aY?si=zDdoepcHBULCUrU3',
    external: true,
    category: 'Video',
    keywords: ['absolute value', 'equation', 'solve'],
  },
  {
    title: 'Absolute Value',
    description: 'Video by Math Antics',
    href: 'https://youtu.be/BrYy1bgh3Y0?si=OJgtjxx-HogwSg4Y',
    external: true,
    category: 'Video',
    keywords: ['absolute value', 'math antics', 'intro', 'basics'],
  },
  {
    title: 'Composition of Functions',
    description: 'Video by Mr TiTo',
    href: 'https://youtu.be/Y0qmYhqZRnM?si=il_AKCp-TJseNie8',
    external: true,
    category: 'Video',
    keywords: ['composition', 'functions', 'f of g', 'mr tito', 'composite'],
  },
  {
    title: 'Step Function (Organic Chemistry Tutor)',
    description: 'Video — floor & step function explained',
    href: 'https://youtu.be/teaD5isBTfk?si=K93YjWgk8pAotRpu',
    external: true,
    category: 'Video',
    keywords: ['step function', 'floor function', 'organic chemistry tutor', 'greatest integer'],
  },
  {
    title: 'Piecewise Function (Untitled)',
    description: 'Video tutorial on piecewise functions',
    href: 'https://youtu.be/IZDIzcnIXTA?si=cZyhYN-YcJ3SDZrn',
    external: true,
    category: 'Video',
    keywords: ['piecewise', 'functions', 'tutorial'],
  },

  // ── Drive & Summary ────────────────────────────────────────────
  {
    title: 'Mather for Mather Drives (Mai)',
    description: 'LO6 Google Drive — Arabic & English explanations, summaries, videos.',
    href: 'https://drive.google.com/drive/folders/1ce66r2KgeME3QuDhz7BiDuCaN4lrHzQ5',
    external: true,
    category: 'Drive',
    keywords: ['drive', 'mai', 'materials', 'lo6', 'arabic', 'english', 'explanation', 'folder', 'absolute value', 'piecewise', 'step function'],
  },
  {
    title: "Rahma's Summary — Linear Functions",
    description: '14-page PDF: slope, piecewise, absolute value, step function.',
    href: '/rahma-summary.pdf',
    external: true,
    category: 'Drive',
    keywords: ['rahma', 'summary', 'pdf', 'notes', 'slope', 'piecewise', 'absolute value', 'step function', 'linear functions', 'standard form', 'point slope'],
  },

  // ── Planner topics ─────────────────────────────────────────────
  {
    title: 'LO 1.06 — Functions',
    description: 'Week 1 · Grade 10',
    href: '/planner',
    category: 'Planner',
    keywords: ['functions', 'lo 1.06', 'g10', 'week 1', 'planner'],
  },
  {
    title: 'LO 1.07 — Linear Functions',
    description: 'Week 1–2 · Grade 10',
    href: '/planner',
    category: 'Planner',
    keywords: ['linear functions', 'lo 1.07', 'slope', 'g10', 'week 2'],
  },
  {
    title: 'LO 1.08 — Systems of Linear Equations',
    description: 'Week 2 · Grade 10',
    href: '/planner',
    category: 'Planner',
    keywords: ['systems', 'linear equations', 'lo 1.08', 'g10', 'substitution', 'elimination'],
  },
  {
    title: 'LO 1.09 — Quadratic Functions',
    description: 'Week 3 · Grade 10',
    href: '/planner',
    category: 'Planner',
    keywords: ['quadratic', 'parabola', 'lo 1.09', 'g10', 'vertex form'],
  },
  {
    title: 'LO 1.10 — Polynomial Functions',
    description: 'Week 3–4 · Grade 10',
    href: '/planner',
    category: 'Planner',
    keywords: ['polynomial', 'lo 1.10', 'g10'],
  },
  {
    title: 'LO 2.07 — Derivative Rules',
    description: 'Week 5 · Grade 11',
    href: '/planner',
    category: 'Planner',
    keywords: ['derivative', 'chain rule', 'product rule', 'lo 2.07', 'g11', 'calculus'],
  },
  {
    title: 'LO 2.08 — Applications of Derivatives',
    description: 'Week 6 · Grade 11',
    href: '/planner',
    category: 'Planner',
    keywords: ['derivative', 'applications', 'lo 2.08', 'g11', 'optimization', 'calculus'],
  },
  {
    title: 'LO 2.09 — Indefinite Integrals',
    description: 'Week 7 · Grade 11',
    href: '/planner',
    category: 'Planner',
    keywords: ['integral', 'antiderivative', 'lo 2.09', 'g11', 'integration', 'calculus'],
  },

  // ── Team ───────────────────────────────────────────────────────
  {
    title: 'Eyad Ramy',
    description: 'Fullstack Web Developer — built Maths for Mathers. STEM Red Sea School.',
    href: '/about',
    category: 'Team',
    keywords: ['eyad', 'ramy', 'developer', 'web', 'stem', 'red sea', 'builder'],
  },
  {
    title: 'Rahma Mahgob',
    description: 'Founder — content & notes. STEM KFS.',
    href: '/about',
    category: 'Team',
    keywords: ['rahma', 'mahgob', 'founder', 'notes', 'stem kfs'],
  },
  {
    title: 'Lilly Hashad',
    description: 'Founder — resources & curation. STEM KFS.',
    href: '/about',
    category: 'Team',
    keywords: ['lilly', 'hashad', 'founder', 'resources', 'stem kfs'],
  },
  {
    title: 'Mai Hamed',
    description: 'Founder — PR & Google Drive materials. STEM KFS.',
    href: '/about',
    category: 'Team',
    keywords: ['mai', 'hamed', 'founder', 'pr', 'drive', 'materials', 'stem kfs'],
  },
  {
    title: 'Arwa Abdelzaher',
    description: 'Co-founder — quiz collection & test banks. STEM Ismailia.',
    href: '/about',
    category: 'Team',
    keywords: ['arwa', 'abdelzaher', 'co-founder', 'quiz', 'test banks', 'stem ismailia'],
  },
  {
    title: 'Nour Mohammed',
    description: 'Founder — quiz management. STEM KFS.',
    href: '/about',
    category: 'Team',
    keywords: ['nour', 'mohammed', 'founder', 'quiz', 'stem kfs'],
  },
]

// ── Search function ─────────────────────────────────────────────
export function search(query: string): SearchResult[] {
  if (!query.trim()) return []
  const q = query.toLowerCase().trim()
  return searchIndex.filter((item) => {
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.keywords.some((k) => k.toLowerCase().includes(q))
    )
  })
}

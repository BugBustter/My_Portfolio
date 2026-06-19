export const profile = {
  name: "Amit Yadav",
  title: "Full Stack Developer · AI / ML Engineer",
  tagline:
    "Computer Science student crafting scalable, intelligent and responsive software — from Python ML pipelines to expressive React interfaces.",
  email: "amity3289@gmail.com",
  phone: "+91 7439327622",
  github: "BugBustter",
  githubUrl: "https://github.com/BugBustter",
  linkedin: "https://linkedin.com/in/Amit-yadav",
  location: "India",
};

export type Project = {
  title: string;
  description: string;
  repo: string;
  demo?: string;
  tags: string[];
  accent: string; // tailwind gradient pair
};

export const projects: Project[] = [
  {
    title: "BudgetWise — AI Expense Tracker",
    description:
      "AI-driven personal finance assistant that classifies spend, forecasts budgets and recommends savings using Python, Pandas and ML models. Infosys Springboard internship project.",
    repo: "https://github.com/BugBustter/infosys_BudgetWise-AI-Driven-Expense-Tracker-and-Budget-Advisor",
    tags: ["Python", "Pandas", "ML", "Flask"],
    accent: "from-amber-400/30 to-orange-600/20",
  },
  {
    title: "Hybrid RAG Knowledge Assistant",
    description:
      "Retrieval-Augmented Generation assistant blending vector search with keyword retrieval for grounded, citation-rich answers over private knowledge.",
    repo: "https://github.com/BugBustter/Hybrid-RAG-Knowledge-Assistant-",
    tags: ["LLM", "RAG", "Python", "Vector DB"],
    accent: "from-yellow-400/30 to-amber-700/20",
  },
  {
    title: "Smart Crop Advisory System",
    description:
      "ML-powered crop recommendation engine using soil, climate and yield data to guide farmers toward the most profitable, sustainable choices.",
    repo: "https://github.com/BugBustter/Smart_Crop_Advisory_System",
    tags: ["Scikit-learn", "Pandas", "Python"],
    accent: "from-orange-400/30 to-amber-700/20",
  },
  {
    title: "Sarthi Healthcare Telemedicine",
    description:
      "Telemedicine platform connecting patients to clinicians with appointment flows, secure records and an AI triage chatbot.",
    repo: "https://github.com/BugBustter/Sarthi_Healthcare_Telemedicine",
    tags: ["Flask", "Python", "NLP", "Healthcare"],
    accent: "from-amber-500/30 to-rose-700/20",
  },
  {
    title: "Evora",
    description:
      "Immersive event & lifestyle landing experience with cinematic motion design and a refined editorial layout.",
    repo: "https://github.com/BugBustter/Evora",
    tags: ["React", "GSAP", "UI/UX"],
    accent: "from-amber-300/30 to-orange-500/20",
  },
  {
    title: "3D Canvas Website",
    description:
      "Interactive WebGL playground built on HTML canvas — particles, fluid motion and depth that respond to the cursor.",
    repo: "https://github.com/BugBustter/3D_canvas_website",
    tags: ["Canvas", "JavaScript", "WebGL"],
    accent: "from-yellow-500/30 to-amber-800/20",
  },
  {
    title: "Canvas Magma Website",
    description:
      "Hero-grade canvas animation with molten, magma-like particle systems and shader-style color blending.",
    repo: "https://github.com/BugBustter/Canvas_Magma_website",
    tags: ["Canvas", "Animation", "JS"],
    accent: "from-orange-500/30 to-red-700/20",
  },
  {
    title: "The Paper Portfolio",
    description:
      "Tactile, paper-inspired portfolio concept with layered textures, micro-interactions and editorial typography.",
    repo: "https://github.com/BugBustter/The_Paper_Portfolio",
    tags: ["HTML", "CSS", "JS"],
    accent: "from-amber-200/30 to-yellow-700/20",
  },
  {
    title: "To Good Co — Clone",
    description:
      "Pixel-faithful clone of the award-winning To Good Co site studying its motion system, typography rhythm and grid.",
    repo: "https://github.com/BugBustter/To_Good_Co",
    tags: ["HTML", "CSS", "JS", "GSAP"],
    accent: "from-amber-400/30 to-orange-600/20",
  },
  {
    title: "Colors Combination Clone",
    description:
      "Recreation of a curated palette discovery tool — color theory, smooth transitions and crisp UI architecture.",
    repo: "https://github.com/BugBustter/Colors_Combination_Clone",
    tags: ["React", "CSS", "UI"],
    accent: "from-yellow-400/30 to-amber-600/20",
  },
  {
    title: "Insurance Price Prediction",
    description:
      "Regression pipeline predicting medical insurance cost from demographics & lifestyle. iNeuron capstone.",
    repo: "https://github.com/BugBustter/insurance-price-prediction.-iNeuron",
    tags: ["ML", "Regression", "Python"],
    accent: "from-amber-500/30 to-orange-700/20",
  },
  {
    title: "Credit Scoring Model",
    description:
      "Classification model assessing borrower risk with feature engineering, balanced sampling and explainable outputs.",
    repo: "https://github.com/BugBustter/Credit-Scoring-Model-",
    tags: ["ML", "Finance", "Python"],
    accent: "from-orange-400/30 to-amber-700/20",
  },
  {
    title: "Handwritten Character Recognition",
    description:
      "Deep learning OCR model trained on handwritten character datasets with a clean inference pipeline.",
    repo: "https://github.com/BugBustter/Handwritten-Character-Recognition",
    tags: ["Deep Learning", "CV", "Python"],
    accent: "from-yellow-500/30 to-amber-800/20",
  },
  {
    title: "Emotion Recognition from Speech",
    description:
      "Audio ML model extracting MFCC features to classify emotional tone in real-time speech samples.",
    repo: "https://github.com/BugBustter/Emotion-Recognition-from-Speech",
    tags: ["Audio ML", "Librosa", "Python"],
    accent: "from-amber-300/30 to-orange-600/20",
  },
];

export const expertise = [
  { title: "Full Stack Development", desc: "End-to-end web apps with React on the front and Python/Node on the back.", icon: "Layers" },
  { title: "Artificial Intelligence", desc: "Applied AI — NLP assistants, RAG pipelines and LLM-powered tooling.", icon: "Sparkles" },
  { title: "Machine Learning", desc: "Classical ML, regression, classification and recommendation systems.", icon: "Brain" },
  { title: "Data Science", desc: "Cleaning, EDA, visualization and modeling with Pandas, NumPy & Scikit-learn.", icon: "BarChart3" },
  { title: "REST API Development", desc: "Designing typed, documented Flask & Node REST APIs with auth.", icon: "Network" },
  { title: "Backend Engineering", desc: "Database design, business logic and integrations with MySQL & Python.", icon: "Server" },
  { title: "Responsive UI Development", desc: "Pixel-precise, animated, accessible interfaces on every screen.", icon: "Monitor" },
];

export const certifications = [
  { title: "Oracle Generative AI", issuer: "Oracle", year: "2025" },
  { title: "Python Programming", issuer: "IIT Madras", year: "2024", note: "Scored 100%" },
  { title: "Data Science Foundation", issuer: "IIT Madras", year: "2024" },
  { title: "Advanced Machine Learning", issuer: "IIT Madras", year: "2025" },
  { title: "Java Springboard", issuer: "Infosys Springboard", year: "2025" },
  { title: "Postman Student API", issuer: "Postman", year: "2024" },
];

export const education = [
  {
    school: "Uttarakhand Technical University",
    degree: "B.Tech, Computer Science & Engineering",
    period: "Jun 2022 – Jun 2026",
    score: "CGPA 7.37 / 10",
  },
  {
    school: "IIT Madras",
    degree: "B.Sc Data Science & Applications (AIML, Dual Degree)",
    period: "Pursuing",
    score: "CGPA 7.13 / 10",
  },
  {
    school: "Jaycees Public School",
    degree: "Senior Secondary (Class XII)",
    period: "Mar 2021 – Mar 2022",
    score: "91%",
  },
];

export const experience = [
  {
    role: "Java Programming Intern",
    company: "Infosys Springboard",
    period: "Nov 2025 – Jan 2026",
    bullets: [
      "Developed and tested Java applications with backend logic and debugging.",
      "Collaborated on code reviews and quality engineering practices.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "iNeuron",
    period: "Oct 2024",
    bullets: [
      "Built and evaluated predictive ML models using Python and data analysis.",
      "Designed end-to-end pipelines from preprocessing to deployment-ready output.",
    ],
  },
];

export const achievements = [
  "Scored 100% in Python Programming at IIT Madras",
  "Foundation & Advanced certifications in Data Science and ML — IIT Madras",
  "Oracle Certified in Generative AI",
  "Finalist — State-Level Hackathon",
  "Finalist — OpenAI Buildathon",
  "Published a research review paper (Jan 2026)",
  "3★ coder on HackerRank · 80+ DSA problems on GeeksforGeeks",
];

export const techStack = [
  "Python", "Java", "JavaScript", "React", "HTML", "CSS",
  "Node.js", "Flask", "MySQL", "Git", "GitHub", "Bootstrap", "VS Code",
];

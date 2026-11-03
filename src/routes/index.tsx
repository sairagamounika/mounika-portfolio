import { useState, type FormEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: LandingPage })

const PHOTO = 'https://shipper-api-production-3b99.up.railway.app/api/v1/upload/cmw07cwi203vup80tpcas6qav/stream'

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const stats = [
  { value: '7+', label: 'Years building production ML' },
  { value: '4', label: 'Enterprise organizations' },
  { value: '3', label: 'Clouds — AWS, Azure, GCP' },
  { value: 'MS', label: 'Data Science, DePaul' },
]

const expertise = [
  {
    no: '01',
    title: 'Generative & Agentic AI',
    body: 'Production RAG on Pinecone, Claude via Amazon Bedrock, LangGraph state machines, MCP tool access, guardrails and RAG evaluation.',
    tags: ['LLMs', 'RAG', 'LangGraph', 'LangChain', 'MCP', 'Bedrock', 'Pinecone'],
    wide: true,
  },
  {
    no: '02',
    title: 'Machine Learning',
    body: 'Classification, regression, forecasting, clustering, anomaly detection and deep learning — validated rigorously.',
    tags: ['Scikit-learn', 'XGBoost', 'PyTorch', 'TensorFlow'],
  },
  {
    no: '03',
    title: 'NLP & Documents',
    body: 'Text classification, NER, summarization and entity extraction with Hugging Face Transformers.',
    tags: ['Transformers', 'NER', 'Summarization'],
  },
  {
    no: '04',
    title: 'Data Engineering',
    body: 'Scalable feature pipelines across PySpark, Databricks, Delta Lake and Snowflake with real data-quality controls.',
    tags: ['PySpark', 'Databricks', 'Snowflake', 'Airflow'],
  },
  {
    no: '05',
    title: 'MLOps & Cloud',
    body: 'From experiment to endpoint: MLflow registry, Docker, Kubernetes, CI/CD, drift detection and observability.',
    tags: ['SageMaker', 'Azure ML', 'Vertex AI', 'MLflow', 'Kubernetes', 'FastAPI'],
    wide: true,
  },
]

const roles = [
  {
    period: 'Jan 2026 — Present',
    role: 'AI/ML Engineer',
    company: 'Edward Jones',
    place: 'St. Louis, MO',
    points: [
      'Delivering production GenAI for an enterprise knowledge platform with Pinecone semantic retrieval and metadata-aware filtering.',
      'Integrated Anthropic Claude via Amazon Bedrock; tuned prompts for groundedness, consistency and safe handling of unsupported queries.',
      'Built LangGraph/LangChain agentic workflows with stateful routing, tool selection, fallbacks, human escalation and MCP-based enterprise API access.',
    ],
    stack: 'Python · FastAPI · Pinecone · Bedrock · Claude · LangGraph · MCP · AWS · Docker',
  },
  {
    period: 'Mar 2019 — Dec 2023',
    role: 'Machine Learning Engineer',
    company: 'Cognizant',
    place: 'Hyderabad, India',
    points: [
      'Translated business problems into ML formulations — target definition, dataset design, feature strategy and validation.',
      'Shipped classification, forecasting, anomaly detection and NLP models to AWS SageMaker and Azure ML via batch and REST inference.',
      'Ran MLflow-based MLOps: versioning, automated retraining, drift monitoring and explainability dashboards in Tableau & Power BI.',
    ],
    stack: 'PySpark · Databricks · Snowflake · XGBoost · PyTorch · Hugging Face · SageMaker · MLflow',
  },
  {
    period: 'Oct 2018 — Feb 2019',
    role: 'Data Analyst',
    company: 'Amazon',
    place: 'Hyderabad, India',
    points: [
      'Root-cause, variance and segmentation analysis on high-volume operational data; standardized KPI logic across sources.',
      'Automated extraction, reconciliation and recurring reporting, plus data-quality controls for duplicates and anomalies.',
    ],
    stack: 'Python · Pandas · SQL · Dashboards',
  },
  {
    period: 'Jan 2018 — Sep 2018',
    role: 'Python Developer',
    company: 'Oracle',
    place: 'Hyderabad, India',
    points: [
      'Built modular, configuration-driven Python apps integrated with Oracle Database, PL/SQL routines and batch ETL workflows.',
      'Optimized queries and batch patterns; hardened reliability with logging, exception handling and test coverage.',
    ],
    stack: 'Python · SQL · PL/SQL · Oracle DB',
  },
]

const work = [
  {
    img: 'https://learn.microsoft.com/en-us/copilot/media/copilot/copilot-learning-hub/copilot-in-microsoft-365.png',
    kicker: 'GenAI · RAG',
    title: 'Enterprise Knowledge Copilot',
    body: 'Grounded Q&A over thousands of internal documents with source attribution, confidence checks and Bedrock guardrails.',
    metric: 'Chunk, overlap & top-K tuned for relevance',
  },
  {
    img: 'https://cohorte.co/blog/img/67372ce594995c3cfec35531_AI_20_retried.webp',
    kicker: 'Agentic AI',
    title: 'LangGraph Orchestration Layer',
    body: 'Stateful agent routing with tool calling, validation steps, fallback paths and human-in-the-loop escalation.',
    metric: 'MCP-controlled enterprise API access',
  },
  {
    img: 'https://miro.medium.com/v2/da:true/resize:fit:1200/0*R4ZfT6zvjCIY4-EK',
    kicker: 'MLOps',
    title: 'Drift-Aware Model Platform',
    body: 'MLflow registry, automated retraining and feature-distribution monitoring for models serving business-critical decisions.',
    metric: 'Evidence-based recalibration',
  },
]

function LandingPage() {
  const [messageSent, setMessageSent] = useState(false)

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const response = await fetch('https://formspree.io/f/xoeeklar', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })

    if (response.ok) {
      form.reset()
      setMessageSent(true)
    }
  }

  return (
    <div className="min-h-screen bg-ink font-body text-bone antialiased selection:bg-ember selection:text-ink">
      {/* NAV */}
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-ink-2/70 py-2 pl-3 pr-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <a href="#" className="shipper-theme-logo-lockup flex items-center gap-2">
            <span className="shipper-theme-logo grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-ember to-ember-soft font-display text-lg italic text-ink">
              Md
            </span>
            <span className="shipper-theme-wordmark shipper-theme-wordmark-gradient hidden bg-gradient-to-r from-bone to-ember-soft bg-clip-text text-lg font-bold tracking-tight text-transparent md:inline">
              Mounika
            </span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="rounded-full px-4 py-2 text-sm text-bone/70 transition-all duration-300 hover:bg-white/5 hover:text-bone">
                {n.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="rounded-full bg-ember px-4 py-2 text-sm font-semibold text-ink transition-all duration-300 hover:scale-105 hover:bg-ember-soft">
            Let’s talk
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40">
        <img src="https://cdn.shipper.now/gallery/creative/background.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/80 to-ink" />
        <div className="absolute -right-40 top-20 h-[30rem] w-[30rem] rounded-full bg-ember/20 blur-[120px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sage/30 bg-sage/10 px-3 py-1.5 font-code text-xs text-sage">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sage" /> Open to senior AI/ML roles · Chicago, IL
            </div>
            <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              Mounika <br />
              <span className="italic text-ember">Darimireddy</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone/70">
              AI/ML Engineer turning complex enterprise problems into <span className="text-bone">production-grade GenAI, RAG and machine learning systems</span> — from raw data to monitored, governed endpoints.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className="rounded-full bg-bone px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:scale-105 hover:bg-ember">
                View selected work →
              </a>
              <a href="/Mounika_Resume.pdf" download="Mounika_Resume.pdf" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-ember hover:text-ember">
                Download résumé
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-code text-xs text-bone/50">
              <a href="https://github.com/sairagamounika" target="_blank" rel="noreferrer" className="transition hover:text-ember">GitHub ↗</a>
              <a href="http://www.linkedin.com/in/dmounika11" target="_blank" rel="noreferrer" className="transition hover:text-ember">LinkedIn ↗</a>
              <a href="mailto:dmounika1103@gmail.com" className="transition hover:text-ember">dmounika1103@gmail.com</a>
            </div>
          </div>
          <div className="relative md:col-span-5">
            <div className="absolute -inset-3 rotate-3 rounded-[2rem] border border-ember/30" />
            <div className="relative overflow-hidden rounded-[2rem] bg-ink-3 shadow-2xl shadow-black/60">
              <img src={PHOTO} alt="Portrait of Mounika Darimireddy" className="aspect-[3/4] w-full object-cover object-top grayscale-[15%] transition-all duration-700 hover:grayscale-0 hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/60 to-transparent p-6">
                <p className="font-code text-[11px] uppercase tracking-widest text-ember-soft">Currently</p>
                <p className="mt-1 font-display text-2xl">AI/ML Engineer at Edward Jones</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 px-0 md:grid-cols-4 mx-5 md:mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-2 p-6 md:p-8">
              <p className="font-display text-4xl text-ember md:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-bone/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <p className="font-code text-xs uppercase tracking-[0.3em] text-ember md:col-span-3">/ About</p>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              I build AI that holds up <span className="italic text-bone/50">after</span> the demo — grounded, observable and trusted by the business.
            </h2>
            <div className="mt-10 grid gap-8 text-bone/70 md:grid-cols-2">
              <p className="leading-relaxed">
                My path runs from Python development at Oracle and analytics at Amazon to nearly five years of end-to-end machine learning at Cognizant. Today I design retrieval, orchestration and LLM inference services for an enterprise knowledge platform at Edward Jones.
              </p>
              <p className="leading-relaxed">
                I own the full lifecycle — framing the problem, engineering features, rigorous validation, deployment on AWS and Azure, and the monitoring that keeps models honest. I work closely with product, data, cloud and business teams to ship things people actually use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="scroll-mt-28 border-y border-white/5 bg-ink-2 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-code text-xs uppercase tracking-[0.3em] text-ember">/ Expertise</p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl">The full ML stack, <span className="italic">end to end.</span></h2>
            </div>
            <p className="max-w-sm text-bone/60">Python and SQL at the core — layered with modern GenAI, classical ML, big data and MLOps tooling.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {expertise.map((e) => (
              <div key={e.no} className={`group rounded-3xl border border-white/10 bg-ink p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ember/50 hover:shadow-2xl hover:shadow-ember/10 ${e.wide ? 'md:col-span-2' : ''}`}>
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-3xl">{e.title}</h3>
                  <span className="font-code text-xs text-bone/30 transition group-hover:text-ember">{e.no}</span>
                </div>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-bone/60">{e.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-code text-[11px] text-bone/70">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24">
        <p className="font-code text-xs uppercase tracking-[0.3em] text-ember">/ Experience</p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl">Seven years, <span className="italic">four companies.</span></h2>
        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {roles.map((r, i) => (
            <article key={r.company} className="group grid gap-6 py-10 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="font-code text-xs text-bone/50">{r.period}</p>
                <h3 className="mt-3 font-display text-3xl transition group-hover:text-ember">{r.company}</h3>
                <p className="mt-1 text-sm text-bone/60">{r.role} · {r.place}</p>
                {i === 0 && <span className="mt-4 inline-block rounded-full bg-ember/15 px-3 py-1 font-code text-[11px] text-ember">Current</span>}
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-3">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed text-bone/75">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-code text-xs text-sage">{r.stack}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="scroll-mt-28 bg-ink-2 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-code text-xs uppercase tracking-[0.3em] text-ember">/ Selected work</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-6xl">Systems shipped into <span className="italic">real enterprise workflows.</span></h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {work.map((w, i) => (
              <a key={w.title} href="#" className={`group overflow-hidden rounded-3xl border border-white/10 bg-ink transition-all duration-300 hover:-translate-y-1 hover:border-ember/40 ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <div className="overflow-hidden">
                  <img src={w.img} alt={w.title} className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i === 0 ? 'aspect-[4/3]' : 'aspect-square md:aspect-[4/3]'}`} />
                </div>
                <div className="p-6 md:p-7">
                  <p className="font-code text-[11px] uppercase tracking-widest text-ember-soft">{w.kicker}</p>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-bone/60">{w.body}</p>
                  <p className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 font-code text-xs text-sage">
                    {w.metric} <span className="transition group-hover:translate-x-1 group-hover:text-ember">→</span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION BANNER */}
      <section className="relative overflow-hidden py-24">
        <img src="https://cdn.shipper.now/gallery/creative/banner.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/60" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <div>
            <p className="font-code text-xs uppercase tracking-[0.3em] text-ember">/ Education</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Grounded in fundamentals.</h2>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-ink-2/80 p-6 backdrop-blur transition-all duration-300 hover:border-ember/40">
              <p className="font-code text-xs text-bone/50">Jan 2024 — Nov 2025 · Chicago, IL</p>
              <h3 className="mt-2 font-display text-2xl">M.S. Data Science</h3>
              <p className="text-sm text-bone/60">DePaul University</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-ink-2/80 p-6 backdrop-blur transition-all duration-300 hover:border-ember/40">
              <p className="font-code text-xs text-bone/50">Jun 2014 — Apr 2018 · India</p>
              <h3 className="mt-2 font-display text-2xl">B.Tech Computer Science</h3>
              <p className="text-sm text-bone/60">JNTUK</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24">
        <div className="grid gap-12 overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2 p-8 md:grid-cols-2 md:p-14">
          <div>
            <p className="font-code text-xs uppercase tracking-[0.3em] text-ember">/ Contact</p>
            <h2 className="mt-4 font-display text-5xl leading-none md:text-6xl">Have a hard <span className="italic text-ember">AI problem?</span></h2>
            <p className="mt-6 max-w-sm text-bone/60">Whether it’s a role, a RAG system that needs to get grounded, or an ML pipeline that needs to scale — drop a quick note.</p>
            <div className="mt-10 space-y-3 text-sm">
              <a href="mailto:dmounika1103@gmail.com" className="block text-bone/80 transition hover:text-ember">✉ dmounika1103@gmail.com</a>
              <a href="tel:+18722252423" className="block text-bone/80 transition hover:text-ember">☏ +1 (872) 225-2423</a>
              <p className="text-bone/50">⌖ Chicago, IL</p>
            </div>
          </div>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm placeholder:text-bone/40 outline-none transition focus:border-ember" />
              <input name="email" type="email" required placeholder="Email address" className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm placeholder:text-bone/40 outline-none transition focus:border-ember" />
            </div>
            <input name="subject" placeholder="Subject — e.g. Senior ML role" className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm placeholder:text-bone/40 outline-none transition focus:border-ember" />
            <textarea name="message" required rows={6} placeholder="A quick message…" className="w-full resize-none rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm placeholder:text-bone/40 outline-none transition focus:border-ember" />
            <button type="submit" className="w-full rounded-full bg-ember py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:scale-[1.02] hover:bg-ember-soft">
              Send message →
            </button>
            <p role="status" aria-live="polite" className="text-center font-code text-[11px] text-bone/60">
              {messageSent ? 'Thanks for the message. I will reply back soon.' : 'Usually replies within 24 hours.'}
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 md:grid-cols-4">
          <div className="text-left">
            <p className="font-display text-3xl">Mounika <span className="italic text-ember">Darimireddy</span></p>
            <p className="mt-3 max-w-xs text-sm text-bone/50">AI/ML Engineer building grounded GenAI and production ML for the enterprise.</p>
          </div>
          <div>
            <p className="font-code text-xs uppercase tracking-widest text-bone/40">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="text-bone/70 transition hover:text-ember">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-code text-xs uppercase tracking-widest text-bone/40">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="https://github.com/sairagamounika" target="_blank" rel="noreferrer" className="text-bone/70 transition hover:text-ember">GitHub ↗</a></li>
              <li><a href="http://www.linkedin.com/in/dmounika11" target="_blank" rel="noreferrer" className="text-bone/70 transition hover:text-ember">LinkedIn ↗</a></li>
              <li><a href="/Mounika_Resume.pdf" download="Mounika_Resume.pdf" className="text-bone/70 transition hover:text-ember">Résumé (PDF) ↗</a></li>
            </ul>
          </div>
          <div>
            <p className="font-code text-xs uppercase tracking-widest text-bone/40">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-bone/70">
              <li><a href="mailto:dmounika1103@gmail.com" className="break-all transition hover:text-ember">dmounika1103@gmail.com</a></li>
              <li>+1 (872) 225-2423</li>
              <li>Chicago, IL</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 py-6 text-center font-code text-[11px] text-bone/30">
          © 2026 Mounika Darimireddy ·
        </div>
      </footer>
    </div>
  )
}

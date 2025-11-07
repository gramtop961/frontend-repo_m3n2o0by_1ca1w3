import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Pastel UI Kit',
    description: 'Component library with soft gradients and motion.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Interactive Grid',
    description: '3D-inspired tile interactions for hero sections.',
    tags: ['Three.js', 'UX', 'Accessibility'],
    link: '#',
  },
  {
    title: 'Calm Commerce',
    description: 'Minimal e-commerce front-end with glowing CTAs.',
    tags: ['Vite', 'Stripe UI', 'ARIA'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="font-manrope text-3xl font-bold text-slate-900 sm:text-4xl">Selected Projects</h2>
        <p className="mt-3 text-slate-600">A snapshot of recent work and experiments.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.a
            key={p.title}
            href={p.link}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur transition"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-100/60 to-sky-100/60 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-3 h-36 w-full rounded-xl bg-gradient-to-br from-slate-100 to-slate-200" />
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/80 px-3 py-1 text-xs text-slate-700 ring-1 ring-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

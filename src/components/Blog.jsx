import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Designing with Pastels',
    excerpt: 'Tips for building calm, minimalist interfaces with soft hues.',
    date: 'Sep 2024',
  },
  {
    title: 'Micro‑interactions that Matter',
    excerpt: 'Small animations that guide attention without distraction.',
    date: 'Aug 2024',
  },
  {
    title: 'Accessibility First',
    excerpt: 'Patterns that keep experiences inclusive from day one.',
    date: 'Jul 2024',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="font-manrope text-3xl font-bold text-slate-900 sm:text-4xl">Blog</h2>
        <p className="mt-3 text-slate-600">Notes on UI, motion, and accessibility.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-100/60 to-rose-100/60 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <time className="text-xs uppercase tracking-wide text-slate-500">{post.date}</time>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{post.excerpt}</p>
              <a href="#" className="mt-3 inline-block text-sm font-medium text-sky-700 underline-offset-2 hover:underline">
                Read more
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

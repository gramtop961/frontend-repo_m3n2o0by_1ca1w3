import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // For demo purposes, just show confirmation. In production, hook to backend.
    setSent(true);
  }

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="font-manrope text-3xl font-bold text-slate-900 sm:text-4xl">Contact</h2>
        <p className="mt-3 text-slate-600">Let’s collaborate. I’m open to freelance and full‑time roles.</p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
            <input
              type="text"
              required
              className="w-full rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-slate-900 outline-none ring-rose-200 transition focus:ring"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-slate-900 outline-none ring-sky-200 transition focus:ring"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
          <textarea
            rows={5}
            required
            className="w-full rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-slate-900 outline-none ring-rose-200 transition focus:ring"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="group relative inline-flex items-center justify-center rounded-full bg-emerald-200/80 px-6 py-3 text-slate-900 transition hover:scale-[1.02] focus:outline-none"
          >
            <span className="absolute inset-0 rounded-full bg-emerald-300/70 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative font-medium">Send Message</span>
          </button>
        </div>
        {sent && (
          <p className="mt-4 text-sm text-emerald-700">Thanks! Your message has been queued.</p>
        )}
      </motion.form>
    </section>
  );
}

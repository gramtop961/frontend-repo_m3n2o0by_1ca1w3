import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[88vh] w-full overflow-hidden">
      {/* Interactive Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil that keeps scene interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-3 text-xs tracking-[0.35em] text-slate-600"
        >
          FRONT-END • DESIGN • ACCESSIBILITY
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-manrope text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
        >
          Minimal, interactive interfaces that feel effortless
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg"
        >
          I build fast, accessible web experiences with pastel palettes and smooth micro‑interactions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center rounded-full bg-rose-200/80 px-6 py-3 text-slate-900 transition hover:scale-[1.02] focus:outline-none"
          >
            <span className="absolute inset-0 rounded-full bg-rose-300/70 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative font-medium">View Projects</span>
          </a>
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center rounded-full bg-sky-200/80 px-6 py-3 text-slate-900 transition hover:scale-[1.02] focus:outline-none"
          >
            <span className="absolute inset-0 rounded-full bg-sky-300/70 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative font-medium">Contact Me</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

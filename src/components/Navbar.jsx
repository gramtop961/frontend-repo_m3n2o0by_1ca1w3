import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-manrope text-lg font-bold text-slate-900">alex.dev</a>
        <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
          <a href="#projects" className="hover:text-slate-900">Projects</a>
          <a href="#blog" className="hover:text-slate-900">Blog</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <a
          href="#contact"
          className="group relative hidden items-center justify-center rounded-full bg-rose-200/80 px-4 py-2 text-slate-900 transition hover:scale-[1.02] sm:inline-flex"
        >
          <span className="absolute inset-0 rounded-full bg-rose-300/70 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
          <span className="relative text-sm font-medium">Hire Me</span>
        </a>
      </div>
    </header>
  );
}

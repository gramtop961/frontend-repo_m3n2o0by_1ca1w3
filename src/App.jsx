import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <Projects />
      <Blog />
      <Contact />
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} alex.dev — Built with care and clean code.
        </div>
      </footer>
    </div>
  );
}

export default App;

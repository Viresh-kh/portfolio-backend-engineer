import { motion } from 'motion/react'
import { ChevronDown, Github, Mail, FileText } from 'lucide-react'

const codeLines = [
  { text: 'class', highlight: 'BackendEngineer', rest: ' {' },
  { text: '  name', highlight: ' = "Viresh"', rest: ';' },
  { text: '  role', highlight: ' = "Backend Specialist"', rest: ';' },
  { text: '  stack', highlight: ' = ["Java", "Spring Boot", "MySQL"]', rest: ';' },
  { text: '}', highlight: '', rest: '' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--color-surface)_70%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              Viresh
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-400 font-medium mb-6">
            Backend Engineer &amp; Java Specialist
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
            I build robust, scalable backend systems with Java, Spring Boot, and modern database technologies.
            Passionate about clean architecture and high-performance APIs.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group px-6 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg border border-surface-lighter hover:border-primary/50 text-slate-300 hover:text-white font-medium transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              View Projects
            </a>
            <a
              href="https://github.com/Viresh-kh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-lg border border-surface-lighter hover:border-primary/50 text-slate-300 hover:text-white transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:block"
        >
          <div className="rounded-xl bg-surface-light/80 border border-surface-lighter/50 overflow-hidden shadow-2xl shadow-black/30">
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-light border-b border-surface-lighter/50">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-slate-500 font-mono">viresh.java</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="flex"
                >
                  <span className="text-slate-600 w-8 text-right mr-4 select-none">{i + 1}</span>
                  <span>
                    <span className="text-purple-400">{line.text}</span>
                    <span className="text-accent-light">{line.highlight}</span>
                    <span className="text-slate-400">{line.rest}</span>
                  </span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="flex mt-1"
              >
                <span className="text-slate-600 w-8 text-right mr-4 select-none">6</span>
                <span className="w-2 h-5 bg-primary animate-pulse" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  )
}

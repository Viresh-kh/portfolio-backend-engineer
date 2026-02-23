import { Github, Mail, Heart, Terminal } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-surface-lighter/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-white">
              Viresh<span className="text-primary-light">.dev</span>
            </span>
          </div>

          <p className="text-sm text-slate-500 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500" /> using React & Tailwind CSS
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Viresh-kh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-primary-light transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:vireshkh1122@gmail.com"
              className="text-slate-500 hover:text-primary-light transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-surface-lighter/20 text-center">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Viresh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

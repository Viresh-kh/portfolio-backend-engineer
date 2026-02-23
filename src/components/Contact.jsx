import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Mail, Github, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in <span className="text-primary-light">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-lg mx-auto">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out if you'd like to work together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.a
            href="mailto:vireshkh1122@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="group p-6 rounded-xl bg-surface-light/60 border border-surface-lighter/30 hover:border-primary/30 transition-all text-center hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary-light" />
            </div>
            <h3 className="text-white font-semibold mb-1">Email</h3>
            <p className="text-sm text-slate-400">vireshkh1122@gmail.com</p>
          </motion.a>

          <motion.a
            href="https://github.com/Viresh-kh"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="group p-6 rounded-xl bg-surface-light/60 border border-surface-lighter/30 hover:border-primary/30 transition-all text-center hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Github className="w-6 h-6 text-primary-light" />
            </div>
            <h3 className="text-white font-semibold mb-1">GitHub</h3>
            <p className="text-sm text-slate-400">Viresh-kh</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-xl bg-surface-light/60 border border-surface-lighter/30 text-center"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary-light" />
            </div>
            <h3 className="text-white font-semibold mb-1">Location</h3>
            <p className="text-sm text-slate-400">India</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <a
            href="mailto:vireshkh1122@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-medium text-lg transition-all hover:shadow-xl hover:shadow-primary/25 hover:scale-105 duration-300"
          >
            <Send className="w-5 h-5" />
            Send me an Email
          </a>
        </motion.div>
      </div>
    </section>
  )
}

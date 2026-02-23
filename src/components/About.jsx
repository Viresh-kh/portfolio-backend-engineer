import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { Server, Database, Code2, Zap } from 'lucide-react'

const highlights = [
  { icon: Server, label: 'Backend Systems', description: 'Spring Boot & Spring MVC' },
  { icon: Database, label: 'Database Design', description: 'OracleDB, MySQL, Redis' },
  { icon: Code2, label: 'Clean Code', description: 'SOLID Principles & Patterns' },
  { icon: Zap, label: 'REST APIs', description: 'High-performance endpoints' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-primary-light">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm a dedicated <span className="text-primary-light font-medium">Backend Engineer</span> with
              a strong foundation in Java ecosystem technologies. I specialize in designing and building
              scalable server-side applications that power real-world business solutions.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              My expertise spans across enterprise-level application development using Spring Boot,
              Spring MVC, and Hibernate. I have hands-on experience with relational databases like
              OracleDB and MySQL, and caching solutions like Redis for optimizing application performance.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I'm passionate about writing clean, maintainable code following best practices and
              design patterns. I enjoy solving complex problems and turning business requirements
              into efficient, well-architected systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="p-5 rounded-xl bg-surface-light/60 border border-surface-lighter/30 hover:border-primary/30 transition-all group hover:shadow-lg hover:shadow-primary/5"
              >
                <item.icon className="w-8 h-8 text-primary-light mb-3 group-hover:text-accent transition-colors" />
                <h3 className="text-white font-semibold text-sm mb-1">{item.label}</h3>
                <p className="text-slate-500 text-xs">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

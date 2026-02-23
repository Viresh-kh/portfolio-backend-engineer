import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'

const timeline = [
  {
    type: 'work',
    title: 'Backend Developer',
    org: 'Freelance / Personal Projects',
    period: '2023 - Present',
    description:
      'Building full-stack applications with Java, Spring Boot, and modern databases. Developing RESTful APIs and enterprise-grade backend systems.',
    skills: ['Spring Boot', 'REST APIs', 'MySQL', 'Redis'],
  },
  {
    type: 'education',
    title: 'Bachelor of Engineering / Technology',
    org: 'Computer Science & Engineering',
    period: '2020 - 2024',
    description:
      'Studied core computer science fundamentals including data structures, algorithms, DBMS, operating systems, and software engineering principles.',
    skills: ['Java', 'DBMS', 'Data Structures', 'OOP'],
  },
  {
    type: 'work',
    title: 'Internship / Training',
    org: 'Java Full Stack Development',
    period: '2023',
    description:
      'Completed intensive training in Java full-stack development covering Spring ecosystem, Hibernate ORM, and frontend technologies.',
    skills: ['Spring MVC', 'Hibernate', 'JSP', 'JDBC'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 bg-surface-light/30" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience & <span className="text-primary-light">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-surface-lighter/50 md:left-1/2 md:-translate-x-px" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`relative mb-12 last:mb-0 md:flex ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-surface z-10 mt-6" />

              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="p-6 rounded-xl bg-surface-light/60 border border-surface-lighter/30 hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    {item.type === 'work' ? (
                      <Briefcase className="w-4 h-4 text-primary-light" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-accent" />
                    )}
                    <span className="text-xs font-mono text-slate-500">{item.period}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-primary-light mb-3">{item.org}</p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-surface/60 text-slate-500 border border-surface-lighter/30"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

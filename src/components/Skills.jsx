import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Languages',
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'JavaScript', level: 70 },
      { name: 'HTML/CSS', level: 75 },
    ],
  },
  {
    title: 'Frameworks',
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'Spring Boot', level: 88 },
      { name: 'Spring MVC', level: 85 },
      { name: 'Hibernate/JPA', level: 82 },
      { name: 'React', level: 65 },
    ],
  },
  {
    title: 'Databases',
    color: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'OracleDB', level: 80 },
      { name: 'Redis', level: 70 },
      { name: 'PostgreSQL', level: 65 },
    ],
  },
  {
    title: 'Tools & DevOps',
    color: 'from-orange-500 to-red-600',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Maven', level: 80 },
      { name: 'Postman', level: 85 },
      { name: 'Docker', level: 60 },
    ],
  },
]

function SkillBar({ name, level, delay, isInView, color }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs text-slate-500 font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-surface/60 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 bg-surface-light/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-primary-light">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-lg mx-auto">
            A comprehensive toolkit built around the Java ecosystem and modern backend technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              className="p-6 rounded-xl bg-surface-light/60 border border-surface-lighter/30 hover:border-primary/20 transition-all"
            >
              <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={0.3 + catIndex * 0.15 + skillIndex * 0.1}
                  isInView={isInView}
                  color={category.color}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

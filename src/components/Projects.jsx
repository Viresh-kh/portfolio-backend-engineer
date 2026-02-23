import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { ExternalLink, Github, Layers, ShoppingCart, Building2 } from 'lucide-react'

const projects = [
  {
    icon: Layers,
    title: 'Agrinet Application',
    description:
      'Enterprise-level agricultural management system enabling farmers and distributors to manage crops, inventory, and supply chain operations efficiently.',
    tech: ['Java', 'Spring MVC', 'OracleDB', 'JSP', 'Hibernate'],
    highlights: [
      'Multi-role authentication system',
      'Real-time inventory tracking',
      'Reporting & analytics dashboard',
    ],
    color: 'from-emerald-500 to-green-600',
  },
  {
    icon: ShoppingCart,
    title: 'Livezy Ecommerce',
    description:
      'Modern full-stack shopping platform with secure checkout, product catalog management, user authentication, and order tracking capabilities.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'Redis'],
    highlights: [
      'Secure payment integration',
      'Cart & wishlist management',
      'Admin product dashboard',
    ],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Building2,
    title: 'Hotel Management System',
    description:
      'Comprehensive operational efficiency tool for hospitality management covering room bookings, guest management, billing, and staff coordination.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'Thymeleaf'],
    highlights: [
      'Room availability engine',
      'Guest check-in/out system',
      'Revenue reporting module',
    ],
    color: 'from-orange-500 to-amber-600',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-primary-light">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-lg mx-auto">
            Real-world applications showcasing backend architecture, database design, and API development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group relative rounded-xl bg-surface-light/60 border border-surface-lighter/30 hover:border-primary/30 transition-all overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 duration-300"
            >
              <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((h) => (
                      <li key={h} className="text-sm text-slate-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary-light" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-surface/60 text-slate-400 border border-surface-lighter/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/Viresh-kh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-primary-light transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

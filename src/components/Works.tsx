import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { projects } from '../constants'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Tag {
  name: string
  color: string
}

interface Project {
  name: string
  description: string
  tags: Tag[]
  image: string
  source_code_link?: string
  website_link?: string
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  })

  // Changed to subtle rotation that won't invert text
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 8])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateY, scale, y, opacity }}
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="bg-tertiary p-5 rounded-2xl relative group overflow-hidden shadow-xl h-full flex flex-col"
        whileHover={{ 
          scale: 1.03, 
          y: -10, 
          boxShadow: '0 25px 50px -12px rgba(0, 255, 204, 0.25)'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated gradient border */}
        <motion.div 
          className="absolute inset-0 rounded-2xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ padding: '2px' }}
          animate={{
            background: [
              'linear-gradient(45deg, #00ffcc 0%, #00d9a7 100%)',
              'linear-gradient(135deg, #00d9a7 0%, #00ffcc 100%)',
              'linear-gradient(225deg, #00ffcc 0%, #00d9a7 100%)',
              'linear-gradient(315deg, #00d9a7 0%, #00ffcc 100%)',
              'linear-gradient(45deg, #00ffcc 0%, #00d9a7 100%)'
            ]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        >
          <div className="bg-tertiary h-full w-full rounded-2xl"></div>
        </motion.div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Project image */}
          <motion.div
            className="relative w-full h-[230px] rounded-xl overflow-hidden mb-5"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            
            {/* Project links overlay */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
              {project.source_code_link && (
                <motion.a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-tertiary text-white text-xl hover:text-[#00ffcc]"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(0, 255, 204, 0.2)',
                      '0 0 20px rgba(0, 255, 204, 0.4)',
                      '0 0 10px rgba(0, 255, 204, 0.2)'
                    ],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                >
                  <FaGithub />
                </motion.a>
              )}
              
              {project.website_link && (
                <motion.a
                  href={project.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-tertiary text-white text-xl hover:text-[#00ffcc]"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(0, 255, 204, 0.2)',
                      '0 0 20px rgba(0, 255, 204, 0.4)',
                      '0 0 10px rgba(0, 255, 204, 0.2)'
                    ],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                >
                  <FaExternalLinkAlt />
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Project content */}
          <div className="flex flex-col flex-1">
            <motion.h3
              className="text-white text-[24px] font-bold mb-2"
              animate={{
                textShadow: [
                  '0 0 8px rgba(0, 255, 204, 0.3)',
                  '0 0 16px rgba(0, 255, 204, 0.6)',
                  '0 0 8px rgba(0, 255, 204, 0.3)'
                ],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              {project.name}
            </motion.h3>
            
            <motion.p
              className="text-secondary text-[14px] mb-4 flex-grow"
              animate={{
                textShadow: [
                  '0 0 8px rgba(0, 255, 204, 0.1)',
                  '0 0 16px rgba(0, 255, 204, 0.2)',
                  '0 0 8px rgba(0, 255, 204, 0.1)'
                ],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              {project.description}
            </motion.p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <motion.span
                  key={tag.name}
                  className={`text-[13px] font-medium px-3 py-1 rounded-full ${tag.color} flex items-center justify-center`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(0, 255, 204, 0.1)',
                      '0 0 20px rgba(0, 255, 204, 0.2)',
                      '0 0 10px rgba(0, 255, 204, 0.1)'
                    ],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                >
                  #{tag.name}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Works = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y }}
      className={`${styles.padding} min-h-screen`}
      id="works"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className={styles.sectionSubText}
          animate={{
            textShadow: [
              '0 0 8px rgba(0, 255, 204, 0.5)',
              '0 0 16px rgba(0, 255, 204, 0.8)',
              '0 0 8px rgba(0, 255, 204, 0.5)'
            ],
            transition: { duration: 2, repeat: Infinity }
          }}
        >
          My work
        </motion.p>
        
        <motion.h2
          className={styles.sectionHeadText}
          animate={{
            textShadow: [
              '0 0 8px rgba(0, 255, 204, 0.5)',
              '0 0 16px rgba(0, 255, 204, 0.8)',
              '0 0 8px rgba(0, 255, 204, 0.5)'
            ],
            transition: { duration: 2, repeat: Infinity }
          }}
        >
          Projects
        </motion.h2>
      </motion.div>

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.p
          className="text-secondary text-[17px] max-w-3xl text-center leading-[30px] mb-16"
          animate={{
            textShadow: [
              '0 0 8px rgba(0, 255, 204, 0.3)',
              '0 0 16px rgba(0, 255, 204, 0.6)',
              '0 0 8px rgba(0, 255, 204, 0.3)'
            ],
            transition: { duration: 2, repeat: Infinity }
          }}
        >
          The following projects showcase my skills and experience through real-world examples.
          Each project represents a unique challenge and demonstrates my ability to deliver
          effective solutions using modern technologies.
        </motion.p>

        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default SectionWrapper(Works)

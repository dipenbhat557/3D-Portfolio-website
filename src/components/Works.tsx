import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { projects } from '../constants'
import { useRef } from 'react'

interface Project {
  name: string
  description: string
  tags: Array<{
    name: string
    color: string
  }>
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

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 180, 360])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50])

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, scale, y }}
      className="w-full sm:w-[400px] perspective-1000"
    >
      <motion.div
        className="bg-black-200 p-6 rounded-3xl relative group overflow-hidden"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#00ffcc] to-[#00d9a7] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
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
        />
        <div className="flex flex-col">
          <motion.div
            className="relative w-full h-[230px] rounded-xl overflow-hidden mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 flex justify-end m-3 card-img_hover"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                onClick={() => window.open(project.source_code_link, '_blank')}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 255, 204, 0.2)',
                    '0 0 40px rgba(0, 255, 204, 0.4)',
                    '0 0 20px rgba(0, 255, 204, 0.2)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <img
                  src="https://raw.githubusercontent.com/adrianhajdin/project_3d_developer_portfolio/main/src/assets/github.png"
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="flex flex-col">
            <motion.h3
              className="text-white text-[24px] font-bold mb-2"
              animate={{
                textShadow: [
                  '0 0 8px rgba(0, 255, 204, 0.5)',
                  '0 0 16px rgba(0, 255, 204, 0.8)',
                  '0 0 8px rgba(0, 255, 204, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {project.name}
            </motion.h3>
            <motion.p
              className="text-secondary text-[14px] mb-4"
              animate={{
                textShadow: [
                  '0 0 8px rgba(0, 255, 204, 0.3)',
                  '0 0 16px rgba(0, 255, 204, 0.6)',
                  '0 0 8px rgba(0, 255, 204, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {project.description}
            </motion.p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <motion.p
                  key={tag.name}
                  className={`text-[14px] px-2 py-1 rounded-full ${tag.color}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  animate={{
                    boxShadow: [
                      '0 0 8px rgba(0, 255, 204, 0.2)',
                      '0 0 16px rgba(0, 255, 204, 0.4)',
                      '0 0 8px rgba(0, 255, 204, 0.2)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  #{tag.name}
                </motion.p>
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
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.p
          className={styles.sectionSubText}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          animate={{
            textShadow: [
              '0 0 8px rgba(0, 255, 204, 0.5)',
              '0 0 16px rgba(0, 255, 204, 0.8)',
              '0 0 8px rgba(0, 255, 204, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          My work
        </motion.p>
        <motion.h2
          className={styles.sectionHeadText}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          animate={{
            textShadow: [
              '0 0 8px rgba(0, 255, 204, 0.5)',
              '0 0 16px rgba(0, 255, 204, 0.8)',
              '0 0 8px rgba(0, 255, 204, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          animate={{
            textShadow: [
              '0 0 8px rgba(0, 255, 204, 0.3)',
              '0 0 16px rgba(0, 255, 204, 0.6)',
              '0 0 8px rgba(0, 255, 204, 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Following projects showcase my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos in it.
          It reflects my ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default SectionWrapper(Works)

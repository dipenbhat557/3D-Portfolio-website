import { motion, useScroll, useTransform } from 'framer-motion'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { useRef } from 'react'
import { IconType } from 'react-icons'

interface Technology {
  name: string
  icon: IconType
  color: string
}

const TechCard = ({ technology, index }: { technology: Technology; index: number }) => {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  })

  // Changed to a more subtle y-axis rotation
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 15])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7])

  // Dynamic icon component
  const Icon = technology.icon

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateY, scale, opacity }}
      className="w-24 h-24 sm:w-32 sm:h-32"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <motion.div
        className="bg-tertiary w-full h-full rounded-full relative group overflow-hidden flex items-center justify-center shadow-xl"
        whileHover={{ 
          scale: 1.15, 
          rotate: 360,
          boxShadow: `0 0 30px rgba(${hexToRgb(technology.color)}, 0.4)` 
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300"
          style={{
            background: `linear-gradient(45deg, ${technology.color}22, ${technology.color}44)`
          }}
          animate={{
            background: [
              `linear-gradient(45deg, ${technology.color}22, ${technology.color}44)`,
              `linear-gradient(135deg, ${technology.color}44, ${technology.color}22)`,
              `linear-gradient(225deg, ${technology.color}22, ${technology.color}44)`,
              `linear-gradient(315deg, ${technology.color}44, ${technology.color}22)`,
              `linear-gradient(45deg, ${technology.color}22, ${technology.color}44)`
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
        
        <motion.div 
          className="relative z-10 w-3/5 h-3/5 flex items-center justify-center"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Icon 
            size="100%" 
            color={technology.color}
            style={{
              filter: `drop-shadow(0 0 8px ${technology.color}88)`
            }}
          />
        </motion.div>

        {/* Tech name label - appears on hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-black/80 py-1 px-2 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: technology.color }}
        >
          {technology.name}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Helper function to convert hex color to RGB
const hexToRgb = (hex: string) => {
  // Remove the hash if it exists
  hex = hex.replace('#', '')
  
  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  
  return `${r}, ${g}, ${b}`
}

const Tech = () => {
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
      className={`${styles.padding} `}
      id="tech"
    >
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className={styles.sectionSubText}
          animate={{
            textShadow: [
              '0 0 8px rgba(0, 255, 204, 0.3)',
              '0 0 16px rgba(0, 255, 204, 0.6)',
              '0 0 8px rgba(0, 255, 204, 0.3)'
            ],
            transition: { duration: 2, repeat: Infinity }
          }}
        >
          My Tech Stack
        </motion.p>
        <motion.h2
          className={styles.sectionHeadText}
          animate={{
            textShadow: [
              '0 0 8px rgba(0, 255, 204, 0.3)',
              '0 0 16px rgba(0, 255, 204, 0.6)',
              '0 0 8px rgba(0, 255, 204, 0.3)'
            ],
            transition: { duration: 2, repeat: Infinity }
          }}
        >
          Technologies
        </motion.h2>
      </motion.div>

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.p
          className="text-secondary text-[15px] md:text-[17px] max-w-3xl text-center leading-[24px] md:leading-[30px] mb-8 md:mb-16"
          animate={{
            textShadow: [
              '0 0 8px rgba(0, 255, 204, 0.2)',
              '0 0 16px rgba(0, 255, 204, 0.4)',
              '0 0 8px rgba(0, 255, 204, 0.2)'
            ],
            transition: { duration: 2, repeat: Infinity }
          }}
        >
          I specialize in modern web technologies that enable creating fast, responsive, and beautiful digital experiences.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {technologies.map((technology, index) => (
            <TechCard key={technology.name} technology={technology} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default SectionWrapper(Tech)

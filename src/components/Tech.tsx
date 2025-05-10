import { motion, useScroll, useTransform } from 'framer-motion'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { useRef } from 'react'

interface Technology {
  name: string
  icon: string
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
        className="bg-tertiary w-full h-full rounded-full relative group overflow-hidden flex items-center justify-center shadow-xl p-4"
        whileHover={{ 
          scale: 1.15, 
          rotate: 360,
          boxShadow: '0 0 30px rgba(0, 255, 204, 0.4)' 
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#00ffcc] via-white to-[#00d9a7] opacity-0 group-hover:opacity-15 transition-opacity duration-300"
          animate={{
            background: [
              'linear-gradient(45deg, #00ffcc 0%, #00d9a7 100%)',
              'linear-gradient(135deg, #00d9a7 0%, #00ffcc 100%)',
              'linear-gradient(225deg, #00ffcc 0%, #00d9a7 100%)',
              'linear-gradient(315deg, #00d9a7 0%, #00ffcc 100%)',
              'linear-gradient(45deg, #00ffcc 0%, #00d9a7 100%)'
            ],
            transition: { duration: 5, repeat: Infinity, ease: 'linear' }
          }}
        />
        
        <motion.div 
          className="relative z-10 w-full h-full flex items-center justify-center"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.img
            src={technology.icon}
            alt={technology.name}
            className="w-4/5 h-4/5 object-contain"
            whileHover={{ scale: 1.1 }}
            animate={{
              filter: [
                'drop-shadow(0 0 6px rgba(0, 255, 204, 0.4))',
                'drop-shadow(0 0 12px rgba(0, 255, 204, 0.7))',
                'drop-shadow(0 0 6px rgba(0, 255, 204, 0.4))',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
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
      className={`${styles.padding} min-h-screen`}
      id="tech"
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
          My Tech Stack
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
          I specialize in modern web technologies that enable creating fast, responsive, and beautiful digital experiences.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto"
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

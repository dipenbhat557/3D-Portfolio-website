import { motion, useScroll, useTransform } from 'framer-motion'
import { technologies } from '../constants'
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { useRef } from 'react'

const TechCard = ({ technology }: { technology: { name: string; icon: string }; index: number }) => {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  })

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50])

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, scale, y }}
      className="w-full sm:w-[200px] perspective-1000"
    >
      <motion.div
        className="bg-black-200 p-6 rounded-3xl relative group overflow-hidden"
        whileHover={{ scale: 1.05, y: -5, rotateY: 180 }}
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
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 rounded-full bg-[#00ffcc]/10 flex items-center justify-center mb-4"
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(0, 255, 204, 0.2)',
                '0 0 40px rgba(0, 255, 204, 0.4)',
                '0 0 20px rgba(0, 255, 204, 0.2)'
              ]
            }}
          >
            <motion.img
              src={technology.icon}
              alt={technology.name}
              className="w-8 h-8 object-contain"
              whileHover={{ scale: 1.2, rotate: 180 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          <motion.h3
            className="text-white text-[16px] font-medium"
            animate={{
              textShadow: [
                '0 0 8px rgba(0, 255, 204, 0.5)',
                '0 0 16px rgba(0, 255, 204, 0.8)',
                '0 0 8px rgba(0, 255, 204, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {technology.name}
          </motion.h3>
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
        >
          What I work with
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
        >
          I've worked with a range of technologies in the web development world.
          From Back-end To Design
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
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

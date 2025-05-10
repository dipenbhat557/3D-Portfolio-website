import { motion, useScroll, useTransform } from 'framer-motion'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { useRef } from 'react'

const ExperienceCard = ({ experience }: { experience: any; index: number }) => {
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
            {experience.title}
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
            {experience.company_name}
          </motion.p>
          <ul className="list-disc list-inside">
            {experience.points.map((point: string, index: number) => (
              <motion.li
                key={index}
                className="text-white-100 text-[14px] leading-[24px] mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                animate={{
                  textShadow: [
                    '0 0 8px rgba(0, 255, 204, 0.2)',
                    '0 0 16px rgba(0, 255, 204, 0.4)',
                    '0 0 8px rgba(0, 255, 204, 0.2)'
                  ]
                }}
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Experience = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8])

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y, scale }}
      className={`${styles.padding} min-h-screen`}
      id="experience"
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
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          What I have done so far
        </motion.p>
        <motion.h2
          className={styles.sectionHeadText}
          animate={{
            textShadow: [
              '0 0 8px rgba(0, 255, 204, 0.5)',
              '0 0 16px rgba(0, 255, 204, 0.8)',
              '0 0 8px rgba(0, 255, 204, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Work Experience
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
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          I've worked with a range of technologies in the web development world.
          From Back-end To Design
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} experience={experience} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default SectionWrapper(Experience)

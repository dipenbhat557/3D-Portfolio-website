import { motion, useScroll, useTransform } from 'framer-motion'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { useRef } from 'react'

// Define a proper type for experience
interface Experience {
  title: string
  company_name: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  })

  // Modified rotation to be more subtle
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7])

  // Left or right position based on index - only on desktop
  const isLeft = index % 2 === 0
  
  return (
    <div className={`relative w-full mb-8 md:mb-12 
      ${isLeft ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}>
      {/* Timeline connector - adjusted for mobile and desktop */}
      <div className="absolute left-[20px] md:left-1/2 top-0 h-full w-1 
        transform md:-translate-x-1/2 
        bg-gradient-to-b from-[#00ffcc]/10 via-[#00ffcc] to-[#00ffcc]/10" />
      
      {/* Timeline dot - adjusted for mobile and desktop */}
      <motion.div 
        className="absolute left-[20px] md:left-1/2 top-10 
          transform md:-translate-x-1/2 w-5 h-5 
          rounded-full bg-[#00ffcc] z-10"
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 204, 0.5)',
            '0 0 20px rgba(0, 255, 204, 0.8)',
            '0 0 10px rgba(0, 255, 204, 0.5)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      <motion.div
        ref={cardRef}
        style={{ rotateY, scale, y, opacity }}
        className={`w-full pl-[40px] md:pl-0 md:w-[48%] 
          ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <motion.div
          className="bg-tertiary p-4 md:p-6 rounded-2xl md:rounded-3xl 
            relative group overflow-hidden shadow-xl"
          whileHover={{ 
            scale: 1.02, 
            boxShadow: '0 15px 30px -12px rgba(0, 255, 204, 0.25)' 
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient background animation */}
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
          
          <div className="flex flex-col relative z-10">
            <div className="mb-3 md:mb-4">
              <div className="flex items-start md:items-center flex-col sm:flex-row">
                {/* Icon container */}
                <motion.div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-0 sm:mr-4"
                  style={{ backgroundColor: experience.iconBg }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(0, 255, 204, 0.2)',
                      '0 0 20px rgba(0, 255, 204, 0.4)',
                      '0 0 10px rgba(0, 255, 204, 0.2)'
                    ]
                  }}
                >
                  <img src={experience.icon} alt={experience.company_name} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                </motion.div>
                
                {/* Title and company container */}
                <div className="flex-1">
                  <motion.h3
                    className="text-white text-[18px] md:text-[20px] font-bold"
                    animate={{
                      textShadow: [
                        '0 0 8px rgba(0, 255, 204, 0.3)',
                        '0 0 16px rgba(0, 255, 204, 0.6)',
                        '0 0 8px rgba(0, 255, 204, 0.3)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {experience.title}
                  </motion.h3>
                  <motion.p
                    className="text-[#00ffcc] text-[13px] md:text-[14px] font-medium"
                    animate={{
                      textShadow: [
                        '0 0 8px rgba(0, 255, 204, 0.2)',
                        '0 0 16px rgba(0, 255, 204, 0.4)',
                        '0 0 8px rgba(0, 255, 204, 0.2)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {experience.company_name}
                  </motion.p>
                </div>
              </div>

              {/* Date display integrated into the card */}
              <motion.div 
                className="mt-2 mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <motion.div 
                  className="inline-block bg-black/50 px-3 py-1 rounded-full border border-[#00ffcc]/30"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(0, 255, 204, 0.8)' }}
                  animate={{
                    boxShadow: [
                      '0 0 5px rgba(0, 255, 204, 0.2)',
                      '0 0 10px rgba(0, 255, 204, 0.4)',
                      '0 0 5px rgba(0, 255, 204, 0.2)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.span 
                    className="text-[#00ffcc] font-bold text-xs md:text-sm"
                    animate={{
                      textShadow: [
                        '0 0 4px rgba(0, 255, 204, 0.5)',
                        '0 0 8px rgba(0, 255, 204, 0.8)',
                        '0 0 4px rgba(0, 255, 204, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {experience.date}
                  </motion.span>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Experience points */}
            <ul className="list-disc list-inside mt-2 md:mt-4 space-y-1 md:space-y-2 pl-2">
              {experience.points.map((point, pointIndex) => (
                <motion.li
                  key={pointIndex}
                  className="text-white-100 text-[13px] md:text-[14px] leading-[20px] md:leading-[24px]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: pointIndex * 0.1 }}
                >
                  <motion.span
                    animate={{
                      textShadow: [
                        '0 0 8px rgba(0, 255, 204, 0.2)',
                        '0 0 16px rgba(0, 255, 204, 0.4)',
                        '0 0 8px rgba(0, 255, 204, 0.2)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {point}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
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
      className={`${styles.padding}`}
      id="experience"
    >
      <motion.div
        className="text-center mb-8 md:mb-16"
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
              '0 0 8px rgba(0, 255, 204, 0.3)',
              '0 0 16px rgba(0, 255, 204, 0.6)',
              '0 0 8px rgba(0, 255, 204, 0.3)'
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
          className="text-secondary text-[15px] md:text-[17px] max-w-3xl text-center leading-[24px] md:leading-[30px] mb-8 md:mb-16"
          animate={{
            textShadow: [
              '0 0 8px rgba(0, 255, 204, 0.2)',
              '0 0 16px rgba(0, 255, 204, 0.4)',
              '0 0 8px rgba(0, 255, 204, 0.2)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          I've worked with a range of technologies in the web development world.
          From Back-end To Design
        </motion.p>

        <div className="w-full max-w-[1200px] mx-auto relative px-2 sm:px-4">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} experience={experience} index={index} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default SectionWrapper(Experience)

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
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7])

  // Left or right position based on index
  const isLeft = index % 2 === 0
  
  return (
    <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} relative w-full`}>
      {/* Timeline connector */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00ffcc]/10 via-[#00ffcc] to-[#00ffcc]/10" />
      
      {/* Timeline dot */}
      <motion.div 
        className="absolute left-1/2 top-10 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#00ffcc] z-10"
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 204, 0.5)',
            '0 0 20px rgba(0, 255, 204, 0.8)',
            '0 0 10px rgba(0, 255, 204, 0.5)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Date label */}
      <motion.div 
        className={`absolute ${isLeft ? 'right-[55%]' : 'left-[55%]'} top-10 transform ${isLeft ? 'translate-x-4' : '-translate-x-4'}`}
        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span 
          className="text-[#00ffcc] font-semibold text-sm bg-tertiary py-1 px-3 rounded-full"
          animate={{
            boxShadow: [
              '0 0 10px rgba(0, 255, 204, 0.2)',
              '0 0 20px rgba(0, 255, 204, 0.4)',
              '0 0 10px rgba(0, 255, 204, 0.2)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {experience.date}
        </motion.span>
      </motion.div>
      
      <motion.div
        ref={cardRef}
        style={{ rotateY, scale, y, opacity }}
        className={`w-[48%] ${isLeft ? 'mr-auto' : 'ml-auto'}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <motion.div
          className="bg-tertiary p-6 rounded-3xl relative group overflow-hidden shadow-xl mb-12"
          whileHover={{ scale: 1.05, y: -10, boxShadow: '0 25px 50px -12px rgba(0, 255, 204, 0.25)' }}
          transition={{ duration: 0.3 }}
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
              ],
              transition: { duration: 5, repeat: Infinity, ease: 'linear' }
            }}
          />
          
          <div className="flex flex-col relative z-10">
            <div className="flex items-center mb-4">
              <motion.div
                className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
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
                <img src={experience.icon} alt={experience.company_name} className="w-8 h-8 object-contain" />
              </motion.div>
              
              <div>
                <motion.h3
                  className="text-white text-[20px] font-bold"
                  animate={{
                    textShadow: [
                      '0 0 8px rgba(0, 255, 204, 0.5)',
                      '0 0 16px rgba(0, 255, 204, 0.8)',
                      '0 0 8px rgba(0, 255, 204, 0.5)'
                    ],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                >
                  {experience.title}
                </motion.h3>
                <motion.p
                  className="text-[#00ffcc] text-[14px] font-medium"
                  animate={{
                    textShadow: [
                      '0 0 8px rgba(0, 255, 204, 0.3)',
                      '0 0 16px rgba(0, 255, 204, 0.6)',
                      '0 0 8px rgba(0, 255, 204, 0.3)'
                    ],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                >
                  {experience.company_name}
                </motion.p>
              </div>
            </div>
            
            <ul className="list-disc list-inside mt-2 space-y-2">
              {experience.points.map((point, pointIndex) => (
                <motion.li
                  key={pointIndex}
                  className="text-white-100 text-[14px] leading-[24px]"
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
                      ],
                      transition: { duration: 2, repeat: Infinity }
                    }}
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
            ],
            transition: { duration: 2, repeat: Infinity }
          }}
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
            ],
            transition: { duration: 2, repeat: Infinity }
          }}
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
            ],
            transition: { duration: 2, repeat: Infinity }
          }}
        >
          I've worked with a range of technologies in the web development world.
          From Back-end To Design
        </motion.p>

        <div className="w-full relative">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} experience={experience} index={index} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default SectionWrapper(Experience)

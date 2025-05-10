import { motion, useScroll, useTransform } from 'framer-motion'
import { testimonials } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { useRef } from 'react'

// Define proper type for feedback
interface Feedback {
  testimonial: string
  name: string
  designation: string
  company: string
  image: string
}

const FeedbackCard = ({ feedback, index }: { feedback: Feedback; index: number }) => {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  })

  // Changed to subtle rotation that won't invert text
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20])
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
        className="bg-tertiary p-8 rounded-3xl relative group overflow-hidden shadow-xl"
        whileHover={{ 
          scale: 1.03, 
          y: -10, 
          boxShadow: '0 25px 50px -12px rgba(0, 255, 204, 0.25)'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#00ffcc]/5 to-[#00d9a7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(0, 255, 204, 0.05) 0%, rgba(0, 217, 167, 0.05) 100%)',
              'linear-gradient(135deg, rgba(0, 217, 167, 0.05) 0%, rgba(0, 255, 204, 0.05) 100%)',
              'linear-gradient(225deg, rgba(0, 255, 204, 0.05) 0%, rgba(0, 217, 167, 0.05) 100%)',
              'linear-gradient(315deg, rgba(0, 217, 167, 0.05) 0%, rgba(0, 255, 204, 0.05) 100%)',
              'linear-gradient(45deg, rgba(0, 255, 204, 0.05) 0%, rgba(0, 217, 167, 0.05) 100%)'
            ],
            transition: { duration: 5, repeat: Infinity, ease: 'linear' }
          }}
        />
        
        {/* Quote mark */}
        <motion.div
          className="absolute top-4 right-4 text-[#00ffcc] opacity-20 text-6xl font-serif"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          "
        </motion.div>

        <div className="flex flex-col relative z-10">
          {/* Testimonial text */}
          <motion.p
            className="text-white-100 text-[16px] leading-[28px] mb-8 italic"
            animate={{
              textShadow: [
                '0 0 8px rgba(0, 255, 204, 0.2)',
                '0 0 16px rgba(0, 255, 204, 0.4)',
                '0 0 8px rgba(0, 255, 204, 0.2)'
              ],
              transition: { duration: 2, repeat: Infinity }
            }}
          >
            "{feedback.testimonial}"
          </motion.p>

          {/* Author info */}
          <div className="flex items-center gap-4 mt-auto">
            <motion.div
              className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#00ffcc]/30"
              whileHover={{ scale: 1.1 }}
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
              <img
                src={feedback.image}
                alt={feedback.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <div>
              <motion.h3
                className="text-white text-[18px] font-bold"
                animate={{
                  textShadow: [
                    '0 0 8px rgba(0, 255, 204, 0.3)',
                    '0 0 16px rgba(0, 255, 204, 0.6)',
                    '0 0 8px rgba(0, 255, 204, 0.3)'
                  ],
                  transition: { duration: 2, repeat: Infinity }
                }}
              >
                {feedback.name}
              </motion.h3>
              
              <motion.p
                className="text-[#00ffcc] text-[14px] font-medium"
                animate={{
                  textShadow: [
                    '0 0 8px rgba(0, 255, 204, 0.2)',
                    '0 0 16px rgba(0, 255, 204, 0.4)',
                    '0 0 8px rgba(0, 255, 204, 0.2)'
                  ],
                  transition: { duration: 2, repeat: Infinity }
                }}
              >
                {feedback.designation} • {feedback.company}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Feedbacks = () => {
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
      className={`${styles.padding}`}
      id="feedbacks"
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
          What others say
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
          Testimonials
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
          Here's what clients and colleagues have to say about my work and collaboration style.
        </motion.p>

        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((feedback, index) => (
              <FeedbackCard key={feedback.name} feedback={feedback} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default SectionWrapper(Feedbacks)

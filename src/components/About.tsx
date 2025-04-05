import { motion, useScroll, useTransform } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { useRef } from 'react'

const ServiceCard = ({ title, icon, index }: { title: string; icon: string; index: number }) => {
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
      className="w-full sm:w-[250px] perspective-1000"
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
        <div className="flex flex-col items-center">
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
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.img
              src={icon}
              alt={title}
              className="w-8 h-8 object-contain"
              whileHover={{ scale: 1.2, rotate: 180 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          <motion.h3
            className="text-white text-[20px] font-bold text-center"
            animate={{
              textShadow: [
                '0 0 8px rgba(0, 255, 204, 0.5)',
                '0 0 16px rgba(0, 255, 204, 0.8)',
                '0 0 8px rgba(0, 255, 204, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {title}
          </motion.h3>
        </div>
      </motion.div>
    </motion.div>
  )
}

const About = () => {
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
      id="about"
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
          Introduction
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
          Overview
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
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {[
            {
              title: 'Web Development',
              icon: 'https://raw.githubusercontent.com/adrianhajdin/project_3d_developer_portfolio/main/src/assets/web.png'
            },
            {
              title: 'Mobile Development',
              icon: 'https://raw.githubusercontent.com/adrianhajdin/project_3d_developer_portfolio/main/src/assets/mobile.png'
            },
            {
              title: 'Backend Development',
              icon: 'https://raw.githubusercontent.com/adrianhajdin/project_3d_developer_portfolio/main/src/assets/backend.png'
            }
          ].map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default SectionWrapper(About)

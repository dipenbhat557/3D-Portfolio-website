import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { resume } from '../assets'
import { useRef, useEffect } from 'react'
import { FaXTwitter } from 'react-icons/fa6'

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 10])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, y, scale, rotate }}
      className="relative w-full h-screen mx-auto overflow-hidden bg-gradient-to-b from-gray-900 to-black cursor-none"
    >
      {/* Custom cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-[#00ffcc] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: 'var(--mouse-x)',
          top: 'var(--mouse-y)',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px rgba(0, 255, 204, 0.5)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
          boxShadow: [
            '0 0 20px rgba(0, 255, 204, 0.5)',
            '0 0 30px rgba(0, 255, 204, 0.8)',
            '0 0 20px rgba(0, 255, 204, 0.5)'
          ]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Cursor trail */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-4 h-4 bg-[#00ffcc] rounded-full pointer-events-none z-[9998] mix-blend-difference"
          style={{
            left: 'var(--mouse-x)',
            top: 'var(--mouse-y)',
            transform: 'translate(-50%, -50%)',
            opacity: 0.3 - (i * 0.1),
            scale: 1 - (i * 0.2)
          }}
          animate={{
            scale: [1 - (i * 0.2), 1.2 - (i * 0.2), 1 - (i * 0.2)],
            opacity: [0.3 - (i * 0.1), 0.5 - (i * 0.1), 0.3 - (i * 0.1)],
            boxShadow: [
              `0 0 ${20 + (i * 10)}px rgba(0, 255, 204, ${0.3 - (i * 0.1)})`,
              `0 0 ${30 + (i * 10)}px rgba(0, 255, 204, ${0.5 - (i * 0.1)})`,
              `0 0 ${20 + (i * 10)}px rgba(0, 255, 204, ${0.3 - (i * 0.1)})`
            ]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.1
          }}
        />
      ))}

      {/* Cursor ring */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-[#00ffcc] rounded-full pointer-events-none z-[9997] mix-blend-difference"
        style={{
          left: 'var(--mouse-x)',
          top: 'var(--mouse-y)',
          transform: 'translate(-50%, -50%)'
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00ffcc] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [0, -1000],
              opacity: [0, 1, 0],
              scale: [1, 2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-4xl sm:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00ffcc] to-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              textShadow: [
                '0 0 8px rgba(0, 255, 204, 0.5)',
                '0 0 16px rgba(0, 255, 204, 0.8)',
                '0 0 8px rgba(0, 255, 204, 0.5)'
              ],
              transition: { duration: 0.8, delay: 0.2 }
            }}
          >
            Hi, I'm{' '}
            <motion.span
              className="text-[#00ffcc]"
              animate={{
                textShadow: [
                  '0 0 8px rgba(0, 255, 204, 0.5)',
                  '0 0 16px rgba(0, 255, 204, 0.8)',
                  '0 0 8px rgba(0, 255, 204, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Dipendra
            </motion.span>
          </motion.h1>

          <motion.div
            className="text-xl sm:text-3xl font-semibold mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Code',
                2000,
                'Red Bull',
                2000,
                'Break',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#00ffcc]"
            />
          </motion.div>

          <motion.p
            className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              textShadow: [
                '0 0 8px rgba(0, 255, 204, 0.3)',
                '0 0 16px rgba(0, 255, 204, 0.6)',
                '0 0 8px rgba(0, 255, 204, 0.3)'
              ],
              transition: { duration: 0.8, delay: 0.6 }
            }}
          >
            I build exceptional digital experiences that are fast, accessible, and visually appealing.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: FaGithub, url: 'https://github.com/dipenbhat557' },
              { icon: FaLinkedin, url: 'https://www.linkedin.com/in/dipendra-bhatta-38ba32259/' },
              { icon: FaInstagram, url: 'https://www.instagram.com/dipenbhat557/' },
              { icon: FaXTwitter, url: 'https://x.com/dipenbhat557' }
            ].map(({ icon: Icon, url }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#00ffcc] hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -5, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 255, 204, 0.2)',
                    '0 0 40px rgba(0, 255, 204, 0.4)',
                    '0 0 20px rgba(0, 255, 204, 0.2)'
                  ],
                  transition: { duration: 2, repeat: Infinity }
                }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Download CV Button */}
          {/* <motion.a
            href={resume}
            download
            className="inline-block bg-gradient-to-r from-[#00ffcc] to-[#00d9a7] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#00ffcc]/20 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              boxShadow: [
                '0 0 20px rgba(0, 255, 204, 0.2)',
                '0 0 40px rgba(0, 255, 204, 0.4)',
                '0 0 20px rgba(0, 255, 204, 0.2)'
              ],
              transition: { duration: 0.8, delay: 1 }
            }}
          >
            Download CV
          </motion.a> */}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-[#00ffcc] rounded-full flex justify-center p-1"
            animate={{
              y: [0, 10, 0],
              borderColor: ['#00ffcc', '#00d9a7', '#00ffcc'],
              boxShadow: [
                '0 0 10px rgba(0, 255, 204, 0.2)',
                '0 0 20px rgba(0, 255, 204, 0.4)',
                '0 0 10px rgba(0, 255, 204, 0.2)'
              ]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            <motion.div
              className="w-1 h-1 bg-[#00ffcc] rounded-full"
              animate={{
                y: [0, 5, 0],
                backgroundColor: ['#00ffcc', '#00d9a7', '#00ffcc'],
                boxShadow: [
                  '0 0 5px rgba(0, 255, 204, 0.2)',
                  '0 0 10px rgba(0, 255, 204, 0.4)',
                  '0 0 5px rgba(0, 255, 204, 0.2)'
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero

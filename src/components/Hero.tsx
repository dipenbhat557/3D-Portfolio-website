import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { useRef, useEffect, useState } from 'react'
import { FaXTwitter } from 'react-icons/fa6'

const Hero = () => {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isInsideHero, setIsInsideHero] = useState(false)
  
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
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const heroElement = containerRef.current as HTMLElement | null
    
    const handleMouseEnter = () => setIsInsideHero(true)
    const handleMouseLeave = () => setIsInsideHero(false)

    if (heroElement) {
      heroElement.addEventListener('mouseenter', handleMouseEnter)
      heroElement.addEventListener('mouseleave', handleMouseLeave)
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (heroElement) {
        heroElement.removeEventListener('mouseenter', handleMouseEnter)
        heroElement.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, y, scale, rotate }}
      className="relative w-full h-screen mx-auto overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 cursor-none"
    >
      {/* Custom cursor - only visible inside hero section */}
      {isInsideHero && (
        <>
          <motion.div
            className="fixed w-4 h-4 bg-[#00ffcc] rounded-full pointer-events-none z-[999] mix-blend-difference"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
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
              className="fixed w-4 h-4 bg-[#00ffcc] rounded-full pointer-events-none z-[998] mix-blend-difference"
              style={{
                left: mousePosition.x,
                top: mousePosition.y,
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
            className="fixed w-8 h-8 border-2 border-[#00ffcc] rounded-full pointer-events-none z-[997] mix-blend-difference"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
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
        </>
      )}

      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Animated particles */}
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
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-500 via-transparent to-pink-500"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(123, 31, 162, 0.1), rgba(103, 232, 249, 0.1))',
              'linear-gradient(135deg, rgba(103, 232, 249, 0.1), rgba(123, 31, 162, 0.1))',
              'linear-gradient(225deg, rgba(123, 31, 162, 0.1), rgba(103, 232, 249, 0.1))',
              'linear-gradient(315deg, rgba(103, 232, 249, 0.1), rgba(123, 31, 162, 0.1))',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      {/* Animated decoration circles */}
      <div className="absolute right-20 top-1/4 z-0">
        <motion.div 
          className="absolute h-64 w-64 rounded-full border border-[#00ffcc]/20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div 
          className="absolute h-48 w-48 rounded-full border border-[#00ffcc]/15"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div 
          className="absolute h-32 w-32 rounded-full border border-[#00ffcc]/10"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Left decoration */}
      <div className="absolute left-20 bottom-1/4 z-0">
        <motion.div 
          className="absolute h-48 w-48 rounded-full border border-[#00ffcc]/20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [360, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div 
          className="absolute h-32 w-32 rounded-full border border-[#00ffcc]/15"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, 360],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <motion.div 
            className="text-[300px] font-bold text-white"
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            D
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl w-full"
        >
          <motion.h1
            className="text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00ffcc] to-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              textShadow: [
                '0 0 8px rgba(0, 255, 204, 0.5)',
                '0 0 16px rgba(0, 255, 204, 0.8)',
                '0 0 8px rgba(0, 255, 204, 0.5)'
              ]
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
            className="text-2xl sm:text-4xl font-semibold mb-8 text-white relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I <span className="text-white/50">{'{'}</span> 
            <TypeAnimation
              sequence={[
                'design',
                1500,
                'develop',
                1500,
                'create',
                1500,
                'build',
                1500,
                'innovate',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#00ffcc] inline-block min-w-[120px]"
            /> 
            <span className="text-white/50">{'}'}</span>
          </motion.div>

          <motion.p
            className="text-gray-300 text-xl sm:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              textShadow: [
                '0 0 8px rgba(0, 255, 204, 0.3)',
                '0 0 16px rgba(0, 255, 204, 0.6)',
                '0 0 8px rgba(0, 255, 204, 0.3)'
              ]
            }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build exceptional digital experiences that are fast, accessible, and visually appealing.
          </motion.p>

          {/* Social Links - using pointer-events-auto to ensure clickability */}
          <motion.div
            className="flex justify-center gap-8 mb-12"
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
                className="text-3xl text-[#00ffcc] hover:text-white transition-all duration-300 p-3 rounded-full border border-[#00ffcc]/20 hover:border-[#00ffcc] bg-black/20 hover:bg-black/40 pointer-events-auto"
                whileHover={{ scale: 1.2, y: -5, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 255, 204, 0.1)',
                    '0 0 40px rgba(0, 255, 204, 0.2)',
                    '0 0 20px rgba(0, 255, 204, 0.1)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button - using pointer-events-auto to ensure clickability */}
          <motion.a
            href="#contact"
            className="inline-block bg-gradient-to-r from-[#00ffcc] to-[#00d9a7] text-black px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-[#00ffcc]/20 transition-all duration-300 relative overflow-hidden group pointer-events-auto"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.span
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            Let's work together
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 pointer-events-auto"
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

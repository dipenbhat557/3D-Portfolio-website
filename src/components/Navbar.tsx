import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { styles } from '../styles'
import { logo } from '../assets'
import { useRef } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.1], [-100, 0])
  const blur = useTransform(scrollYProgress, [0, 0.1], [0, 10])

  // Track scroll position to add background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      ref={containerRef}
      style={{ opacity, y, backdropFilter: `blur(${blur}px)` }}
      className={`${styles.paddingX} w-full flex items-center bg-black py-5 fixed top-0 z-50 ${scrolled ? 'bg-primary/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'} transition-all duration-300`}
    >
      {/* Custom cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-[#00ffcc] rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 pointer-events-auto"
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <motion.img
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain"
            whileHover={{ scale: 1.1, rotate: 360 }}
            animate={{
              boxShadow: [
                '0 0 10px rgba(0, 255, 204, 0.2)',
                '0 0 20px rgba(0, 255, 204, 0.4)',
                '0 0 10px rgba(0, 255, 204, 0.2)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.p
            className="text-white text-[18px] font-bold cursor-pointer flex"
            whileHover={{ x: 5 }}
            animate={{
              textShadow: [
                '0 0 8px rgba(0, 255, 204, 0.3)',
                '0 0 16px rgba(0, 255, 204, 0.6)',
                '0 0 8px rgba(0, 255, 204, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Dipendra &nbsp;
            <span className="sm:block hidden">| Portfolio</span>
          </motion.p>
        </Link>
      </div>
    </motion.nav>
  )
}

export default Navbar

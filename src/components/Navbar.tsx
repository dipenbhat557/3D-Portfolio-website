import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { logo } from '../assets'
import { useRef } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const containerRef = useRef(null)

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
      className={`${styles.paddingX} w-full flex items-center bg-black py-5 fixed top-0 z-50 ${scrolled ? 'bg-primary/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'} transition-all duration-300`}
    >

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

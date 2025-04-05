import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { close, logo, menu } from '../assets'
import { useRef } from 'react'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.1], [-100, 0])
  const blur = useTransform(scrollYProgress, [0, 0.1], [0, 10])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      ref={containerRef}
      style={{ opacity, y, backdropFilter: `blur(${blur}px)` }}
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300 cursor-none`}
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
          className="flex items-center gap-2 group"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <motion.img
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain group-hover:rotate-12 transition-transform duration-300"
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
            className="text-[18px] font-bold cursor-pointer text-white group-hover:text-[#00ffcc] transition-colors duration-300"
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
            Dipendra
          </motion.p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href={`#${link.id}`}
                className={`${
                  active === link.title
                    ? 'text-white'
                    : 'text-[#00ffccb3] hover:text-white'
                } text-[18px] font-medium cursor-pointer transition-colors duration-300 relative group`}
                onClick={() => setActive(link.title)}
              >
                {link.title}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ffcc] group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 0 10px rgba(0, 255, 204, 0.2)',
                '0 0 20px rgba(0, 255, 204, 0.4)',
                '0 0 10px rgba(0, 255, 204, 0.2)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <motion.div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ 
              opacity: toggle ? 1 : 0, 
              scale: toggle ? 1 : 0.8,
              y: toggle ? 0 : -20
            }}
            transition={{ duration: 0.2 }}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={`#${link.id}`}
                    className={`${
                      active === link.title
                        ? 'text-white'
                        : 'text-[#00ffccb3] hover:text-white'
                    } font-poppins font-medium cursor-pointer text-[16px] transition-colors duration-300`}
                    onClick={() => {
                      setToggle(!toggle)
                      setActive(link.title)
                    }}
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

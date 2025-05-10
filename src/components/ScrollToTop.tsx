import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set up scroll listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#00ffcc] text-black z-50 flex items-center justify-center shadow-lg hover:bg-[#00d9a7] transition-colors duration-300"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ 
            y: -5,
            boxShadow: '0 10px 25px -5px rgba(0, 255, 204, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp className="text-lg" />
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-[#00ffcc] opacity-0"
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop 
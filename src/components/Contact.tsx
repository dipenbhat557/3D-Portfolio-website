import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { useRef, useState } from 'react'
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt } from 'react-icons/fa'

const Contact = () => {
  const containerRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [focused, setFocused] = useState<string | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y }}
      className={`${styles.padding} min-h-screen`}
      id="contact"
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
          Get in touch
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
          Contact
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left column - Contact info */}
        <motion.div 
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.p
              className="text-secondary text-[20px] leading-[32px]"
              animate={{
                textShadow: [
                  '0 0 8px rgba(0, 255, 204, 0.3)',
                  '0 0 16px rgba(0, 255, 204, 0.6)',
                  '0 0 8px rgba(0, 255, 204, 0.3)'
                ],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              Let's connect. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </motion.p>
          </motion.div>

          {/* Contact graphics */}
          <motion.div 
            className="relative h-[300px] hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Decorative elements */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 rounded-full border-2 border-[#00ffcc]/20"
                style={{
                  top: `${30 + (i * 10)}%`,
                  left: `${10 + (i * 5)}%`,
                  opacity: 0.2 - i * 0.03
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  borderColor: [
                    'rgba(0, 255, 204, 0.2)',
                    'rgba(0, 255, 204, 0.4)',
                    'rgba(0, 255, 204, 0.2)'
                  ]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: i * 0.5 
                }}
              />
            ))}
            
            <motion.div
              className="absolute bottom-0 right-10 text-[#00ffcc]"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                type: "spring", 
                stiffness: 200 
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <FaPaperPlane className="text-6xl" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right column - Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="bg-tertiary p-8 rounded-2xl relative group overflow-hidden shadow-xl"
            whileHover={{ 
              y: -10, 
              boxShadow: '0 25px 50px -12px rgba(0, 255, 204, 0.25)'
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated gradient border */}
            <motion.div 
              className="absolute inset-0 rounded-2xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ padding: '2px' }}
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
            >
              <div className="bg-tertiary h-full w-full rounded-2xl"></div>
            </motion.div>
            
            <form className="relative z-10 flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="relative">
                <motion.label
                  htmlFor="name"
                  className={`absolute left-10 ${focused === 'name' || formData.name ? 'text-[12px] top-2' : 'text-[14px] top-1/2 -translate-y-1/2'} text-[#00ffcc] font-medium transition-all duration-300`}
                  animate={{
                    textShadow: focused === 'name' ? [
                      '0 0 8px rgba(0, 255, 204, 0.5)',
                      '0 0 16px rgba(0, 255, 204, 0.8)',
                      '0 0 8px rgba(0, 255, 204, 0.5)'
                    ] : 'none'
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Name
                </motion.label>
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00ffcc]">
                  <FaUser />
                </div>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/20 rounded-lg p-4 pl-10 text-white border-2 border-[#00ffcc]/20 focus:border-[#00ffcc] focus:outline-none transition-all duration-300 pt-7"
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: '0 0 15px rgba(0, 255, 204, 0.3)'
                  }}
                />
              </div>

              <div className="relative">
                <motion.label
                  htmlFor="email"
                  className={`absolute left-10 ${focused === 'email' || formData.email ? 'text-[12px] top-2' : 'text-[14px] top-1/2 -translate-y-1/2'} text-[#00ffcc] font-medium transition-all duration-300`}
                  animate={{
                    textShadow: focused === 'email' ? [
                      '0 0 8px rgba(0, 255, 204, 0.5)',
                      '0 0 16px rgba(0, 255, 204, 0.8)',
                      '0 0 8px rgba(0, 255, 204, 0.5)'
                    ] : 'none'
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Email
                </motion.label>
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00ffcc]">
                  <FaEnvelope />
                </div>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/20 rounded-lg p-4 pl-10 text-white border-2 border-[#00ffcc]/20 focus:border-[#00ffcc] focus:outline-none transition-all duration-300 pt-7"
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: '0 0 15px rgba(0, 255, 204, 0.3)'
                  }}
                />
              </div>

              <div className="relative">
                <motion.label
                  htmlFor="message"
                  className={`absolute left-10 ${focused === 'message' || formData.message ? 'text-[12px] top-2' : 'text-[14px] top-6'} text-[#00ffcc] font-medium transition-all duration-300`}
                  animate={{
                    textShadow: focused === 'message' ? [
                      '0 0 8px rgba(0, 255, 204, 0.5)',
                      '0 0 16px rgba(0, 255, 204, 0.8)',
                      '0 0 8px rgba(0, 255, 204, 0.5)'
                    ] : 'none'
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Message
                </motion.label>
                <div className="absolute left-3 top-6 text-[#00ffcc]">
                  <FaCommentAlt />
                </div>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-black/20 rounded-lg p-4 pl-10 text-white border-2 border-[#00ffcc]/20 focus:border-[#00ffcc] focus:outline-none transition-all duration-300 pt-7 resize-none"
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: '0 0 15px rgba(0, 255, 204, 0.3)'
                  }}
                />
              </div>

              <motion.button
                type="submit"
                className="bg-gradient-to-r from-[#00ffcc] to-[#00d9a7] text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(0, 255, 204, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
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
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <FaPaperPlane className="text-sm" />
                </span>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Contact)

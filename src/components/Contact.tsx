import { motion, useScroll, useTransform } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { useRef } from 'react'

const Contact = () => {
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
      className={`${styles.padding} min-h-screen`}
      id="contact"
    >
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.p
          className={styles.sectionSubText}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          animate={{
            textShadow: [
              '0 0 8px rgba(0, 255, 204, 0.5)',
              '0 0 16px rgba(0, 255, 204, 0.8)',
              '0 0 8px rgba(0, 255, 204, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Get in touch
        </motion.p>
        <motion.h2
          className={styles.sectionHeadText}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          animate={{
            textShadow: [
              '0 0 8px rgba(0, 255, 204, 0.5)',
              '0 0 16px rgba(0, 255, 204, 0.8)',
              '0 0 8px rgba(0, 255, 204, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Contact
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          animate={{
            textShadow: [
              '0 0 8px rgba(0, 255, 204, 0.3)',
              '0 0 16px rgba(0, 255, 204, 0.6)',
              '0 0 8px rgba(0, 255, 204, 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </motion.p>

        <motion.div
          className="bg-black-200 p-8 rounded-3xl w-full max-w-2xl relative group overflow-hidden"
          whileHover={{ scale: 1.02, y: -5 }}
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
          <form className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.label
                htmlFor="name"
                className="text-white text-[16px] font-medium mb-2 block"
                animate={{
                  textShadow: [
                    '0 0 8px rgba(0, 255, 204, 0.3)',
                    '0 0 16px rgba(0, 255, 204, 0.6)',
                    '0 0 8px rgba(0, 255, 204, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Name
              </motion.label>
              <motion.input
                type="text"
                id="name"
                name="name"
                className="w-full bg-black-100 rounded-lg p-4 text-white border border-[#00ffcc]/20 focus:border-[#00ffcc] focus:outline-none transition-colors duration-300"
                placeholder="Your name"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.label
                htmlFor="email"
                className="text-white text-[16px] font-medium mb-2 block"
                animate={{
                  textShadow: [
                    '0 0 8px rgba(0, 255, 204, 0.3)',
                    '0 0 16px rgba(0, 255, 204, 0.6)',
                    '0 0 8px rgba(0, 255, 204, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Email
              </motion.label>
              <motion.input
                type="email"
                id="email"
                name="email"
                className="w-full bg-black-100 rounded-lg p-4 text-white border border-[#00ffcc]/20 focus:border-[#00ffcc] focus:outline-none transition-colors duration-300"
                placeholder="Your email"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <motion.label
                htmlFor="message"
                className="text-white text-[16px] font-medium mb-2 block"
                animate={{
                  textShadow: [
                    '0 0 8px rgba(0, 255, 204, 0.3)',
                    '0 0 16px rgba(0, 255, 204, 0.6)',
                    '0 0 8px rgba(0, 255, 204, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Message
              </motion.label>
              <motion.textarea
                id="message"
                name="message"
                rows={6}
                className="w-full bg-black-100 rounded-lg p-4 text-white border border-[#00ffcc]/20 focus:border-[#00ffcc] focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Your message"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="bg-[#00ffcc] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#00d9a7] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0, 255, 204, 0.2)',
                  '0 0 40px rgba(0, 255, 204, 0.4)',
                  '0 0 20px rgba(0, 255, 204, 0.2)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default SectionWrapper(Contact)

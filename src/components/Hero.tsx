import { motion } from "framer-motion";
import { profile, resume } from "../assets";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";


const Hero = () => {


  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden ">
      <div className="rounded-full border-4 border-[#00ffccb3] w-[200px] h-[200px]  sm:w-[400px] sm:h-[400px] absolute top-[40%] right-[23%]  sm:top-[25%] animate-pulse sm:right-[10%]">
            <img 
                src={profile} 
                alt="Clipped Example" 
                className="w-full h-full object-cover rounded-full animate-none" 
            />
      </div>
      <div className="absolute top-[75%] sm:top-[55%] left-[10%] flex gap-4 z-20">
        <div className=" flex items-center justify-center gap-2 w-auto sm:h-[50px]">
          <FaGithub onClick={()=>window.location.href="https://github.com/dipenbhat557"} className="cursor-pointer text-[#00ffccb3] text-3xl"/>
          <FaLinkedin onClick={()=>window.location.href="https://www.linkedin.com/in/dipendra-bhatta-38ba32259/"} className="cursor-pointer text-[#00ffccb3] text-3xl"/>
          <FaInstagram onClick={()=>window.location.href="https://www.instagram.com/dipenbhat557/"} className="cursor-pointer text-[#00ffccb3] text-3xl"/>
           <FaWhatsapp onClick={()=>window.location.href="https://wa.me/+917054625762"} className="cursor-pointer text-[#00ffccb3] text-3xl"/>
                 
        </div>
        <a href={resume} download className="bg-[#00ffccb3] px-4 py-2 sm:w-[200px] sm:h-[50px] flex items-center justify-center rounded-xl text-white hover:bg-[#00d9a7] cursor-pointer">
          Download CV
        </a>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-transparent absolute top-[20%] z-20 sm:z-none sm:top-[25%] left-auto sm:left-[5%] bg-clip-text bg-gradient-to-r from-[#00ffccb3] to-white font-semibold sm:font-bold "
          >
          {"Hello, I'm Dipendra".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.1 * index }}
                style={{ display: "inline-block" }}
               className="text-[30px] sm:text-[50px]" 
              >
                {char === " " ? "\u00A0" : char}{" "}
              </motion.span>
            ))}
            <br/>
            {"Crafting Solutions with Code".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.1 * index }}
                style={{ display: "inline-block" }}
               className="text-[18px] sm:text-[30px]" 
              >
                {char === " " ? "\u00A0" : char}{" "}
              </motion.span>
            ))}
            <br />
            {"Let's Build Something Great Together".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.1 * index }}
                style={{ display: "inline-block" }}
               className="text-[18px] sm:text-[30px]" 
              >
                {char === " " ? "\u00A0" : char}{" "}
              </motion.span>
            ))}
          </motion.span>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="rounded-full border-4 border-teal-400 flex justify-center items-center p-2 w-[50px] h-[50px] bg-gray-900">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-4 h-4 rounded-full bg-teal-400"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

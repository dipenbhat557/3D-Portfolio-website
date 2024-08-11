import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  const canvasRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const particles = [];
    const numParticles = 100;

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      };
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(createParticle());
    }

    function animateParticles() {
      if (!isAnimating) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.fill();
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x > canvas.width || particle.x < 0) particle.speedX *= -1;
        if (particle.y > canvas.height || particle.y < 0) particle.speedY *= -1;
      });

      requestAnimationFrame(animateParticles);
    }

    animateParticles();

    function handleMouseMove() {
      setIsAnimating(false);
    }

    function handleMouseStop() {
      setTimeout(() => {
        setIsAnimating(true);
        animateParticles();
      }, 1000); // Restart animation after 1 second
    }

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseStop);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseStop);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [isAnimating]);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-10" />

      <div
        className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-20`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Dipendra</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            Your Vision, My Code <br className="sm:block hidden" />
            ---One Seamless Journey
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="rounded-3xl border-4 border-secondary flex justify-center items-start p-2 w-[35px] h-[64px]">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

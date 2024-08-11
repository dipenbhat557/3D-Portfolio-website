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
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
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
        ctx.fillStyle = "rgba(0, 255, 204, 0.7)"; // Changed color
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
      }, 1000);
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
    <section className="relative w-full h-screen mx-auto overflow-hidden ">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-10" />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center">
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hello, I'm <span className="text-teal-400">Dipendra</span>
        </h1>
        <p className={`${styles.heroSubText} text-gray-300 mt-4`}>
          Crafting Solutions with Code <br className="sm:block hidden" />
          Let's Build Something Great Together
        </p>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center items-center z-20">
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

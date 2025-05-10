import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { FC } from "react";

const SectionWrapper = (Component: FC, idName?: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-0 mb-8"
        id={idName}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
export default SectionWrapper;
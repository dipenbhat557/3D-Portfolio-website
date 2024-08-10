import {motion} from "framer-motion";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology,index) => (
        <motion.div variants={fadeIn("down","tween",0.05*(index+1),0.2)} className="w-28 h-28 rounded-full" key={technology.name}>
          <img src={technology?.icon} alt="technology" className="object-cover rounded-full w-full h-full" />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper( Tech);

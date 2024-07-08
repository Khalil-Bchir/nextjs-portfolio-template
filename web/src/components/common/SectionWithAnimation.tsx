import { ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionWithAnimationProps {
  children: ReactNode;
  id: string;
  className?: string; // Make className optional if you don't want to make it mandatory
}

const SectionWithAnimation: React.FC<SectionWithAnimationProps> = ({ children, id, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  }

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`py-16 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      {children}
    </motion.section>
  );
};

export default SectionWithAnimation;

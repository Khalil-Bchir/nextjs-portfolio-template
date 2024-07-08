import { ReactNode } from "react";
import { motion, useAnimation } from "framer-motion"; // Importing motion and useAnimation from framer-motion
import { useInView } from "react-intersection-observer"; // Importing useInView from react-intersection-observer

// Defining the props for the SectionWithAnimation component
interface SectionWithAnimationProps {
  children: ReactNode; // Children elements to be rendered inside the section
  id: string; // Unique id for the section
  className?: string; // Optional className for additional styling
}

// Defining the SectionWithAnimation component
const SectionWithAnimation: React.FC<SectionWithAnimationProps> = ({ children, id, className }) => {
  const controls = useAnimation(); // useAnimation hook from framer-motion to control animations
  const [ref, inView] = useInView({ triggerOnce: true }); // useInView hook to determine if the section is in view

  // Start the animation when the section comes into view
  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  }

  return (
    // motion.section to create an animated section element
    <motion.section
      id={id}
      ref={ref} // Ref to track if the section is in view
      className={`py-16 ${className}`} // Adding padding and optional className for styling
      initial={{ opacity: 0, y: 50 }} // Initial animation state: hidden and slightly below its final position
      animate={controls} // Controls to handle the animation
    >
      {children} {/* Render the children elements */}
    </motion.section>
  );
};

export default SectionWithAnimation; // Exporting the component as default

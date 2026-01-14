import { motion } from 'framer-motion';

const AnimatedTab = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedTab;

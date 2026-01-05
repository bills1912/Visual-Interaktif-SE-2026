import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'zoom';

interface AnimationWrapperProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  duration?: number;
  viewportAmount?: number;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  className = "",
  duration = 0.6,
  viewportAmount = 0.3
}) => {
  
  const getVariants = (dir: Direction): Variants => {
    switch (dir) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -60 },
          visible: { opacity: 1, y: 0 }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: -60 },
          visible: { opacity: 1, x: 0 }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 60 },
          visible: { opacity: 1, x: 0 }
        };
      case 'zoom':
        return {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration, delay, ease: "easeOut" }}
      variants={getVariants(direction as Direction)}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxBackground: React.FC<{ children: React.ReactNode, speed?: number, className?: string }> = ({ children, speed = 1, className = "" }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50 * speed, 50 * speed]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ y }} className="w-full h-full">
                {children}
            </motion.div>
        </div>
    );
}

export default AnimationWrapper;
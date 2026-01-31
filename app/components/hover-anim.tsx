"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverAnimProps {
  children: ReactNode;
  className?: string;
}

export default function HoverAnim({ children, className = "" }: HoverAnimProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,       
        rotate: -0.5,       
        y: -5               
      }}
      whileTap={{ scale: 0.98 }} 
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
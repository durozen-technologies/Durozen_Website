"use client";

import React from "react";
import { motion, MotionConfig } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.32,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex-1 flex flex-col w-full"
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}

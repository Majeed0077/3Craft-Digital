"use client";

import { motion } from "framer-motion";

export default function BackgroundMotion() {
  return (
    <div className="bg-motion" aria-hidden="true">
      <motion.div
        className="bg-motion-inner"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="bg-orb orb-1"
          animate={{
            x: [-110, 80, -110],
            y: [-70, 90, -70],
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="bg-orb orb-2"
          animate={{
            x: [90, -100, 90],
            y: [110, -80, 110],
            scale: [1, 1.18, 1],
            opacity: [0.22, 0.4, 0.22],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="bg-orb orb-3"
          animate={{
            x: [0, 110, 0],
            y: [-90, 50, -90],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.38, 0.2],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="bg-orb orb-4"
          animate={{
            x: [-80, 100, -80],
            y: [70, -90, 70],
            scale: [1, 1.22, 1],
            opacity: [0.18, 0.34, 0.18],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}

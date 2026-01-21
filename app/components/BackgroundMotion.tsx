"use client";

import { motion } from "framer-motion";

export default function BackgroundMotion() {
  return (
    <div className="bg-motion" aria-hidden="true">
      <motion.div
        className="bg-orb orb-1"
        animate={{ x: [-60, 40, -60], y: [-30, 50, -30], scale: [1, 1.15, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-orb orb-2"
        animate={{ x: [40, -50, 40], y: [60, -40, 60], scale: [1, 1.1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-orb orb-3"
        animate={{ x: [0, 70, 0], y: [-50, 20, -50], scale: [1, 1.2, 1] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real scenario, this might wait for fonts or images to load.
    // We use a simple timeout for demonstration, keeping it subtle and fast.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0D1B2A]"
        >
          {/* Subtle spinning glow behind the N */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute w-32 h-32 rounded-full opacity-20 blur-xl"
            style={{
              background: "conic-gradient(from 0deg, #F5A623, #E63946, #1B3A6B, #F5A623)",
            }}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center"
          >
            <h1
              className="text-6xl font-bold text-white tracking-tighter mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              N
              <span className="text-brand-secondary italic text-4xl leading-[0]">.</span>
            </h1>
            
            {/* Loading line */}
            <div className="w-32 h-px bg-white/20 overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-brand-secondary to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

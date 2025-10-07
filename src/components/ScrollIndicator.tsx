"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800/20 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-green-primary to-green-light"
        initial={{ width: "0%" }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
      />
    </div>
  );
}

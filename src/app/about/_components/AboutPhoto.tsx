import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "tween", duration: 0.5, delay: 0.5 }}
      className="relative"
    >
      {/* Background gradient blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-primary/20 via-green-secondary/10 to-green-light/5 blur-3xl transform scale-110 -z-10"></div>
      
      <div className="relative w-full max-w-[320px] mx-auto lg:mt-16">
        {/* Main photo container */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative group"
        >
          {/* Outer border with gradient */}
          <div className="p-1 bg-gradient-to-br from-green-secondary via-green-primary to-green-light rounded-3xl">
            {/* Inner container */}
            <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/profile.png"
                alt="Muhammad Azril Fahrezi"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                className="transition-all duration-500 group-hover:scale-105"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Professional badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-4 -right-4 bg-green-primary text-white px-4 py-2 rounded-full shadow-lg border-2 border-green-secondary"
          >
            <span className="text-sm font-semibold">Software Engineer</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

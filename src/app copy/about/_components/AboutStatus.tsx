import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Icon from "@/components/Icon";

export default function AboutStatus() {
  const statusItems = [
    {
      icon: "user",
      label: "Role",
      value: "Software Engineer",
      delay: 0.1
    },
    {
      icon: "message",
      label: "Status",
      value: "Open to Work",
      status: "available",
      delay: 0.2
    },
    {
      icon: "laptop",
      label: "Location",
      value: "Palembang, Indonesia",
      delay: 0.3
    },
    {
      icon: "skills",
      label: "Focus",
      value: "Full-Stack & Data Analysis",
      delay: 0.4
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <TypeAnimation
          className="text-green-secondary text-lg font-semibold mb-2"
          sequence={["Quick Info"]}
          speed={80}
          cursor={false}
          wrapper="h3"
        />
      </motion.div>

      {/* Status List */}
      <div className="space-y-4">
        {statusItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: item.delay }}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-primary/5 transition-all duration-300 group"
          >
            <div className="w-6 h-6 bg-green-primary/20 rounded-md flex items-center justify-center mt-1 group-hover:bg-green-secondary/30 transition-colors duration-300">
              <Icon 
                icon={item.icon} 
                size={14} 
                className="text-green-secondary group-hover:text-green-light transition-colors duration-300" 
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-green-secondary text-xs font-medium">
                  {item.label}
                </span>
                {item.status === "available" && (
                  <div className="w-1.5 h-1.5 bg-green-light rounded-full animate-pulse"></div>
                )}
              </div>
              
              <span className="text-white text-sm font-medium leading-tight block">
                {item.value}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

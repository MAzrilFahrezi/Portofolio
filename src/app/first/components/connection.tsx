import React from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { motion } from "framer-motion";

export default function Connection() {
  const socialLinks = [
    {
      name: "GitHub",
      link: "https://github.com/MAzrilFahrezi",
      icon: "github"
    },
    {
      name: "Instagram", 
      link: "https://www.instagram.com/azrlfhrzi/",
      icon: "instagram"
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/azrilfahrezi/",
      icon: "linkedin"
    }
  ];

  return (
    <div className="flex flex-col w-full mt-8">
      <h3 className="text-white text-lg font-semibold mb-4">
        Let's Connect
      </h3>
      
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((social, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-black/20 border border-green-primary/30 rounded-xl px-6 py-4 hover:border-green-secondary hover:bg-green-primary/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-green-primary/20 rounded-full group-hover:bg-green-secondary/20 transition-all duration-300">
                <Icon 
                  icon={social.icon} 
                  size={24} 
                  className="text-green-secondary group-hover:text-green-light transition-colors duration-300"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <span className="text-white text-lg font-semibold">
                  {social.name}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

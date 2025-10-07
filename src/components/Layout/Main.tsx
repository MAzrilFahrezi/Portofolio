"use client";

import React from "react";
import Menu from "./Top/Menu";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { firstLoading } from "@/utils/atom";
import Logo from "./Top/Logo";
import ScrollIndicator from "../ScrollIndicator";
import ScrollToTop from "../ScrollToTop";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isVisible = useAtomValue(firstLoading);

  return (
    <AnimatePresence>
      {isVisible || (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween" }}
          className="min-h-dvh relative"
        >
          <ScrollIndicator />
          <div className="absolute top-0 left-0 px-6 py-4">
            <Logo />
          </div>
          <Menu />
          <div className="w-full">
            {children}
          </div>
          <Footer />
          <ScrollToTop />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

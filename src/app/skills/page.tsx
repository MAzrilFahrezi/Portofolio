import React from "react";
import type { Metadata } from "next";
import defaultSeoConfig from "@/data/seo.json";
import Skills from "./_components/Skills";

const pageMetadata = {
  title: "Skills | Muhammad Azril Fahrezi",
  description:
    "Discover Muhammad Azril Fahrezi's skills in JavaScript, TypeScript, Python, PHP, React,  and Next.js.",
  authors: { name: "Muhammad Azril Fahrezi", url: "" },
  keywords:
    "Muhammad Azril Fahrezi, Skills, Programming Languages, JavaScript, TypeScript, Python, PHP, React,  Next.js, Node.js, Django, Laravel, Frontend Developer, Full-stack Web Developer, Web Development, Sidoarjo, East Java, Indonesia",
};

export const metadata: Metadata = { ...defaultSeoConfig, ...pageMetadata };

export default function SkillsPage() {
  return <Skills />;
}

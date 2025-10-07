import React from "react";
import type { Metadata } from "next";
import About from "./_components/About";
import defaultSeoConfig from "@/data/seo.json";

const pageMetadata = {
  title: "About | Muhammad Azril Fahrezi | azrilfahrezi.com",
  description:
    "Muhammad Azril Fahrezi, a Full-stack Web Developer specializing in frontend development with Next.js.",
  authors: { name: "Muhammad Azril Fahrezi", url: "https://azrilfahrezi.com" },
  keywords:
    "Muhammad Azril Fahrezi, About Muhammad Azril Fahrezi, Full-stack Web Developer, Frontend Developer, Next.js, React.js, Web Development, Itsavirus, Sidoarjo, East Java, Indonesia, Mobile Development, React Native, Web Development Journey, Learning Resources, Self-learning, Web Development Services",
};

export const metadata: Metadata = { ...defaultSeoConfig, ...pageMetadata };

export default function AboutPage() {
  return <About />;
}

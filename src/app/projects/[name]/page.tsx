import React from "react";
import type { Metadata } from "next";
import ProjectDetail from "./_components/ProjectDetail";
import defaultSeoConfig from "@/data/seo.json";

const pageMetadata = {
  title: "Projects | Muhammad Azril Fahrezi | azrilfahrezi.com",
  description:
    "Explore web development projects by Muhammad Azril Fahrezi showcasing skills in React, Bootstrap, and more.",
  authors: { name: "Muhammad Azril Fahrezi", url: "https://azrilfahrezi.com" },
  keywords:
    "Muhammad Azril Fahrezi, Projects, Web Development Projects, Programming Projects, azrilfahrezi.com, IFEM 2022, Petrolida 2022, Crawlerhub, React, Bootstrap, SCSS, Laravel, AntDesign, Full-stack Web Developer, Frontend Developer, Indonesia",
};

export const metadata: Metadata = { ...defaultSeoConfig, ...pageMetadata };

export default function ProjectDetailPage() {
  return <ProjectDetail />;
}

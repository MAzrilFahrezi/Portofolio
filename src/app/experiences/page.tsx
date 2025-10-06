import React from "react";
import type { Metadata } from "next";
import defaultSeoConfig from "@/data/seo.json";
import Experiences from "./_components/Experiences";

const pageMetadata = {
  title: "Experience | Muhammad Azril Fahrezi | Portfolio",
  description:
    "Explore the professional experiences of Muhammad Azril Fahrezi, Software Engineer.",
  authors: { name: "Muhammad Azril Fahrezi", url: "https://portfolio.com" },
  keywords:
    "Muhammad Azril Fahrezi, Experiences, Professional Experience, Software Engineer, Web Developer, PT Orion Indo Jaya Ocean, Dinas Perumahan dan Pemukiman Kabupaten OKI, PT Lawang Agung Jaya, Freelance Web Developer, Palembang, Indonesia",
};

export const metadata: Metadata = { ...defaultSeoConfig, ...pageMetadata };

export default function ExperiencesPage() {
  return <Experiences />;
}

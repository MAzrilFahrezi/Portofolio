import React from "react";
import SinglePagePortfolio from "./_components/SinglePagePortfolio";
import { Metadata } from "next";
import defaultSeoConfig from "@/data/seo.json";

const pageMetadata = {
  title: "Azril Fahrezi",
  description:
    "Welcome to Azril Fahrezi's website.",
  authors: { name: "Azril Fahrezi", url: "https://dafkur.com" },
  keywords:
    "Azril Fahrezi, Home, Full-Stack Web Developer",
};

export const metadata: Metadata = {
  ...defaultSeoConfig,
  ...pageMetadata,
};

export default function Homepage() {
  return <SinglePagePortfolio />;
}

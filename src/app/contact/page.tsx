import React from "react";
import type { Metadata } from "next";
import Contact from "./_components/Contact";
import defaultSeoConfig from "@/data/seo.json";

const pageMetadata = {
  title: "Contact | Muhammad Azril Fahrezi | azrilfahrezi.com",
  description:
    "Contact Muhammad Azril Fahrezi, a Full-stack Web Developer. Connect via Instagram, WhatsApp, GitHub, or LinkedIn.",
  authors: { name: "Muhammad Azril Fahrezi", url: "https://azrilfahrezi.com" },
  keywords:
    "Muhammad Azril Fahrezi, Contact, Get in Touch, Full-stack Web Developer, Instagram, WhatsApp, GitHub, LinkedIn, Contact Form, Web Development, Collaboration, Sidoarjo, East Java, Indonesia",
};

export const metadata: Metadata = { ...defaultSeoConfig, ...pageMetadata };

export default function ContactPage() {
  return <Contact />;
}

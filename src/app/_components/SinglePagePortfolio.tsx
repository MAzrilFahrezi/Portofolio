"use client";

import React from "react";
import Home from "./Home";
import About from "../about/_components/About";
import Skills from "../skills/_components/Skills";
import Experiences from "../experiences/_components/Experiences";
import Projects from "../projects/_components/Projects";
import Contact from "../contact/_components/Contact";
import Comingsoon from "@/components/pages/Comingsoon";
import { useGtag } from "@/hooks/useGtag.hook";

export default function SinglePagePortfolio() {
  const { event } = useGtag();

  React.useEffect(() => {
    event("page_view", {
      page_name: "single_page_portfolio",
    });
  }, [event]);

  return (
    <div className="w-full">
      {/* Home Section */}
      <section id="home" className="min-h-screen relative">
        <Home />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen relative bg-gradient-to-b from-black via-gray-900 to-black">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen relative">
        <Skills />
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="min-h-screen relative bg-gradient-to-b from-black via-gray-900 to-black">
        <Experiences />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen relative">
        <Projects />
      </section>



      {/* Contact Section */}
      <section id="contact" className="min-h-screen relative">
        <Contact />
      </section>
    </div>
  );
}

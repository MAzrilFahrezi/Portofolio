import type { ExperienceDataType } from "@/types/Content";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useMobile } from "@/hooks/useMobile.hook";
import ExperienceItem from "./ExperienceItem";
import works from "@/data/works.json";

export default function WorkExperiences() {
  const { isMobile } = useMobile();

  return (
    <section className="container mx-auto snap-always snap-start max-w-[300px] sm:max-w-full sm:px-0">
      <div className="flex flex-col items-center justify-start sm:justify-center min-h-[calc(100vh)] pt-24 pb-32 sm:py-24">
        <div className="w-full">
          <TypeAnimation
            className="text-xl text-green-light text-center font-semibold"
            sequence={["Experiences"]}
            speed={60}
            cursor={false}
            wrapper="h1"
          />
          <div className="relative pt-2 flex flex-col items-center gap-4 mt-4">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isMobile ? "calc(100% + 30px)" : "100%" }}
              transition={{ type: "tween", duration: 1 }}
              className="content-none absolute w-[1px] rounded-sm bg-green-primary top-0 -left-4 sm:left-1/2 translate-x-[80%] sm:-translate-x-1/2"
            ></motion.div>
            {works.map((data: ExperienceDataType, key: number) => (
              <ExperienceItem key={key} index={key} {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

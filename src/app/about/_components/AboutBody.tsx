import Typography from "@/components/Typography";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function AboutBody() {
  return (
    <>
      <div className="flex flex-col gap-0 mb-4">
        <TypeAnimation
          className="text-green-secondary text-base"
          sequence={["About"]}
          speed={80}
          cursor={false}
          wrapper="h2"
        />
        <TypeAnimation
          className="text-green-light text-xl font-bold"
          sequence={[
            "Muhammad Azril Fahrezi",
            2000,
            "Fahrezi",
            1000,
            "Muhammad Azril Fahrezi",
            2000,
            "Fahrezi",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          wrapper="h1"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Typography.Typing
          sequence={[
            "Hello! I'm Muhammad Azril Fahrezi, a passionate Software Engineer with a deep interest in the digital world. I am a graduate of Informatics who spent my college years learning programming and data analysis.",
          ]}
          cursor={false}
          speed={90}
        />
        <Typography.Typing
          sequence={[
            200,
            "I'm accustomed to working with web development, which I believe is incredibly valuable in today's technology landscape. I have experience as both frontend and backend developer, and I'm comfortable working in both team environments and individual projects. Additionally, I have a solid foundation in networking and experience as an IT support specialist, which gives me a comprehensive understanding of technology infrastructure.",
          ]}
          cursor={false}
          speed={95}
        />
        {/* <Typography.Typing
          sequence={[
            400,
            "My expertise spans across full-stack web development with a strong foundation in modern technologies like React.js, Next.js, and various backend frameworks. I enjoy tackling complex problems and creating solutions that make a real impact.",
          ]}
          cursor={false}
          speed={95}
        />
        <Typography.Typing
          sequence={[
            600,
            "I have a passion for continuous learning and staying updated with the latest trends in software development. I believe in writing clean, efficient code and collaborating effectively with cross-functional teams.",
          ]}
          cursor={false}
          speed={90}
        /> */}
        <Typography.Typing
          sequence={[
            800,
            "This website serves as a showcase of my journey, projects, and technical skills in software engineering and web development.",
          ]}
          cursor={false}
          speed={90}
        />
      </div>
    </>
  );
}

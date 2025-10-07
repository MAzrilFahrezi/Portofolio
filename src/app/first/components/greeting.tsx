import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Greeting() {
  return (
    <div className="flex flex-col w-full">
      <div className="mb-6">
        <div className="flex items-baseline gap-2 flex-wrap">
          <TypeAnimation
            className="text-green-light text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-light via-green-secondary to-green-primary bg-clip-text text-transparent"
            sequence={[
              "Hello!", 
              1000, 
              "Hey!", 
              1000,
              "Hi!",
              1000,
              "Hello!",
              1000
            ]}
            speed={80}
            cursor={false}
            repeat={Infinity}
          />
          <span className="text-green-light text-4xl md:text-5xl font-bold">
            I'm Muhammad Azril Fahrezi
          </span>
        </div>
        <div className="mt-3">
          <p className="text-green-secondary text-xl md:text-2xl font-medium italic border-l-4 border-green-primary pl-4">
            Software Engineer
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="text-white text-lg leading-relaxed">
          I build software and analyze data to solve real problems. Always curious, always learning — I enjoy creating things that are useful, simple, and make sense.
        </p>
      </div>
    </div>
  );
}

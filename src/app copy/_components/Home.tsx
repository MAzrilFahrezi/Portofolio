"use client";

import React from "react";
// Import komponen About untuk digunakan di Home
import AboutBody from "../about/_components/AboutBody";
import AboutStatus from "../about/_components/AboutStatus";
import AboutPhoto from "../about/_components/AboutPhoto";
import AboutContribution from "../about/_components/AboutContribution";
import Greeting from "../first/components/greeting";
import Connection from "../first/components/connection";
import { useGtag } from "@/hooks/useGtag.hook";

export default function Home() {
  const { event } = useGtag();

  React.useEffect(() => {
    event("page_view", {
      page_name: "about", // Changed to about since this is now the about content
    });
  }, [event]);

  return (
    <section className="pt-[100px] pb-[80px] min-h-dvh container mx-auto flex justify-center items-center">
      <div className="container xl:max-w-[1024px] mx-auto h-full flex-1 px-6">
        <div className="grid grid-cols-7 gap-8">
          <div className="col-span-7 lg:col-span-5 order-2 lg:order-1 pb-8">
            <Greeting />
            <Connection />
            {/* <AboutStatus />
            <AboutContribution /> */}
          </div>
          <div className="col-span-7 lg:col-span-2 order-1 lg:order-2">
            <AboutPhoto />
          </div>
        </div>
      </div>
    </section>
  );
}

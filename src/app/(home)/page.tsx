"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Collab from "./_components/collab";
import Header from "./_components/header";
import Information from "./_components/information";
import Invest from "./_components/invest";
import Mission from "./_components/mission";
import Vision from "./_components/vision";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const informationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current || !informationRef.current) return;

    gsap.to(headerRef.current, {
      y: "-100%",
      ease: "power1.out",
      scrollTrigger: {
        trigger: informationRef.current,
        start: "top bottom",
        end: "top 10%",
        scrub: 3,
      },
    });
  }, []);

  return (
    <div className="relative">
      <div ref={headerRef} className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <div ref={informationRef} className="relative z-40 mt-[100vh]">
        <Information />
      </div>

      <Vision />
      <Mission />
      <Invest />
      <Collab />
    </div>
  );
};

export default HomePage;

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function LogoSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".logo-track", {
        x: "-50%",
        duration: 40,
        ease: "linear",
        repeat: -1,
      });
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  const sizes = [
    { width: 195, height: 85 },
    { width: 160, height: 70 },
    { width: 100, height: 80 },
    { width: 75, height: 80 },
    { width: 100, height: 80 },
  ];

  const originalLogos = [
    "/brand-1.svg",
    "/brand-2.svg",
    "/brand-3.svg",
    "/brand-4.svg",
    "/brand-5.svg",
  ];
  const hoverLogos = [
    "/brand-1-hover.svg",
    "/brand-2-hover.svg",
    "/brand-3-hover.svg",
    "/brand-4-hover.svg",
    "/brand-5-hover.svg",
  ];

  const [hoverStates, setHoverStates] = useState(Array(5).fill(false));

  const logos = Array.from({ length: 5 }).map((_, index) => (
    <div
      key={index}
      className="shrink-0"
      onMouseEnter={() => {
        const newState = [...hoverStates];
        newState[index] = true;
        setHoverStates(newState);
      }}
      onMouseLeave={() => {
        const newState = [...hoverStates];
        newState[index] = false;
        setHoverStates(newState);
      }}
    >
      <Image
        src={hoverStates[index] ? hoverLogos[index] : originalLogos[index]}
        width={sizes[index].width}
        height={sizes[index].height}
        alt={`collab-${index + 1}`}
        style={{
          width: sizes[index].width,
          height: sizes[index].height,
        }}
      />
    </div>
  ));

  return (
    <div ref={sliderRef} className="relative overflow-hidden w-full">
      <div className="logo-track flex gap-x-10 w-max">
        {logos}
        {logos}
        {logos}
        {logos}
      </div>
    </div>
  );
}

import { useEffect, useRef } from "react";
import { quicksand } from "@/config/font";
import { Dot } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen bg-no-repeat bg-center -mt-32 flex flex-col justify-center items-center"
      style={{ backgroundImage: "url(/images/vision.png)" }}
    >
      <h3 className="text-center text-[#165BB8] flex items-center justify-center font-bold">
        <Dot className="size-8" /> TẦM NHÌN <Dot className="size-8" />
      </h3>
      <p
        ref={textRef}
        className={`text-2xl md:text-[42px] leading-normal w-[324px] md:w-[961px] text-center ${quicksand.className} font-bold`}
      >
        Ami&M xây dựng{" "}
        <span className="text-transparent bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 bg-clip-text">
          hệ sinh thái đa ngành phát triển nhanh và bền vững
        </span>{" "}
        trên hành trình kiến tạo sự thịnh vượng đích thực!
      </p>
    </div>
  );
};

export default Vision;

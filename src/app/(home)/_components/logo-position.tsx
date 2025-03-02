import { cn } from "@/lib/utils";
import Image from "next/image";

const logoPositions = [
  {
    top: "top-1/4",
    left: "left-[-48px]",
    width: 82,
    height: 60,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
    bgImg: "/images/invest-2.png",
  },
  {
    top: "top-[48%]",
    left: "left-[-64px]",
    width: 82,
    height: 60,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
    bgImg: "/images/invest-3.png",
  },
  {
    top: "top-[70%]",
    left: "left-0",
    width: 82,
    height: 60,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
    bgImg: "/images/invest-4.png",
  },
  {
    top: "bottom-[-8px]",
    left: "left-[18%]",
    width: 82,
    height: 60,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
    bgImg: "/images/invest-5.png",
  },
  {
    top: "bottom-[-64px]",
    left: "left-[42%]",
    width: 82,
    height: 60,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
    bgImg: "/images/invest-6.png",
  },
];

const logoMobilePositions = [
  {
    top: "-top-10",
    left: "left-40",
    width: 74,
    height: 54,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
    bgImg: "/images/invest-2.png",
  },
  {
    top: "-top-10",
    left: "left-1/2",
    width: 74,
    height: 54,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
    bgImg: "/images/invest-3.png",
  },
  {
    top: "-top-10",
    left: "right-40",
    width: 74,
    height: 54,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
    bgImg: "/images/invest-4.png",
  },
  {
    top: "top-20",
    left: "left-56",
    width: 74,
    height: 54,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
    bgImg: "/images/invest-5.png",
  },
  {
    top: "top-20",
    left: "right-56",
    width: 74,
    height: 54,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
    bgImg: "/images/invest-6.png",
  },
];

export const LogoDesktop = ({
  onLogoClick,
  bgImg,
}: {
  onLogoClick: (image: string) => void;
  bgImg: string;
}) => {
  return (
    <div className="hidden md:block">
      {logoPositions.map((item, index) => (
        <div
          key={index}
          className={cn(
            `absolute group rounded-full w-[134px] h-[134px] ${item.top} ${item.left} 
            bg-white flex items-center justify-center transition-all duration-300 
            hover:bg-gradient-to-b hover:from-[#3E4089] hover:to-[#121458] shadow-2xl`,
            item.bgImg === bgImg &&
              "bg-gradient-to-b from-[#3E4089] to-[#121458]"
          )}
          onClick={() => onLogoClick(item.bgImg)}
        >
          <Image
            src={item.logo2}
            alt="logo"
            width={item.width}
            height={item.height}
            className={cn(
              "absolute transition-opacity duration-300 group-hover:opacity-0",
              item.bgImg === bgImg ? "opacity-0" : "opacity-100"
            )}
          />
          <Image
            src={item.logo1}
            alt="logo hover"
            width={item.width}
            height={item.height}
            className={cn(
              "absolute transition-opacity duration-300 group-hover:opacity-100",
              item.bgImg === bgImg ? "opacity-100" : "opacity-0"
            )}
          />
        </div>
      ))}
    </div>
  );
};

export const LogoMobile = ({
  onLogoClick,
  bgImg,
}: {
  onLogoClick: (image: string) => void;
  bgImg: string;
}) => {
  return (
    <div className="md:hidden">
      {logoMobilePositions.map((item, index) => (
        <div
          key={index}
          className={cn(
            `absolute group rounded-full w-[120px] h-[120px] ${item.top} ${item.left} 
            bg-white flex items-center justify-center transition-all duration-300 
            hover:bg-gradient-to-b hover:from-[#3E4089] hover:to-[#121458] shadow-2xl`,
            item.bgImg === bgImg &&
              "bg-gradient-to-b from-[#3E4089] to-[#121458]",
            item.left == "left-1/2" ? "-translate-x-1/2" : ""
          )}
          onClick={() => onLogoClick(item.bgImg)}
        >
          <Image
            src={item.logo2}
            alt="logo"
            width={item.width}
            height={item.height}
            className={cn(
              "absolute transition-opacity duration-300 ",
              item.bgImg === bgImg ? "opacity-0" : "opacity-100"
            )}
          />
          <Image
            src={item.logo1}
            alt="logo hover"
            width={item.width}
            height={item.height}
            className={cn(
              "absolute transition-opacity duration-300",
              item.bgImg === bgImg ? "opacity-100" : "opacity-0"
            )}
          />
        </div>
      ))}
    </div>
  );
};

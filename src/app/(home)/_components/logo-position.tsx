import { cn } from "@/lib/utils";
import Image from "next/image";

const logoPositions = [
  {
    top: "top-1/4",
    left: "-left-12",
    width: 82,
    height: 60,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
  },
  {
    top: "top-[48%]",
    left: "-left-16",
    width: 82,
    height: 60,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
  },
  {
    top: "top-[70%]",
    left: "left-0",
    width: 82,
    height: 60,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
  },
  {
    top: "-bottom-2",
    left: "left-[18%]",
    width: 82,
    height: 60,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
  },
  {
    top: "-bottom-16",
    left: "left-[42%]",
    width: 82,
    height: 60,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
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
  },
  {
    top: "-top-10",
    left: "left-1/2",
    width: 74,
    height: 54,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
  },
  {
    top: "-top-10",
    left: "right-40",
    width: 74,
    height: 54,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
  },
  {
    top: "top-20",
    left: "left-56",
    width: 74,
    height: 54,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
  },
  {
    top: "top-20",
    left: "right-56",
    width: 74,
    height: 54,
    logo1: "/logo-1.svg",
    logo2: "/logo-2.svg",
  },
];

export const LogoDesktop = () => {
  return (
    <div className="hidden md:block">
      {logoPositions.map((item, index) => (
        <div
          key={index}
          className={`absolute group rounded-full w-[134px] h-[134px] ${item.top} ${item.left} bg-white flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-b hover:from-[#3E4089] hover:to-[#121458] shadow-2xl`}
        >
          <Image
            src={item.logo2}
            alt="logo"
            width={item.width}
            height={item.height}
            className="absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0"
          />
          <Image
            src={item.logo1}
            alt="logo hover"
            width={item.width}
            height={item.height}
            className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
};

export const LogoMobile = () => {
  return (
    <div className="md:hidden">
      {logoMobilePositions.map((item, index) => (
        <div
          key={index}
          className={cn(
            `absolute group rounded-full w-[120px] h-[120px] ${item.top} ${item.left} bg-white flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-b hover:from-[#3E4089] hover:to-[#121458] shadow-2xl`,
            item.left == "left-1/2" ? "-translate-x-1/2" : ""
          )}
        >
          <Image
            src={item.logo2}
            alt="logo"
            width={item.width}
            height={item.height}
            className="absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0"
          />
          <Image
            src={item.logo1}
            alt="logo hover"
            width={item.width}
            height={item.height}
            className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
};

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { inter } from "@/config/font";
import { ArrowRightIcon, Dot } from "lucide-react";
import Image from "next/image";
import { LogoDesktop, LogoMobile } from "./logo-position";

const Invest = () => {
  const statsData = [
    {
      value: "686",
      unit: "tỷ",
      description: "Tổng tài sản và Vốn chủ sở hữu",
      imageSrc: "/hand.svg",
    },
    {
      value: "686",
      unit: "tỷ",
      description: "Tổng tài sản và Vốn chủ sở hữu",
      imageSrc: "/hand.svg",
    },
    {
      value: "686",
      unit: "tỷ",
      description: "Tổng tài sản và Vốn chủ sở hữu",
      imageSrc: "/hand.svg",
    },
    {
      value: "686",
      unit: "tỷ",
      description: "Tổng tài sản và Vốn chủ sở hữu",
      imageSrc: "/hand.svg",
    },
    {
      value: "686",
      unit: "tỷ",
      description: "Tổng tài sản và Vốn chủ sở hữu",
      imageSrc: "/hand.svg",
    },
  ];

  return (
    <>
      <div className="bg-none md:bg-[url(/images/invest.png)] h-[1200px] md:h-[851px] bg-no-repeat bg-center bg-cover relative px-3 md:px-[102px] overflow-hidden">
        <div className="pt-[80px] flex flex-col gap-y-3">
          <h3
            className={`text-sm font-extrabold md:text-base md:font-semibold text-[#165BB8] flex items-center -ml-2 ${inter.className}`}
          >
            <Dot className="size-8" />
            LĨNH VỰC ĐẦU TƯ
          </h3>
          <p className="text-transparent bg-gradient-to-r from-blue-500 from-10% to-[#FF0D39] to-90% bg-clip-text text-2xl md:text-[32px] font-bold w-[336px] md:w-[564px]">
            Ami&M là đối tác tư vấn - đầu tư bền vững, phát triển dịch vụ cao
            cấp và nâng tầm giáo dục trải nghiệm.
          </p>
          <p
            className={`${inter.className} text-[#333] text-sm font-medium md:text-lg w-[286px] md:w-[493px]`}
          >
            Với hệ sinh thái tối ưu, Ami&M truyền cảm hứng xây dựng sự thịnh
            vượng đích thực cho những Người đồng hành và tạo lập di sản xứng tầm
            cho thế hệ tương lai.
          </p>
        </div>
        <div className="md:block hidden">
          <Image
            src={"/circle-1.svg"}
            width={556}
            height={556}
            alt="circle"
            className="absolute bottom-0 left-14"
          />
          <Image
            src={"/images/invest-1.png"}
            width={723}
            height={482}
            alt="circle"
            className="absolute bottom-0 left-0"
          />
        </div>
        <div
          className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2  
            md:-top-[148px] md:-right-[128px] md:left-auto md:translate-x-0 md:translate-y-0  
            md:w-[872px] md:h-[872px] 
            p-6 rounded-full bg-gradient-to-b from-[#2F2E79] from-30% to-[#A61220]"
        >
          <div className="absolute bg-[url(/images/invest-2.png)] inset-0 bg-cover bg-center rounded-full opacity-35"></div>

          <div
            className={`relative h-[656px] w-[656px] md:w-full md:h-full flex items-center justify-end pb-16 flex-col gap-y-7 text-white ${inter.className}`}
          >
            <Image
              src="/logo-1.svg"
              alt="logo"
              width={215}
              height={156}
              className="-mr-24 hidden md:block"
            />
            <div className="text-center md:text-end uppercase">
              <p className="md:text-lg font-medium mr-1 md:mb-0 mb-3">
                Cung cấp dịch vụ{" "}
              </p>
              <p className="text-lg md:text-xl font-extrabold">
                Quản lý & Khai thác Tài sản, <br /> Chuỗi cơ sở lưu trú.
              </p>
            </div>
            <Button
              className="border border-white py-[14px] px-9 rounded-full h-auto md:-mr-28"
              variant={"ghost"}
            >
              Tìm hiểu thêm <ArrowRightIcon />
            </Button>
          </div>
          <LogoDesktop />
          <LogoMobile />
        </div>
      </div>
      <div className="mt-14 pl-3 md:pl-[102px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[152px] gap-y-8">
          <div className="flex flex-col gap-y-3">
            <h3
              className={`font-bold md:font-semibold text-sm md:text-base text-[#165BB8] flex items-center -ml-2 ${inter.className}`}
            >
              <Dot className="size-8 -mr-1" />
              TỪNG BƯỚC PHÁT TRIỂN
            </h3>
            <p className="text-transparent bg-gradient-to-r from-[#328AE2] from-10% to-[#FF0D39] to-60% bg-clip-text text-[32px] md:text-[88px] font-bold">
              Dấu ấn Ami&M
            </p>
            <p
              className={`text-sm md:text-lg w-[313px] md:w-[548px] ${inter.className} font-medium`}
            >
              Những con số chỉ là một phần của câu chuyện, ý nghĩa thực sự là
              những dấu ấn sâu đậm về sự đổi mới, trách nhiệm xã hội và sự tin
              cậy từ những Người đồng hành.
            </p>
          </div>
          <div className="flex flex-col">
            {statsData.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-x-4 md:gap-x-[62px] pl-3 md:pl-0 py-[38px] md:border-l-[1px] md:border-[#E5E5E5]">
                  <div className="p-5 md:w-[170px] md:h-[170px] bg-[#FBFBFB] rounded-full flex items-center justify-center">
                    <Image
                      src={item.imageSrc}
                      width={86}
                      height={86}
                      alt="hand"
                      className="w-12 h-12 md:w-[86px] md:h-[86px]"
                    />
                  </div>
                  <div className={`flex flex-col ${inter.className}`}>
                    <p className="text-[#2A2B6B] font-extrabold text-[32px] md:text-[68px] text-transparent bg-gradient-to-r from-blue-500 to-[#FF0D39] bg-clip-text">
                      {item.value}{" "}
                      <span className="font-semibold">{item.unit}</span>
                    </p>
                    <p
                      className={`font-semibold text-[#646464] text-sm md:text-xl`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
                <Separator className="w-full hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Invest;

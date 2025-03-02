"use client";

import { CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Dot } from "lucide-react";
import { inter } from "@/config/font";
import { useEffect, useState } from "react";

export function CarouselDemo() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrentIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className={`${inter.className} md:hidden pb-32`}>
      <h3 className="text-sm font-extrabold md:text-base md:font-semibold text-white flex items-center ml-4 mb-14">
        <Dot className="size-8" />
        HỢP TÁC VỮNG BỀN
      </h3>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        setApi={setApi}
        className="w-full relative"
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem
              key={index}
              className={`basis-3/4 shrink-0 transition-opacity duration-300 ${
                index === currentIndex ? "opacity-100" : "opacity-50"
              }`}
            >
              <div className="p-1">
                <CardContent className="flex flex-col text-white">
                  <Image
                    src="/images/collab-select.png"
                    width={125}
                    height={125}
                    alt="collab-1"
                  />
                  <p className="mt-4 text-sm w-[270px]">
                    Chúng tôi thực sự hứng khởi khi đồng hành cùng Ami&M bởi ở
                    đây có một đội ngũ nhân sự không chỉ giàu kinh nghiệm trong
                    lĩnh vực ngân hàng - tài chính mà quan trọng hơn đầy nhiệt
                    tâm với mong muốn đóng góp vào sự phát triển chung của quá
                    trình giáo dục định hướng thế hệ trẻ.
                  </p>
                  <div className="mt-6">
                    <p className="text-xs font-bold">TS. Đinh Thanh Vân</p>
                    <p className="w-[194px] text-[10px] mt-1 text-[#F0FAFF87]/50 font-semibold">
                      Phó trưởng Khoa Ngân hàng - Tài chính, ĐH Kinh tế, GHQG Hà
                      Nội
                    </p>
                    <div className="flex items-center -mt-2 -ml-3">
                      <Dot className="size-12 text-[#996598] -mr-6 -ml-2" />
                      <Dot className="size-8 text-[#D24D70] -mr-3" />
                      <Dot className="size-4 text-[#ED1B2F] -mr-2" />
                    </div>
                  </div>
                </CardContent>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-[432px] bg-transparent border-none text-white left-4" />
        <CarouselNext className="absolute top-[432px] bg-transparent border-none text-white left-12" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground"></div>
    </div>
  );
}

import { inter, quicksand } from "@/config/font";
import { Dot } from "lucide-react";
import Image from "next/image";
import React from "react";

const missionTexts = [
  {
    title: "Với cán bộ nhân viên",
    description:
      "Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát triển, khẳng định giá trị bản thân",
    image: "/images/mission-0.png",
  },
  {
    title: "Với khách hàng",
    description:
      "Cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang đến cho khách hàng những trải nghiệm tốt nhất",
    image: "/images/mission-1.png",
  },
  {
    title: "Với đối tác",
    description:
      "Tin tưởng và muốn hợp tác dài lâu trên nền tảng của sự phát triển bền vững và hướng tới những giá trị tốt đẹp",
    image: "/images/mission-2.png",
  },
  {
    title: "Với cộng đồng",
    description:
      "Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, đóng góp tích cực cho các hoạt động hướng về cộng đồng",
    image: "/images/mission-3.png",
  },
];

const Mission = () => {
  return (
    <section className="relative overflow-hidden bg-cover bg-top bg-[url('/section.svg')]">
      <div className="container mx-auto flex flex-col items-center py-[70px] md:py-[178px] relative z-10">
        <h3
          className={`flex items-center uppercase ${inter.className} text-[#165BB8] font-semibold`}
        >
          <Dot className="size-8" />
          Sứ Mệnh
          <Dot className="size-8" />
        </h3>
        <p
          className="text-2xl md:text-[40px] font-bold text-center bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 mt-4 leading-normal"
        >
          Mang lại cuộc sống tốt đẹp hơn <br /> cho những người đồng hành
        </p>

        <div className="mt-[88px] md:grid hidden gap-y-8 max-w-6xl w-full">
          {missionTexts.map((item, index) => (
            <div
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
              key={index}
            >
              <div className="flex items-center gap-x-8">
                <span className={`${inter.className} text-[#2A2B6B]`}>
                  {`0${index + 1}/04`}
                </span>
                <div className="flex flex-col gap-y-4">
                  <Image
                    src="/shake-hand.svg"
                    width={92}
                    height={88}
                    alt="handshake icon"
                  />
                  <div className="max-w-[384px]">
                    <h4
                      className={`${quicksand.className} uppercase text-[26px] font-bold text-[#165BB8]`}
                    >
                      {item.title}
                    </h4>
                    <p className={`${inter.className} text-[#011942] text-lg`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src={item.image}
                alt={`${item.title} illustration`}
                width={600}
                height={400}
                className="rounded-3xl w-full h-auto"
              />
            </div>
          ))}
        </div>
        <div className="mt-[50px] md:mt-[88px] px-3 grid md:hidden gap-y-8 max-w-6xl w-full">
          <Image
            src={"/images/mission-0.png"}
            alt={`illustration`}
            width={600}
            height={400}
            className="rounded-3xl w-full h-auto"
          />
          {missionTexts.map((item, index) => (
            <div
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
              key={index}
            >
              <div className="flex flex-col  gap-x-8 border rounded-lg pl-6 pr-4 py-6">
                <div className="flex justify-between gap-y-4 w-full">
                  <Image
                    src="/shake-hand.svg"
                    width={92}
                    height={88}
                    alt="handshake icon"
                  />
                  <span className={`${inter.className} text-[#2A2B6B]`}>
                    {`0${index + 1}/04`}
                  </span>
                </div>
                <div className="max-w-[307px] float-left">
                  <h4
                    className={`uppercase text-xl my-3 font-bold text-[#165BB8]`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`${inter.className} text-[#011942] text-sm font-medium`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[-15%] left-0 -translate-x-1/2">
        <Image
          src="/images/circle.png"
          width={600}
          height={600}
          alt="decorative circle"
        />
      </div>
      <div className="absolute bottom-0 w-full h-[426px] bg-gradient-to-t from-[#2F2E791C] to-transparent" />
    </section>
  );
};

export default Mission;

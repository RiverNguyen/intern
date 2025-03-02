"use client";

import { inter } from "@/config/font";
import { Dot, QuoteIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import LogoSlider from "./logos";
import { CarouselDemo } from "./slide";

const Collab = () => {
  const [selectedCollab, setSelectedCollab] = useState(0);

  const collab = [
    {
      word: "WATG rất vui khi được làm việc với đội ngũ của Ami&M trong dự án độc đáo và đặc biệt này. Chúng tôi hy vọng sẽ được tiếp tục đồng hành cùng Ami&M trên hành trình hiện thực hóa tầm nhìn cũng như hỗ trợ Ami&M ở những bước triển khai dự án tiếp theo.",
      name: "Ông Richard Moore",
      title: "Nguyên Giám đốc điều hành khu vực Châu Á - Thái Bình Dương, WATG",
    },
    {
      word: "Trải qua một năm đồng hành cùng Ami&M trong dự án chuyển đổi số, chúng tôi thực sự ấn tượng với phong cách làm việc chuyên nghiệp và những câu chuyện đầy cảm hứng. Không chỉ tập trung tìm kiếm giải pháp, Ami&M luôn thật tâm thấu hiểu và sẵn sàng chia sẻ với những thách thức của Đối tác.",
      name: "Bà Nguyễn Loan Anh",
      title: "Trưởng Ban Truyền thông, Base.vn",
    },
    {
      word: "	Hành trình hợp tác của Ami&M và RMA hướng tới việc phát triển và làm mới thương hiệu Ami&M với chiến lược hình ảnh mới mẻ và bám sát tinh thần của Tập đoàn ở thời điểm hiện tại. Trong quá trình làm việc, tôi thấy được tinh thần kiên định và chuyên nghiệp của đội ngũ Ami&M.",
      name: "Ông Richard Moore",
      title: "Chủ tịch Richard Moore Associates",
    },
  ];

  return (
    <>
      <div className="relative">
        <div className="relative">
          <Image
            src="/images/hug.png"
            width={1920}
            height={900}
            alt="hug"
            className="h-[600px] md:h-[900px] w-full object-cover object-[60%] md:object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-[#102A4D]" />

          <blockquote
            className={`md:${inter.className} leading-normal absolute bottom-0 left-1/2 w-[290px] md:w-[1920px] transform -translate-x-1/2 -translate-y-1/2 text-center text-xl md:text-[40px] font-bold text-[#F9F9F9]`}
          >
            “Tình bằng hữu, sự chính trực và tinh thần{" "}
            <br className="hidden md:block" />
            tự nâng tầm hun đúc nên tinh thần của một tổ chức không ngừng{" "}
            <br className="hidden md:block" />
            <span className="text-[#F9F9F9]/70">
              học tập để kiến tạo giá trị.”
            </span>
          </blockquote>
        </div>

        <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#102A4D] via-[#191868] to-[#191868] pl-3 md:pl-[300px] pt-16 md:pt-[170px]">
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={`${inter.className} flex flex-col gap-y-6 font-semibold`}
            >
              <h3 className="flex items-center text-white/80">
                <Dot className="size-8 -ml-2" />
                HỢP TÁC VỮNG BỀN
              </h3>
              <p className="max-w-[695px] text-[28px] text-white">
                {collab[selectedCollab].word}
              </p>
              <div>
                <p className="text-[22px] text-white">
                  {collab[selectedCollab].name}
                </p>
                <p className="flex items-center text-sm text-white">
                  <Dot className="size-4 text-[#8DC63F] -ml-2" />
                  <Dot className="size-8 text-[#35AA94] -ml-3" />
                  <Dot className="size-12 text-[#0088CB] -ml-6 -mr-2" />
                  {collab[selectedCollab].title}
                  <Dot className="size-12 text-[#996598] -mr-6 -ml-2" />
                  <Dot className="size-8 text-[#D24D70] -mr-3" />
                  <Dot className="size-4 text-[#ED1B2F] -mr-2" />
                </p>
              </div>

              <div className="flex gap-8 z-50">
                {[0, 1, 2].map((index) => (
                  <Image
                    key={index}
                    src={`/images/select-${index + 1}.png`}
                    width={80}
                    height={80}
                    alt={`collab-${index}`}
                    className={`cursor-pointer rounded-full w-[94px] h-[94px] ${
                      selectedCollab === index
                        ? "border-2 scale-125 border-white"
                        : ""
                    }`}
                    onClick={() => setSelectedCollab(index)}
                  />
                ))}
              </div>
            </div>

            <div className="relative h-[720px] bottom-[50px] z-20 right-[20%]">
              <Image
                src={`/images/per-${selectedCollab + 1}.png`}
                alt="human collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <CarouselDemo />

          <div className="absolute left-0 top-44">
            <Image
              src="/vector.svg"
              alt="vector decoration"
              width={1365}
              height={862}
              className="object-cover"
            />
          </div>
          <div className="absolute top-24 right-52 md:top-[18%] md:right-[20%] z-10 flex h-14 w-14 md:h-[209px] md:w-[209px] items-center justify-center rounded-full bg-gradient-to-r from-[rgba(41,38,100,0)] from-[-141.84%] via-[#6B8ED2] via-[-45.72%] to-[#ED1B2F] to-[94.76%] text-white">
            <QuoteIcon className="md:size-16" />
          </div>
        </div>
      </div>
      <div
        className="relative bottom-16 md:bottom-36 h-[190px] min-w-full md:h-[240px] overflow-hidden -ml-12"
        style={{
          backgroundImage: "url(/union.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h3
          className={`${inter.className} absolute left-1/2 -translate-x-1/4 md:translate-x-0 md:left-60 top-2 md:top-4 flex items-center font-semibold uppercase text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text z-30`}
        >
          <Dot className="size-8 -ml-2 text-blue-500" />
          Đối tác tiêu biểu
          <Dot className="size-8 -mr-2 text-blue-500 block md:hidden" />
        </h3>
        <p className="absolute left-[26%] md:translate-x-0 md:left-60 top-10 text-2xl md:text-[26px] font-bold text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text">
          ĐỒNG HÀNH CÙNG AMI&M
        </p>
        <div className="flex">
          <div className="flex gap-x-4 md:gap-x-[74px] absolute right-0 top-20 md:top-32 z-30 items-center w-full">
            <LogoSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collab;

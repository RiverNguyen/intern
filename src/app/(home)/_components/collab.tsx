import { inter } from "@/config/font";
import { Dot, QuoteIcon } from "lucide-react";
import Image from "next/image";
import { CarouselDemo } from "./slide";

const Collab = () => {
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
            className={`md:${inter.className} absolute bottom-0 left-1/2 w-[290px] md:w-[1920px] transform -translate-x-1/2 -translate-y-1/2 text-center text-xl md:text-[40px] font-bold text-[#F9F9F9]`}
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
                Chúng tôi thực sự hứng khởi khi đồng hành cùng Ami&M bởi ở đây
                có một đội ngũ nhân sự không chỉ giàu kinh nghiệm trong lĩnh vực
                ngân hàng - tài chính mà quan trọng hơn đầy nhiệt tâm với mong
                muốn đóng góp vào sự phát triển chung của quá trình giáo dục
                định hướng thế hệ trẻ.
              </p>
              <div>
                <p className="text-[22px] text-white">TS. Đinh Thanh Vân</p>
                <p className="flex items-center text-sm text-white">
                  <Dot className="size-4 text-[#8DC63F] -ml-2" />
                  <Dot className="size-8 text-[#35AA94] -ml-3" />
                  <Dot className="size-12 text-[#0088CB] -ml-6 -mr-2" />
                  Phó trưởng Khoa Ngân hàng - Tài chính, ĐH Kinh tế, ĐHQGHN
                  <Dot className="size-12 text-[#996598] -mr-6 -ml-2" />
                  <Dot className="size-8 text-[#D24D70] -mr-3" />
                  <Dot className="size-4 text-[#ED1B2F] -mr-2" />
                </p>
              </div>
              <div className="flex gap-2 z-50">
                <Image
                  src="/images/collab-select.png"
                  width={94}
                  height={94}
                  alt="collab-1"
                />
                <Image
                  src="/images/collab-1.png"
                  width={95}
                  height={70}
                  alt="collab-2"
                />
                <Image
                  src="/images/collab-2.png"
                  width={96}
                  height={70}
                  alt="collab-3"
                />
              </div>
            </div>

            <div className="relative h-[720px] bottom-[50px] z-20 right-[20%]">
              <Image
                src="/images/human-collab.png"
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
        <div className="flex gap-[74px] absolute left-0 top-32 z-30 items-center">
          {Array.from({ length: 5 }).map((_, index) => {
            const sizes = [
              { width: 195, height: 85 },
              { width: 160, height: 70 },
              { width: 100, height: 80 },
              { width: 75, height: 80 },
              { width: 100, height: 80 },
            ];

            return (
              <div key={index}>
                <Image
                  src={`/brand-${index + 1}.svg`}
                  width={sizes[index].width}
                  height={sizes[index].height}
                  alt={`collab-${index + 1}`}
                  style={{
                    width: sizes[index].width,
                    height: sizes[index].height,
                  }}
                />
              </div>
            );
          })}
          {Array.from({ length: 5 }).map((_, index) => {
            const sizes = [
              { width: 195, height: 85 },
              { width: 160, height: 70 },
              { width: 100, height: 80 },
              { width: 75, height: 80 },
              { width: 100, height: 80 },
            ];

            return (
              <div key={index}>
                <Image
                  src={`/brand-${index + 1}.svg`}
                  width={sizes[index].width}
                  height={sizes[index].height}
                  alt={`collab-${index + 1}`}
                  style={{
                    width: sizes[index].width,
                    height: sizes[index].height,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Collab;

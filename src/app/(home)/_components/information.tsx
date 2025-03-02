import { Button } from "@/components/ui/button";
import { inter, quicksand } from "@/config/font";
import { cn } from "@/lib/utils";
import { ArrowRight, Dot } from "lucide-react";
import Image from "next/image";

const Information = () => {
  return (
    <div
      className={`h-[1100px] md:h-screen w-full relative ${inter.className}
      bg-[url('/images/hand-1.png')] bg-cover bg-center
      md:bg-[url('/images/hand.png'),_url('/images/background.png')] md:bg-cover md:bg-center`}
    >
      <div className="w-60 h-12 bg-white absolute bottom-0 right-0 md:block hidden" />
      <div className="container mx-auto text-white h-full flex flex-col pt-12 md:pt-0 md:justify-center items-center md:items-start relative z-10">
        <p className="flex font-semibold items-center">
          <Dot className="size-8 -mx-2" />
          CÔNG TY CỔ PHẦN TẬP ĐOÀN AMI&M VIỆT NAM
        </p>
        <h3
          className={`uppercase text-[44px] md:text-6xl font-bold leading-[120%] mt-3 ${quicksand.className}`}
        >
          Khởi nguồn từ <br /> Tình bằng hữu
        </h3>
        <div className="flex flex-col gap-y-8 my-12">
          <p className="w-[334px] md:w-[512px] text-sm md:text-lg">
            Bắt đầu từ năm 2005 – thời điểm những người bạn cùng chung chí hướng
            chia sẻ những ý tưởng đầu tiên về AMITICAS, cùng nhau nỗ lực không
            ngừng nghỉ để đến 9.9.2019, Ami&M chính thức đi vào hoạt động.
          </p>
          <p className="w-[334px] md:w-[582px] text-sm md:text-lg">
            Tại Ami&M, chúng tôi được sống và làm việc hết mình!
            <br className="md:block hidden" /> {""}
            Được gắn bó và kết nối cũng những người bằng hữu mà chúng tôi gọi là
            ANH EM - AM, được bứt phá các giới hạn bản thân để phát triển, thoả
            sức thử thách và gắn bó nhiệt thành để cùng nhau kiến tạo các giá
            trị mà mình tin tưởng.
          </p>
          <Button
            variant="ghost"
            className={cn(
              "uppercase rounded-full bg-[#2F2E79] px-8 py-4 h-auto w-auto flex items-center gap-x-2 font-bold",
              "hover:opacity-70 hover:bg-[#252468] hover:text-white mr-auto"
            )}
          >
            Hành trình của Ami&M <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
      <div className="absolute left-0 w-full">
        <Image
          src={"/linear.svg"}
          alt="linear"
          width={1920}
          height={1080}
          className="object-cover w-full absolute -bottom-6 md:-bottom-[104px]"
        />
        <Image
          src={"/linear-1.svg"}
          alt="linear"
          width={1920}
          height={1080}
          className="object-cover w-full absolute -bottom-8 md:-bottom-[128px]"
        />
      </div>
    </div>
  );
};

export default Information;

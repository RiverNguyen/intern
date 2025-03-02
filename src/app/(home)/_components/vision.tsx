import { quicksand } from "@/config/font";
import { Dot } from "lucide-react";

const Vision = () => {
  return (
    <div
      className="h-screen bg-no-repeat bg-center -mt-32 flex flex-col justify-center items-center"
      style={{ backgroundImage: "url(/images/vision.png)" }}
    >
      <h3 className="text-center text-[#165BB8] flex items-center justify-center font-bold">
        <Dot className="size-8" />
        TẦM NHÌN
        <Dot className="size-8" />
      </h3>
      <p
        className={`text-2xl md:text-[42px] w-[324px] md:w-[961px] text-center ${quicksand.className} font-bold`}
      >
        Ami&M xây dựng {""}
        <span className="text-transparent bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 bg-clip-text">
          hệ sinh thái đa ngành phát triển nhanh và bền vững
        </span>{" "}
        trên hành trình kiến tạo sự thịnh vượng đích thực!
      </p>
    </div>
  );
};

export default Vision;

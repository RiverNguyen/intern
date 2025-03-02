"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SwitchLanguage } from "@/components/ui/switch-language";
import { MenuIcon, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 left-0 w-full bg-neutral-300 bg-opacity-80 shadow-lg z-50 flex items-center justify-between"
          : "bg-[url(/images/banner.png)] bg-cover bg-[-900px_center] bg-no-repeat md:bg-center h-screen w-full"
      }`}
    >
      <div
        className={`container mx-auto flex justify-between md:px-0 px-[18px] ${
          isScrolled ? "pt-3" : "pt-6"
        }`}
      >
        <div className="logo">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={221}
              height={117}
              alt="logo"
              className={`w-[72px] h-[37px] ${
                isScrolled
                  ? "`w-[90px] h-[60px] pb-3"
                  : "md:w-[221px] md:h-[117px]"
              }`}
            />
          </Link>
        </div>
        <div>
          <SwitchLanguage className="mr-3" />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant={"ghost"}
                className="bg-[#231F2021] text-white uppercase font-bold px-[31px] py-[14px] h-auto rounded-full"
              >
                Menu
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent className="rounded-tl-lg rounded-bl-lg md:w-auto w-full">
              <SheetTitle className="font-bold uppercase text-xl text-center">
                <Image src={"/logo.svg"} width={100} height={30} alt="logo" />
              </SheetTitle>
              <div className="mt-6 flow-root">
                <div className="-my-6">
                  <div className="space-y-2 py-6 ">
                    <div className="flex items-center border px-3.5 py-2 rounded-lg">
                      <Search strokeWidth={1} />
                      <input
                        id="search"
                        name="search"
                        type="text"
                        className="w-auto flex-auto rounded-md border-0 pl-2 caption-1 sm:leading-6 focus:outline-none"
                        placeholder={"Tìm kiếm..."}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href={"/"}
                  className="hover:opacity-70 font-semibold text-lg"
                >
                  Trang Chủ
                </Link>
                <Separator className="my-6" />
                <Link
                  href={"/"}
                  className="hover:opacity-70 font-semibold text-lg"
                >
                  Bài Viết
                </Link>
                <Separator className="my-6" />
                <Link
                  href={"/"}
                  className="hover:opacity-70 font-semibold text-lg"
                >
                  Liên Hệ
                </Link>
                <Separator className="my-6" />
                <Link
                  href={"/"}
                  className="hover:opacity-70 font-semibold text-lg"
                >
                  Về Chúng Tôi
                </Link>
                <Separator className="my-6" />
              </div>
              <div className="">
                <Button
                  type="button"
                  className="text-white uppercase font-bold h-auto rounded-full w-full py-[14px]"
                >
                  Đăng Nhập
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

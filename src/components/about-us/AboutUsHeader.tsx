import React from "react";
import Image from "next/image";
import headerImg from "@/assets/images/home/headerImg.jpg";

const AboutUsHeader = () => {
  return (
    <main className="flex w-full h-screen relative">
      {/* overlay */}
      <div className="absolute inset-0 w-full h-full pt-[8rem] px-padXMobile lg:px-padX md:flex gap-10">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full mt-[3.5px]">
            <h1 className="text-center text-5xl xl:text-[5.5rem] xl:leading-[100px]">
              Your digital success starts here.{" "}
              <span className="text-6xl xl:text-[6rem] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Logyy
              </span>{" "}
              Mastering Marketing, Web Development and
              <span className="text-6xl font-bold xl:text-[6rem] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                UI|UX
              </span>{" "}
              Design.
            </h1>
            <p className="text-center mt-16 md:px-10">
              Welcome to Logyy, where creativity meets strategy to elevate your
              brand to new heights. As a dynamic marketing agency, we specialize
              in a trifecta of services - Marketing, Web Development and UI | UX
              Design. At Logyy, we don`t just provide services, we forge
              partnerships. Let us be your catalyst for success in the digital
              landscape.
            </p>
          </div>
        </div>
      </div>
      {/* background */}
      <div className="w-full -full">
        <Image alt="Header image" src={headerImg} className="h-full w-full" />
      </div>
    </main>
  );
};

export default AboutUsHeader;

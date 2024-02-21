import Image from "next/image";
import headerImg from "@/assets/images/home/headerImg.jpg";
import Button from "@/components/general/Button";

import headerImg1 from "@/assets/images/home/headerImg1.jpg";
import headerImg2 from "@/assets/images/home/headerImg2.jpg";
import headerImg3 from "@/assets/images/home/headerImg3.jpg";
import headerImg4 from "@/assets/images/home/headerImg4.jpg";

export default function HomeHeader() {
  return (
    <section className="w-full h-[160vh] md:h-screen relative ">
      {/* Layer */}
      <div className="absolute inset-0 w-full h-full px-padXMobile lg:px-padX pt-[30%] md:pt-[20%]  md:flex items-start xl:items-start xl:justify-between gap-10">
        {/* Text */}
        <div className="w-full md:w-1/2 lg:w-full ">
          <h1 className="text-5xl xl:text-[5.5rem]">
            Upgrade your
            <br />{" "}
            <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent font-bold">
              Tech Stack
            </span>{" "}
            with{" "}
            <span className="font-bold bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent">
              us
            </span>
            !
          </h1>
          <p className="w-full  mt-4 ">
            Revamp Your Digital Presence with Expert UX/UI Design, Web
            Development, Headless E-commerce, and Platforms like WordPress,
            Webflow, Shopify, Next.js, and React.
          </p>
          <div className="mt-8 flex gap-8">
            <Button text="Get in touch" />
            <Button text="About us" textColor="#584e6b" bgColor="transparent" />
          </div>
        </div>
        {/* Images */}
        <div className="mt-20 lg:mt-0 relative h-[20rem] lg:h-[25rem] lg:w-full xl:h-[40rem] w-[20rem] xl:w-full  mx-auto xl:mx-0 ">
          <Image
            alt="Loggy - your place to build your influence"
            src={headerImg1}
            className="w-[7rem] lg:w-[10rem]  xl:w-[18rem] xl:h-auto rounded-xl  absolute top-0"
          />
          <Image
            alt="Loggy - your place to build your influence"
            src={headerImg2}
            className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem]  xl:w-[15rem] xl:h-[15rem] rounded-xl  absolute bottom-5 left-5 lg:bottom-0 lg:-left-10 "
          />
          <Image
            alt="Loggy - your place to build your influence"
            src={headerImg3}
            className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem]  xl:w-[15rem] xl:h-[15rem] rounded-xl absolute right-10 lg:-right-5  top-0 lg:-top-5 "
          />
          <Image
            alt="Loggy - your place to build your influence"
            src={headerImg4}
            className="w-[9rem] h-[12rem] lg:w-[12rem] lg:h-[15rem] xl:w-[18rem]  xl:h-auto rounded-xl absolute  left-1/2 bottom-0 lg:left-32 xl:left-[50%]"
          />
        </div>
      </div>
      {/* Background image */}
      <div className="w-full h-full">
        <Image alt="Header image" src={headerImg} className="h-full w-full" />
      </div>
    </section>
  );
}

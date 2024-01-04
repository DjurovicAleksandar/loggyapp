import Image from "next/image";
import headerImg from "@/assets/images/home/headerImg.jpg";
import header1 from "@/assets/images/home/header1.jpg";
import Button from "@/components/general/Button";

export default function HomeHeader() {
  return (
    <section className="w-full h-[160vh] lg:h-screen relative ">
      {/* Layer */}
      <div className="absolute inset-0 w-full h-full px-padXMobile md:px-padX py-[40%] md:flex items-center gap-10">
        {/* Text */}
        <div>
          <h1 className="text-5xl md:text-8xl">
            Upgrade your
            <br /> <span className="text-primary font-bold">
              Tech Stack
            </span>{" "}
            with <span className="font-sedmibold text-primary">us</span>!
          </h1>
          <p className="w-full md:w-1/2 mt-4 ">
            Revamp Your Digital Presence with Expert UX/UI Design, Web
            Development, Headless E-commerce, and Platforms like WordPress,
            Webflow, Shopify, Next.js, and React.
          </p>
          <div className="mt-8 flex gap-8">
            <Button text="Get in touch" />
            <Button text="About us" textColor="#ea7210" bgColor="transparent" />
          </div>
        </div>
        {/* Images */}
        <div className="flex flex-wrap items-end mt-20 md:mt-0">
          <Image
            alt="Header 1"
            src={header1}
            className="w-[10rem]  md:w-[20rem] md:h-auto rounded-xl"
          />
          <Image
            alt="Header 1"
            src={header1}
            className="w-[8rem] h-[8rem] translate-x-10 -translate-y-32 md:w-[15rem] md:h-[15rem] rounded-xl  md:translate-x-20"
          />
          <Image
            alt="Header 1"
            src={header1}
            className="w-[8rem] h-[8rem]  -translate-y-10   md:w-[15rem] md:h-[15rem] rounded-xl md:-translate-x-20 md:-translate-y-40"
          />
          <Image
            alt="Header 1"
            src={header1}
            className="w-[12rem] h-[15rem]  md:w-[20rem] -translate-y-20 translate-x-5 lg:translate-x-0  md:h-auto rounded-xl  md:-translate-y-40"
          />
        </div>{" "}
      </div>
      {/* Background image */}
      <div className="w-full h-full">
        <Image alt="Header image" src={headerImg} className="h-full w-full" />
      </div>
    </section>
  );
}

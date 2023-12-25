import Image from "next/image";
import { Inter } from "next/font/google";

import headerImg from "@/assets/images/home/headerImg.jpg";
import header1 from "@/assets/images/home/header1.jpg";
import Button from "@/components/general/Button";
import ServiceMarquee from "@/components/home/ServiceMarquee";
import SectionLayout from "@/components/general/SectionLayout";
import HomeServiceSection from "@/components/home/HomeServiceSection";
import laptopSection from "@/assets/images/home/laptopSection.png";
import HomeBlogSection from "@/components/home/HomeBlogSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} w-full `}>
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
            <p className="w-full md:w-1/2 mt-4">
              Revamp Your Digital Presence with Expert UX/UI Design, Web
              Development, Headless E-commerce, and Platforms like WordPress,
              Webflow, Shopify, Next.js, and React.
            </p>
            <div className="mt-8 flex gap-8">
              <Button text="Get in touch" />
              <Button
                text="About us"
                textColor="#ea7210"
                bgColor="transparent"
              />
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
          </div>
        </div>
        {/* Background image */}
        <div className="w-full h-full">
          <Image alt="Header image" src={headerImg} className="h-full w-full" />
        </div>
      </section>{" "}
      <section className="w-full  py-padYMobile px-padXMobile  md:my-40">
        <h3 className="md:px-padX text-center mb-40 font-semibold md:text-5xl">
          Our arsenal of cutting-edge technologies powers
          <span className="text-primary"> Loggy&apos;s solutions</span>, setting
          the pace for innovation.
        </h3>
        <ServiceMarquee />
      </section>
      <SectionLayout>
        <h2 className="font-semibold text-center text-4xl md:text-6xl">
          We&apos;ll craft{" "}
          <span className="text-primary font-semibold underline">
            the solution
          </span>{" "}
          to elevate
          <br /> your digital presence
        </h2>
        <p className="mt-10 text-center text-xl md:w-1/2 md:mx-auto mb-40">
          We excel in crafting game-changing digital solutions. Whether its
          pioneering web development or pioneering app design, our focus is
          driving your brand towards success.
        </p>
      </SectionLayout>
      <HomeServiceSection />
      <SectionLayout className="bg-gray-200">
        <h2 className="text-center text-3xl md:text-5xl mt-10 font-semibold uppercase">
          Craft with the planet&apos;s foremost software developers, utilizing
          cutting-edge hardware, sensors, and cloud platforms.
        </h2>
        <p className="text-center font-light my-10">
          Engineered by industry-leading software developers, our offerings span
          comprehensive services including Product Roadmapping for strategic
          planning, Website Development for tailored online presence, Headless
          eCommerce solutions for flexible storefronts, Application Development
          across platforms, expert UI/UX Design for engaging interfaces, and
          Support & Maintenance for continuous operational excellence.
        </p>
        <Image alt="Laptop" src={laptopSection} className="mx-auto w-[50rem]" />
      </SectionLayout>
      <HomeBlogSection />
      <section className="w-full  h-[80vh]  bg-primary rounded-t-[2rem] lg:rounded-t-[5rem] flex flex-col justify-center items-center">
        <h4 className="text-white text-3xl lg:text-6xl font-thin text-center mb-4">
          LET US FIX YOUR ONLINE PRESENCE
        </h4>
        <a href="#" className="text-white text-2xl lg:text-8xl font-semibold ">
          CONTANCT US
        </a>
      </section>
    </main>
  );
}

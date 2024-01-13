import React from "react";
import ImageDes from "@/assets/images/home/header1.jpg";
import Image from "next/image";

const HeadlessProcess = () => {
  return (
    <div className="w-full bg-bgColor">
      <div className="flex flex-col items-center w-[90%] md:w-[80%] mx-auto">
        <div className="w-full flex flex-col items-center gap-y-10 mb-20">
          <h1 className="text-5xl w-full md:w-[70%] font-extrabold text-center">
            Our{" "}
            <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent">
              Headless eCommerce
            </span>{" "}
            process
          </h1>
          <p className="md:w-[60%] w-full text-center">
            Employing our reliable and well-organized methodology, we
            consistently achieve success in every project we undertake.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between md:px-[80px] pb-10">
          <div className="hidden md:flex p-6">
            <Image className="rounded-xl" src={ImageDes} alt="image" />
          </div>
          <div className="flex flex-col items-center md:items-start justify-start gap-y-4 p-6">
            <h3 className="md:text-4xl text-3xl font-bold text-primary">
              Roadmapping
            </h3>
            <p className="text-center text-lg md:text-left w-full md:w-[25rem]">
              Navigating the roadmap for your website success is a meticulous
              process. Before diving into the development journey, we invest
              time in comprehending your business objectives and the rationale
              behind your website venture.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between md:px-[80px] pb-10">
          <div className="flex flex-col items-center md:items-end justify-end gap-y-4 p-6">
            <h3 className="md:text-4xl text-3xl font-bold text-primary text-right">
              Design
            </h3>
            <p className="text-center text-lg md:text-right w-full md:w-[25rem]">
              Within the design stage, we strategically organize your site by
              collectively shaping wireframes. This collaborative process is
              pivotal in guaranteeing that your objectives remain at the
              forefront of our design decisions.
            </p>
          </div>
          <div className="hidden md:flex p-6">
            <Image className="rounded-xl" src={ImageDes} alt="image" />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between md:px-[80px] pb-10">
          <div className="hidden md:flex p-6">
            <Image className="rounded-xl" src={ImageDes} alt="image" />
          </div>
          <div className="flex flex-col items-center md:items-start justify-start gap-y-4 p-6">
            <h3 className="md:text-4xl text-3xl font-bold text-primary">
              Development
            </h3>
            <p className="text-center text-lg md:text-left w-full md:w-[25rem]">
              The development stage breathes life into your website. Our
              development team transforms the design into a modular system,
              empowering your team to effortlessly implement content and styling
              modifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadlessProcess;

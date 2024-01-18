import React from "react";
import ImageDes from "@/assets/images/home/header1.jpg";
import Image from "next/image";

const OurProcess = () => {
  return (
    <div className="w-full pt-[200px] bg-bgColor">
      <div className="flex flex-col items-center w-[90%] md:w-[80%] mx-auto">
        <div className="w-full flex flex-col items-center gap-y-10 mb-20">
          <h1 className="text-5xl w-full font-extrabold text-center">
            What is{" "}
            <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent">
              Our Design
            </span>{" "}
            process?
          </h1>
          <p className="md:w-[70%] w-full text-center">
            The process of designing can vary depending on the specific field or
            type of design, but a general design process often involves the
            following stages
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between pb-10">
          <div className="hidden md:flex p-6">
            <Image className="rounded-xl" src={ImageDes} alt="image" />
          </div>
          <div className="flex flex-col items-center md:items-start justify-start gap-y-4 p-6">
            <h3 className="text-4xl text-center md:text-left font-bold text-primary">
              Sketching / Wireframing
            </h3>
            <p className="text-center text-lg md:text-left w-full md:w-[25rem]">
              Involves creating rough visual drafts to conceptualize initial
              design ideas, focusing on layout, structure, and essential
              elements before moving on to more detailed stages.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between pb-10">
          <div className="flex flex-col items-center md:items-end justify-end gap-y-4 p-6">
            <h3 className="text-4xl text-center md:text-right font-bold text-primary ">
              Design Development
            </h3>
            <p className="text-center text-lg md:text-right w-full md:w-[25rem]">
              Design Development is the stage where the chosen concept is
              refined, and detailed elements such as color schemes, typography,
              and imagery are developed to enhance the overall design. This
              phase focuses on bringing the initial idea to a more polished and
              visually cohesive state.
            </p>
          </div>
          <div className="hidden md:flex p-6">
            <Image className="rounded-xl" src={ImageDes} alt="image" />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between pb-10">
          <div className="hidden md:flex p-6">
            <Image className="rounded-xl" src={ImageDes} alt="image" />
          </div>
          <div className="flex flex-col items-center md:items-start justify-start gap-y-4 p-6">
            <h3 className="text-4xl text-center md:text-left font-bold text-primary">
              Finalization
            </h3>
            <p className="text-center text-lg md:text-left w-full md:w-[25rem]">
              Finalization involves making last adjustments based on testing and
              feedback, preparing the design for implementation, be it coding,
              manufacturing, or production.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between pb-10">
          <div className="flex flex-col items-center md:items-end justify-end gap-y-4 p-6">
            <h3 className="text-4xl font-bold text-center md:text-right text-primary ">
              Launching
            </h3>
            <p className="text-center text-lg md:text-right w-full md:w-[25rem]">
              Stage where the final product, whether a website, product, or any
              designed entity, is released. Designers monitor the initial
              response and promptly address any unforeseen issues to ensure a
              smooth introduction to the audience or users.
            </p>
          </div>
          <div className="hidden md:flex p-6">
            <Image className="rounded-xl" src={ImageDes} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;

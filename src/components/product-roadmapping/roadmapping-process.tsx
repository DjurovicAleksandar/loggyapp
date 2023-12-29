import React from "react";
import ImageDes from "@/assets/images/home/header1.jpg";
import Image from "next/image";

const RoadmapProcess = () => {
  return (
    <div className="w-full pb-[200px] bg-bgColor">
      <div className="flex flex-col items-center w-[90%] md:w-[80%] mx-auto">
        <div className="w-full flex flex-col items-center gap-y-10 mb-10">
          <h1 className="text-5xl w-full md:w-[40%] font-extrabold text-center">
            How does Product Roadmapping work?
          </h1>
          <p className="md:w-[50%] w-full text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            delectus recusandae nam voluptatem aut accusantium officiis sit
            dicta reiciendis a fuga.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between md:px-[100px] pb-10">
          <div className="hidden md:flex p-10">
            <Image className="rounded-xl" src={ImageDes} alt="image" />
          </div>
          <div className="flex flex-col items-center md:items-end justify-end gap-y-4 ">
            <h3 className="text-5xl font-bold text-primary text-right">
              Roadmapping
            </h3>
            <p className="text-center text-lg md:text-right w-full md:w-1/2">
              The process always starts with a product roadmap. It’s the
              blueprint that defines everything that should go into the design
              for it to be a huge success.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between md:px-[100px] pb-10">
          <div className="flex flex-col items-center md:items-start justify-start gap-y-4 ">
            <h3 className="text-5xl font-bold text-primary text-left">
              Roadmapping
            </h3>
            <p className="text-center text-lg md:text-left w-full md:w-1/2">
              The process always starts with a product roadmap. It’s the
              blueprint that defines everything that should go into the design
              for it to be a huge success.
            </p>
          </div>
          <div className="hidden md:flex p-10">
            <Image className="rounded-xl" src={ImageDes} alt="image" />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between md:px-[100px] pb-10">
          <div className="hidden md:flex p-10">
            <Image className="rounded-xl" src={ImageDes} alt="image" />
          </div>
          <div className="flex flex-col items-center md:items-end justify-end gap-y-4 ">
            <h3 className="text-5xl font-bold text-primary text-right">
              Roadmapping
            </h3>
            <p className="text-center text-lg md:text-right w-full md:w-1/2">
              The process always starts with a product roadmap. It’s the
              blueprint that defines everything that should go into the design
              for it to be a huge success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapProcess;

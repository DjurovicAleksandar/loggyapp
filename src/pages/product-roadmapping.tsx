import Button from "@/components/general/Button";
import Image from "next/image";
import React from "react";
import headerImg from "@/assets/smiling-athletic-man-black-background.png";
import RoadmapProcess from "@/components/product-roadmapping/roadmapping-process";
import RoadmapBusiness from "@/components/product-roadmapping/roadmapping-betterway";
import RoadmapAccordion from "@/components/product-roadmapping/roadmapping-accordion";

const ProductRoadmapping = () => {
  return (
    <div className="w-full bg-bgColor">
      <div className="md:w-[80%] w-[90%] pt-[40%] md:pt-[20%] pb-[10%] flex flex-col items-center mx-auto">
        <div className="flex w-full items-center justify-center">
          <h1 className="md:text-6xl text-5xl text-center font-extrabold">
            Product Roadmapping
          </h1>
        </div>
        <div className=" my-14 w-full md:w-[55%]">
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, reiciendis quasi? Architecto necessitatibus
          </p>
        </div>
        <div className="mb-20">
          <Button text="Get your Roadmap" />
        </div>
        <div className="w-[80%] mb-20">
          <Image className="rounded-lg" src={headerImg} alt="img" />
        </div>
      </div>
      <RoadmapProcess />
      <RoadmapBusiness />
      <RoadmapAccordion />
    </div>
  );
};

export default ProductRoadmapping;

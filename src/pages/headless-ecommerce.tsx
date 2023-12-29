import Button from "@/components/general/Button";
import Image from "next/image";
import React from "react";
import headerImg from "@/assets/smiling-athletic-man-black-background.png";
import HeadlessExpertise from "@/components/headless-ecommerce/headless-expertise";
import HeadlessTechs from "@/components/headless-ecommerce/headless-technologies";
import HeadlessProcess from "@/components/headless-ecommerce/ecommerce-process";
import HeadlessAccordion from "@/components/headless-ecommerce/ecommerce-accordion";

const HeadlesseCommerce = () => {
  return (
    <div className="w-full bg-bgColor">
      <div className="md:w-[80%] w-[90%] pt-[40%] md:pt-[20%] pb-[10%] flex flex-col items-center mx-auto">
        <div className="flex w-full items-center justify-center">
          <h1 className="md:text-6xl text-5xl text-center font-extrabold">
            Headless eCommerce
          </h1>
        </div>
        <div className=" my-14 w-full md:w-[55%]">
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, reiciendis quasi? Architecto necessitatibus
          </p>
        </div>
        <div className="mb-20">
          <Button text="Get in touch" />
        </div>
        <div className="w-[80%] mb-20">
          <Image className="rounded-lg" src={headerImg} alt="img" />
        </div>
      </div>
      <HeadlessExpertise />
      <HeadlessTechs />
      <HeadlessProcess />
      <HeadlessAccordion />
    </div>
  );
};

export default HeadlesseCommerce;

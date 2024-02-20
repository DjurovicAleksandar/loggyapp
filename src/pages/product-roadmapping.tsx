import Button from "@/components/general/Button";
import Image from "next/image";
import React from "react";
import headerImg from "@/assets/smiling-athletic-man-black-background.png";
import RoadmapProcess from "@/components/product-roadmapping/roadmapping-process";
import RoadmapBusiness from "@/components/product-roadmapping/roadmapping-betterway";
import RoadmapAccordion from "@/components/product-roadmapping/roadmapping-accordion";
import Head from "next/head";

const ProductRoadmapping = () => {
  return (
    <>
      <Head>
        <title>Loggy - Product Roadmapping Services</title>
        <meta
          name="description"
          content="Loggy, a creative web development agency, specializes in product roadmapping, providing strategic planning and guidance for the development and enhancement of digital products."
        />
        <meta
          name="keywords"
          content="loggy, product roadmapping, web development, creative agency, support and maintenance, UX design, UI design, online presence, innovation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Loggy - Product Roadmapping Services"
        />
        <meta
          property="og:description"
          content="Loggy, a creative web development agency, specializes in product roadmapping, providing strategic planning and guidance for the development and enhancement of digital products."
        />
        <meta property="og:image" content="/socialImg" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="w-full bg-bgColor">
        <div className="md:w-[80%] w-[90%] pt-[40%] md:pt-[20%] pb-[10%] flex flex-col items-center mx-auto">
          <div className="flex w-full items-center justify-center">
            <h1 className="md:text-6xl text-5xl text-center font-extrabold">
              Product Roadmapping
            </h1>
          </div>
          <div className=" my-14 w-full md:w-[55%]">
            <p className="text-center">
              Our approach to product roadmapping is rooted in collaboration,
              ensuring that your vision aligns seamlessly with the
              practicalities of implementation.
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
    </>
  );
};

export default ProductRoadmapping;

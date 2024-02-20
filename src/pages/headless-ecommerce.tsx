import Button from "@/components/general/Button";
import Image from "next/image";
import React from "react";
import headerImg from "@/assets/smiling-athletic-man-black-background.png";
import HeadlessExpertise from "@/components/headless-ecommerce/headless-expertise";
import HeadlessTechs from "@/components/headless-ecommerce/headless-technologies";
import HeadlessProcess from "@/components/headless-ecommerce/ecommerce-process";
import HeadlessAccordion from "@/components/headless-ecommerce/ecommerce-accordion";
import Head from "next/head";

const HeadlesseCommerce = () => {
  return (
    <>
      <Head>
        <title>Loggy - Headless Ecommerce Solutions</title>
        <meta
          name="description"
          content="Explore Loggy, the creative web development agency, and delve into our portfolio showcasing expertise in headless ecommerce solutions. We provide strategic planning and guidance for the development and enhancement of digital products."
        />
        <meta
          name="keywords"
          content="loggy, headless ecommerce, creative agency, web development, portfolio, product roadmapping, support and maintenance, UX design, UI design, online presence, innovation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Loggy - Headless Ecommerce Solutions"
        />
        <meta
          property="og:description"
          content="Explore Loggy, the creative web development agency, and delve into our portfolio showcasing expertise in headless ecommerce solutions. We provide strategic planning and guidance for the development and enhancement of digital products."
        />
        <meta property="og:image" content="/socialImg" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="w-full bg-bgColor">
        <div className="md:w-[80%] w-[90%] pt-[40%] md:pt-[20%] pb-[10%] flex flex-col items-center mx-auto">
          <div className="flex w-full items-center justify-center">
            <h1 className="md:text-6xl text-5xl text-center font-extrabold">
              Headless eCommerce
            </h1>
          </div>
          <div className=" my-14 w-full md:w-[55%]">
            <p className="text-center">
              Unleash unparalleled flexibility, seamless integrations, and rapid
              innovation for your online presence.
            </p>
          </div>
          <div className="mb-20">
            <Button text="Go Headless" />
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
    </>
  );
};

export default HeadlesseCommerce;

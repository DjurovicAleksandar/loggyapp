import React from "react";
import { Services } from "./web-development";
import headerImg from "@/assets/smiling-athletic-man-black-background.png";
import Image from "next/image";
import Button from "@/components/general/Button";
import AppExpertise from "@/components/app-development/app-expertise";
import AppTechnologies from "@/components/app-development/app-techologies";
import AppProcess from "@/components/app-development/app-process";
import AppPortfolios from "@/components/app-development/app-portfolio";
import Head from "next/head";

const service: Services[] = [
  {
    id: 1,
    heading: "Application Development",
    paragraph:
      "Application development offers customized solutions for building and maintaining applications, encompassing design, bespoke development, e-commerce functionalities, SEO optimization, and continuous support.",
    headingImg: headerImg,
  },
];

const AppDevelopment = () => {
  return (
    <>
      <Head>
        <title>Loggy - Application Development</title>
        <meta
          name="description"
          content="Connect with Loggy, the creative web development agency, and explore our portfolio showcasing expertise in application development. We provide strategic planning and guidance for the development and enhancement of digital products."
        />
        <meta
          name="keywords"
          content="loggy, application development, creative agency, web development, portfolio, strategic planning, guidance, digital products"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Loggy - Application Development" />
        <meta
          property="og:description"
          content="Connect with Loggy, the creative web development agency, and explore our portfolio showcasing expertise in application development. We provide strategic planning and guidance for the development and enhancement of digital products."
        />
        <meta property="og:image" content="/socialImg" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="w-full bg-bgColor">
        {service.map((item) => (
          <div
            key={item.id}
            className="w-[80%] pt-[40%] md:pt-[20%] pb-[10%] flex flex-col items-center mx-auto"
          >
            <div className="flex w-full  items-center justify-center">
              <h1 className="md:text-6xl text-5xl text-center font-extrabold">
                {item.heading}
              </h1>
            </div>
            <div className=" my-14 w-full md:w-[70%]">
              <p className="text-center">{item.paragraph}</p>
            </div>
            <div className="mb-20">
              <Button text="Contact Us" />
            </div>
            <div className="w-[80%] mb-20">
              <Image className="rounded-lg" src={item.headingImg} alt="img" />
            </div>
          </div>
        ))}
        <AppExpertise />
        <AppTechnologies />
        <AppProcess />
        <AppPortfolios />
      </div>
    </>
  );
};

export default AppDevelopment;

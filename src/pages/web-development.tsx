import { StaticImageData } from "next/image";
import React, { Key } from "react";
import headerImg from "@/assets/smiling-athletic-man-black-background.png";
import Button from "@/components/general/Button";
import Image from "next/image";
import Expertise from "@/components/web-development/expertise";
import Technologies from "@/components/web-development/technologies";
import Process from "@/components/web-development/process";
import AccordionWeb from "@/components/web-development/accordionWeb";
import Portfolios from "@/components/web-development/portfolios";
import Head from "next/head";

import web from "@/assets/images/services/web.jpg";

export type Services = {
  id: Key;
  heading: string;
  paragraph: string;
  headingImg: StaticImageData;
};

const service: Services[] = [
  {
    id: 1,
    heading: "Web Development",
    paragraph:
      "Web development provides tailored solutions for websites and applications, including design, custom development, e-commerce, SEO, and ongoing support.",
    headingImg: web,
  },
];

const WebDevelopment = () => {
  return (
    <>
      <Head>
        <title>Loggy - Creative Web Development Agency</title>
        <meta
          name="description"
          content="Loggy, a creative web development agency, excels in building new web spaces for everyone, combining innovation and design to connect people online."
        />
        <meta
          name="keywords"
          content="loggy, web development, creative agency, online presence, innovation, design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Loggy - Creative Web Development Agency"
        />
        <meta
          property="og:description"
          content="Loggy, a creative web development agency, excels in building new web spaces for everyone, combining innovation and design to connect people online."
        />
        <meta property="og:image" content="/socialImg" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="w-full bg-bgColor">
        {service.map((item) => (
          <div
            key={item.id}
            className="w-[90%] md:w-[80%] pt-[40%] md:pt-[20%] pb-[10%] flex flex-col items-center mx-auto"
          >
            <div className="flex w-full items-center justify-center">
              <h1 className="md:text-6xl text-5xl text-center font-extrabold">
                {item.heading}
              </h1>
            </div>
            <div className=" my-14 w-full md:w-[55%]">
              <p className="text-center">{item.paragraph}</p>
            </div>
            <div className="mb-20">
              <Button text="Contact Us" />
            </div>
            <div className="w-[80%] mb-20">
              <Image
                className="rounded-lg"
                src={item.headingImg}
                alt={`Loggy - ${item.heading}`}
              />
            </div>
          </div>
        ))}
        <Expertise />
        <Technologies />
        <Process />
        <Portfolios />
        <AccordionWeb />
      </div>
    </>
  );
};

export default WebDevelopment;

import React from "react";
import { Services } from "./web-development";
import headerImg from "@/assets/smiling-athletic-man-black-background.png";
import Image from "next/image";
import Button from "@/components/general/Button";
import AppExpertise from "@/components/app-development/app-expertise";
import AppTechnologies from "@/components/app-development/app-techologies";
import AppProcess from "@/components/app-development/app-process";
import AppPortfolios from "@/components/app-development/app-portfolio";
import AppAccordion from "@/components/app-development/app-accordion";

const service: Services[] = [
  {
    id: 1,
    heading: "Application Development",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta maiores commodi blanditiis illum cumque corporis eveniet nam ipsum iusto, exercitationem quasi minima expedita nemo beatae ver",
    headingImg: headerImg,
  },
];

const AppDevelopment = () => {
  return (
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
          <div className=" my-14 w-full md:w-[55%]">
            <p className="text-center">{item.paragraph}</p>
          </div>
          <div className="mb-20">
            <Button text="Get in touch" />
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
      <AppAccordion />
    </div>
  );
};

export default AppDevelopment;

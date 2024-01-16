import React from "react";
import Image from "next/image";
import Button from "@/components/general/Button";
import { Services } from "./web-development";
import headerImg from "@/assets/smiling-athletic-man-black-background.png";
import Creativity from "@/components/design/creativity";
import OurJob from "@/components/design/ourJob";
import DesignPortfolios from "@/components/design/portfolios-design";
import OurProcess from "@/components/design/ourProcess";

const service: Services[] = [
  {
    id: 1,
    heading: "UI|UX Design",
    paragraph:
      "Art of creating visually appealing and user-friendly digital experiences that enhance satisfaction and usability for your audience.",
    headingImg: headerImg,
  },
];

const UiUxDesign = () => {
  return (
    <div className="w-full bg-bgColor">
      {service.map((item) => (
        <div
          key={item.id}
          className="md:w-[80%] w-[90%] pt-[40%] md:pt-[20%] pb-[10%] flex flex-col items-center mx-auto"
        >
          <div className="flex w-full items-center justify-center">
            <h1 className="text-6xl text-center font-extrabold">
              {item.heading}
            </h1>
          </div>
          <div className=" my-14 w-full md:w-[55%]">
            <p className="text-center">{item.paragraph}</p>
          </div>
          <div className="mb-20">
            <Button text="Contact us" />
          </div>
          <div className="w-[80%] mb-20">
            <Image className="rounded-lg" src={item.headingImg} alt="img" />
          </div>
        </div>
      ))}
      <Creativity />
      <OurJob />
      <OurProcess />
      <DesignPortfolios />
    </div>
  );
};

export default UiUxDesign;

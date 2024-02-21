import { StaticImageData } from "next/image";

import { type FC } from "react";
import HomeServiceConImage from "./HomeServiceConImage";
import Link from "next/link";

interface HomeServiceConProps {
  serviceName: string;
  serviceDescription: string;
  serviceHref: string;
  project1Img: StaticImageData;
  project2Img: StaticImageData;
  project1Href: string;
  project2Href: string;
  direction?: string;
}

const HomeServiceCon: FC<HomeServiceConProps> = ({
  serviceName,
  serviceDescription,
  serviceHref,
  project1Img,
  project2Img,
  project1Href,
  project2Href,
  direction = "left",
}) => {
  return (
    <div
      className={`xl:flex   ${
        direction === "right" && "flex-row-reverse bg-gray-50 py-28"
      } items-center justify-between  mb-10 md:mb-[10rem] px-padXMobile lg:px-padX`}
    >
      <div
        className={`w-full flex flex-col ${
          direction === "left"
            ? "items-start text-left"
            : "items-end text-right"
        }`}
      >
        <h2 className="font-bold text-5xl md:text-7xl mb-10">{serviceName}</h2>
        <p className="w-full md:w-4/5 md:mb-0 md:text-lg ">
          {serviceDescription}
        </p>
        <Link
          href={serviceHref}
          className="block my-4 md:my-0 md:mt-10 text-primary font-semibold hover:scale-105 duration-300"
        >
          Check service <span className="text-2xl ">&#8605;</span>
        </Link>
      </div>

      <div className="md:flex items-center w-full gap-5">
        <HomeServiceConImage
          translate={direction === "left" && true}
          projectHref={project1Href}
          projectImg={project1Img}
        />
        <HomeServiceConImage
          translate={direction === "right" && true}
          projectHref={project2Href}
          projectImg={project2Img}
        />
      </div>
    </div>
  );
};

export default HomeServiceCon;

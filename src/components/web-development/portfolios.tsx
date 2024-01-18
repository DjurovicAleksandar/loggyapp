import React, { Key } from "react";
import Image, { StaticImageData } from "next/image";
import PortfolioImg from "@/assets/images/home/header1.jpg";
import Link from "next/link";

export type CaseStudies = {
  id: Key;
  title: string;
  description: string;
  direction: string;
  portfolioImages: StaticImageData;
};

const portfolio: CaseStudies[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ea debitis fuga.",
    direction: "/",
    portfolioImages: PortfolioImg,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ea debitis fuga.",
    direction: "/",
    portfolioImages: PortfolioImg,
  },
];

const Portfolios = () => {
  return (
    <div className="w-full pt-[200px] bg-bgColor">
      <div className="flex flex-col w-[80%] items-center justify-center mx-auto">
        <div className="w-full flex flex-col items-center md:items-end justify-center md:justify-end md:px-16 my-8 gap-y-6">
          <h1 className="text-5xl font-extrabold text-center">
            Our{" "}
            <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent">
              Portfolios
            </span>
          </h1>
          <p className="md:w-[70%] w-full text-center md:text-right">
            We&apos;re excited to present a collection of our web development
            portfolios for your review and consideration.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-x-[150px] py-20 justify-between mx-auto">
          {portfolio.map((items) => (
            <div key={items.id} className="flex flex-col items-center">
              <Link href={items.direction}>
                <Image
                  className="rounded-xl"
                  src={items.portfolioImages}
                  alt="image"
                />
                <div className="w-full items-center justify-center">
                  <h4 className="text-center font-bold text-3xl py-4 text-primary">
                    {items.title}
                  </h4>
                  <p className="text-center pb-6">{items.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolios;

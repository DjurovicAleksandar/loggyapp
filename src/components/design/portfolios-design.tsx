import React from "react";
import Image from "next/image";
import { CaseStudies } from "../web-development/portfolios";
import PortfolioImg from "@/assets/images/home/header1.jpg";
import Link from "next/link";

const portfolio: CaseStudies[] = [
  {
    id: 1,
    title: "Design Portfolio",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ea debitis fuga.",
    direction: "/",
    portfolioImages: PortfolioImg,
  },
  {
    id: 2,
    title: "Design Portfolio",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ea debitis fuga.",
    direction: "/",
    portfolioImages: PortfolioImg,
  },
];

const DesignPortfolios = () => {
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
          <p className="w-full md:w-[70%] text-center md:text-right">
            We thrive on collaboration, partnering closely with our clients to
            form a dynamic team. Explore a showcase of remarkable
            accomplishments that highlight the impact of our collaborative
            efforts.
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

export default DesignPortfolios;

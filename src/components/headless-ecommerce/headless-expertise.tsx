import React from "react";
import { Expertise } from "../web-development/expertise";

const expertises: Expertise[] = [
  {
    id: 1,
    value: "Instant user engagement",
    description:
      "Capture attention with swift load times, ensuring a delightful customer experience.",
  },
  {
    id: 2,
    value: "Improved Performance",
    description:
      "Decoupling the presentation layer boosts performance by allowing independent optimizations and updates, ensuring a faster and more responsive user experience.",
  },
  {
    id: 3,
    value: "Swift content deployment",
    description: "Effortlessly publish an abundance of marketing content.",
  },
  {
    id: 4,
    value: "Accelerated development",
    description:
      "Boost development speed for rapid feature deployment and innovation.",
  },
];

const HeadlessExpertise = () => {
  return (
    <div className="w-full pb-[200px] bg-bgColor">
      <div className="flex flex-col md:flex-row items-start justify-between mx-auto w-[90%] md:w-[80%]">
        <div className="w-[60%] mx-auto flex items-center justify-center md:justify-start md:mr-5 my-8">
          <h1 className="text-5xl font-bold text-center md:text-left">
            Time to go{" "}
            <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent">
              headless
            </span>
            ?
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  md:mx-auto ">
          {expertises.map((exp) => (
            <div
              className="flex flex-col items-center my-8 mx-6 px-3 "
              key={exp.id}
            >
              <div className="px-5 mb-6">
                <h3 className="capitalize font-bold text-center md:text-left text-primary text-3xl">
                  {exp.value}
                </h3>
              </div>
              <div className="px-5 text-center md:text-left">
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeadlessExpertise;

import React from "react";
import { Expertise } from "../web-development/expertise";

const expertises: Expertise[] = [
  {
    id: 1,
    value: "Web Applications",
    description:
      "We specialise in turning wishlists into apps that perfectly fit how you do business.",
  },
  {
    id: 2,
    value: "Web Applications",
    description:
      "We specialise in turning wishlists into apps that perfectly fit how you do business.",
  },
  {
    id: 3,
    value: "Web Applications",
    description:
      "We specialise in turning wishlists into apps that perfectly fit how you do business.",
  },
  {
    id: 4,
    value: "Web Applications",
    description:
      "We specialise in turning wishlists into apps that perfectly fit how you do business.",
  },
];

const HeadlessExpertise = () => {
  return (
    <div className="w-full pb-[200px] bg-bgColor">
      <div className="flex flex-col md:flex-row items-start justify-between mx-auto w-[90%] md:w-[80%]">
        <div className="w-[60%] mx-auto flex items-center justify-center md:justify-start md:px-16 my-8">
          <h1 className="text-5xl font-extrabold text-center md:text-left">
            Time to go headless?
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-20 md:mx-auto ">
          {expertises.map((exp) => (
            <div
              className="flex flex-col items-center my-8 mx-6 px-3 py-16 rounded-lg shadow-md"
              key={exp.id}
            >
              <div className="px-5 mb-6">
                <h3 className="capitalize font-bold text-center text-primary text-3xl">
                  {exp.value}
                </h3>
              </div>
              <div className="px-10">
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

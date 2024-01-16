import React from "react";
import { Expertise } from "../web-development/expertise";

const creative: Expertise[] = [
  {
    id: 1,
    value: "UI Design",
    description:
      "Focus is on crafting visually appealing and intuitive interfaces, ensuring a seamless and engaging user experience in digital products.",
  },
  {
    id: 2,
    value: "UX Design",
    description:
      "We specialise in turning wishlists into apps that perfectly fit how you do business.",
  },
];

const Creativity = () => {
  return (
    <div className="w-full pb-[200px] bg-bgColor">
      <div className="flex flex-col-reverse md:flex-row items-start justify-between mx-auto w-[90%] md:w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-20 mx-auto ">
          {creative.map((item) => (
            <div
              className="flex flex-col items-center md:items-start my-8 px-3"
              key={item.id}
            >
              <div className="mb-6 text-center md:text-left">
                <h3 className="capitalize font-bold text-primary text-3xl">
                  {item.value}
                </h3>
              </div>
              <div className="text-center md:text-left">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[60%] flex items-center mx-auto justify-center md:justify-end md:ml-5 my-8">
          <h1 className="text-5xl font-bold text-center md:text-right">
            Our{" "}
            <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent">
              UI/UX
            </span>{" "}
            strategy{" "}
            <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent">
              creates
            </span>{" "}
            lasting customer{" "}
            <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent">
              connections
            </span>
            .
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Creativity;

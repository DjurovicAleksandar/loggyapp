import React from "react";
import { Expertise } from "../web-development/expertise";

const creative: Expertise[] = [
  {
    id: 1,
    value: "UI Design",
    description:
      "We specialise in turning wishlists into apps that perfectly fit how you do business.",
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
              className="flex flex-col items-center my-8 mx-6 px-3 py-16 rounded-lg shadow-md"
              key={item.id}
            >
              <div className="px-5 mb-6">
                <h3 className="capitalize font-bold text-primary text-3xl">
                  {item.value}
                </h3>
              </div>
              <div className="px-10">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[60%] flex items-center mx-auto justify-center md:justify-end px-16 my-8">
          <h1 className="text-5xl font-extrabold text-center md:text-right">
            Our UI/UX strategy creates lasting customer connections.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Creativity;

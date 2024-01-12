import Image, { StaticImageData } from "next/image";

import React, { Key } from "react";
import precision from "@/assets/images/flaticons/precision.png";
import flag from "@/assets/images/flaticons/mission.png";
import handshanke from "@/assets/images/flaticons/handshake.png";
import puzzle from "@/assets/images/flaticons/puzzle.png";

type Value = {
  id: Key;
  flaticon: StaticImageData;
  value: string;
  description: string;
};

const values: Value[] = [
  {
    id: 1,
    flaticon: precision,
    value: "Commitment to Precision",
    description:
      "We take pride in our commitment to precision. When we provide you with a timeline and cost estimate, rest assured that we not only meet but exceed your expectations, ensuring a seamless and satisfactory experience.",
  },
  {
    id: 2,
    flaticon: handshanke,
    value: "Reliability at Every Turn",
    description:
      "When we agree on project parameters, you can trust us to navigate the journey with precision, ensuring your project is delivered not just on time and within budget but with a touch of excellence",
  },
  {
    id: 3,
    flaticon: flag,
    value: "Surpassing Milestones",
    description:
      "At our core, we believe in surpassing milestones. When we commit to timelines and costs, it's not just a promise; it's a commitment to surpassing expectations at every turn, ensuring your project journey is nothing short of exceptional.",
  },
  {
    id: 4,
    flaticon: puzzle,
    value: "Crafting Success through Planning",
    description:
      "Preparation precedes success. Embracing Lincoln's insight, we adopt 'Plan 2 Action.' Every project is meticulously planned, as we believe that precision in preparation is the cornerstone of achieving optimal results.",
  },
];

const Values = () => {
  return (
    <div className="w-full pb-[200px]">
      <div className="flex flex-col items-center justify-center mx-auto w-[80%]">
        <div className="w-full flex items-center justify-center md:justify-end px-6 mb-20">
          <h1 className="text-5xl font-extrabold text-center">Our Values</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-20 w-full mx-auto">
          {values.map((val) => (
            <div
              className="flex flex-col items-center my-8 mx-6 px-3 py-16 rounded-lg shadow-md hover:scale-105 duration-300 ease-in-out"
              key={val.id}
            >
              <div className="flex w-full items-start px-10 pb-5">
                <Image
                  src={val.flaticon}
                  width={50}
                  height={50}
                  alt={val.value}
                />
              </div>
              <div className="px-10 mb-6">
                <h3 className="capitalize font-bold text-primary text-3xl">
                  {val.value}
                </h3>
              </div>
              <div className="px-10">
                <p>{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;

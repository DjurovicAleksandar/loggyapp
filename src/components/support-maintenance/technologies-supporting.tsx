import Image, { StaticImageData } from "next/image";
import React, { Key } from "react";
import cash from "@/assets/images/flaticons/cash.png";

export type Language = {
  id: Key;
  name: string;
  flaticon: StaticImageData;
  description: string;
};

export type Technologies = {
  id: Key;
  title: string;
  paragraph: string;
  language: Language[];
};

const techs: Technologies[] = [
  {
    id: 1,
    title: "We support",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta maiores commodi blanditiis",
    language: [
      {
        id: 2,
        flaticon: cash,
        name: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        id: 3,
        flaticon: cash,
        name: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        id: 4,
        flaticon: cash,
        name: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        id: 5,
        flaticon: cash,
        name: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
];

const TecnologiesSupporting = () => {
  return (
    <div className="w-full bg-bgColor">
      {techs.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center mx-auto w-[90%] md:w-[80%]"
        >
          <div className="flex flex-col items-center justify-center w-full mx-auto">
            <h2 className="text-5xl text-center font-extrabold">
              {item.title}
            </h2>
            <p className="md:w-[30%] w-full text-center pt-8">
              {item.paragraph}
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-around mx-auto mt-10 py-14">
            <div className="grid gap-20 md:grid-cols-2">
              {item.language.map((items) => (
                <div
                  key={items.id}
                  className="flex flex-col items-center rounded-xl shadow-lg"
                >
                  <h3 className="capitalize font-bold text-center text-primary text-3xl">
                    {items.name}
                  </h3>
                  <p className="w-1/2 py-10">{items.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TecnologiesSupporting;

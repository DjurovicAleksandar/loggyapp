import Image, { StaticImageData } from "next/image";
import React, { Key } from "react";
import react from "@/assets/images/flaticons/atom.png";
import nextjs from "@/assets/images/flaticons/next-js.png";
import shopify from "@/assets/images/flaticons/shopify-(1).png";
import graphql from "@/assets/images/flaticons/GraphQL_Logo.png";
import firebase from "@/assets/images/flaticons/database.png";
import apis from "@/assets/images/flaticons/api.png"

type Techs = {
  id: Key;
  name: string;
  flaticon: StaticImageData;
  description: string;
};

const techology: Techs[] = [
  {
    id: 1,
    name: "Next.js",
    flaticon: nextjs,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere inventore ipsam, cum cumque libero labore aliquam sit voluptates odit",
  },
  {
    id: 2,
    name: "Shopify",
    flaticon: shopify,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere inventore ipsam, cum cumque libero labore aliquam sit voluptates odit",
  },
  {
    id: 3,
    name: "React",
    flaticon: react,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere inventore ipsam, cum cumque libero labore aliquam sit voluptates odit",
  },
  {
    id: 4,
    name: "GraphQL",
    flaticon: graphql,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere inventore ipsam, cum cumque libero labore aliquam sit voluptates odit",
  },
  {
    id: 5,
    name: "Rest APIs",
    flaticon: apis,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere inventore ipsam, cum cumque libero labore aliquam sit voluptates odit",
  },
  {
    id: 6,
    name: "Firebase",
    flaticon: firebase,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere inventore ipsam, cum cumque libero labore aliquam sit voluptates odit",
  },
];

const HeadlessTechs = () => {
  return (
    <div className="w-full pb-[200px] bg-bgColor">
      <div className="flex flex-col items-start justify-center mx-auto w-[90%] md:w-[80%]">
        <div className="w-[60%] mx-auto flex items-center justify-center md:px-16 py-10">
          <h1 className="text-5xl font-extrabold text-center">
            <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent">
              Technologies
            </span>{" "}
            that we are{" "}
            <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent">
              using
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 md:mx-auto my-10 w-full md:w-[80%]">
          {techology.map((exp) => (
            <div
              className="flex flex-col items-center my-5 md:mx-6 px-3 py-10 rounded-lg shadow-md hover:scale-105 duration-300 ease-in-out"
              key={exp.id}
            >
              <Image src={exp.flaticon} width={40} alt="flaticon" />
              <div className="px-5 pt-5 mb-6">
                <h3 className="capitalize font-bold text-center text-primary text-3xl">
                  {exp.name}
                </h3>
              </div>
              <div className="px-5">
                <p className="text-center">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeadlessTechs;

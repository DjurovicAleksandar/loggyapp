import Image, { StaticImageData } from "next/image";
import React, { Key } from "react";
import react from "@/assets/images/flaticons/atom.png";
import nextjs from "@/assets/images/flaticons/next-js.png";
import shopify from "@/assets/images/flaticons/shopify-(1).png";
import graphql from "@/assets/images/flaticons/GraphQL_Logo.png";
import firebase from "@/assets/images/flaticons/database.png";
import apis from "@/assets/images/flaticons/api.png";

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
      "Next.js is React framework for fast, server-rendered web apps with automatic code splitting, a developer-friendly API, and seamless data integration.",
  },
  {
    id: 2,
    name: "Shopify",
    flaticon: shopify,
    description:
      "Shopify is e-commerce platform with streamlined development, automatic code splitting, and seamless data integration for high-performance online stores.",
  },
  {
    id: 3,
    name: "React",
    flaticon: react,
    description:
      "React is a popular JavaScript library for building dynamic user interfaces with a component-based, declarative approach. Streamlines UI development by efficiently updating components in response to data changes.",
  },
  {
    id: 4,
    name: "GraphQL",
    flaticon: graphql,
    description:
      "GraphQL as an efficient API query language for precise data retrieval, offering flexibility and optimization in client-server communication.",
  },
  {
    id: 5,
    name: "Rest APIs",
    flaticon: apis,
    description:
      "REST API: Standard architecture for simple, stateless interactions in web applications, utilizing HTTP methods for efficient data exchange between clients and servers.",
  },
  {
    id: 6,
    name: "Firebase",
    flaticon: firebase,
    description:
      "Firebase is a  Google's all-in-one platform for quick and scalable web and mobile app development.",
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
              <Image src={exp.flaticon} width={40} height={40} alt="flaticon" />
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

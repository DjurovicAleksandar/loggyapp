import Image, { StaticImageData } from "next/image";
import React, { Key } from "react";
import react from "@/assets/images/flaticons/atom.png";
import wordpress from "@/assets/images/flaticons/wordpress-logo.png";
import nodephp from "@/assets/images/flaticons/node-php-logo.png";
import mysql from "@/assets/images/flaticons/mysql-logo.png";

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
      "We have proficiency in supporting a diverse range of technologies, showcasing our capability to navigate and leverage a broad spectrum of tools and frameworks, ensuring adaptability and expertise across various technological landscapes.",
    language: [
      {
        id: 2,
        flaticon: react,
        name: "React",
        description:
          "React is a JavaScript library for building dynamic and interactive user interfaces, known for its efficiency in managing UI components and promoting a declarative development approach.",
      },
      {
        id: 3,
        flaticon: nodephp,
        name: "Node & PHP",
        description:
          "Node.js is a server-side JavaScript runtime, known for its event-driven, non-blocking I/O, while PHP is a versatile server-side scripting language often embedded in HTML for dynamic content generation.",
      },
      {
        id: 4,
        flaticon: mysql,
        name: "MySQL",
        description:
          "MySQL is an open-source relational database management system (RDBMS) that uses structured query language (SQL) for managing and manipulating databases",
      },
      {
        id: 5,
        flaticon: wordpress,
        name: "WordPress",
        description:
          "WordPress is a popular open-source CMS known for its user-friendly interface, extensive plugins, and versatility in powering various types of websites. ",
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
            <h2 className="text-5xl text-center font-extrabold bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent">
              {item.title}
            </h2>
            <p className="md:w-[70%] w-full text-center pt-8">
              {item.paragraph}
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-around mx-auto mt-10 py-14">
            <div className="grid gap-20 md:grid-cols-2">
              {item.language.map((items) => (
                <div
                  key={items.id}
                  className="flex flex-col items-center my-5 md:mx-6 px-3 py-10 rounded-lg shadow-md hover:scale-105 duration-300 ease-in-out"
                >
                  <Image
                    src={items.flaticon}
                    width={40}
                    height={40}
                    alt="flaticon"
                  />
                  <h3 className="capitalize font-bold text-center text-primary text-3xl px-5 pt-5">
                    {items.name}
                  </h3>
                  <p className="py-5 mb-8 text-center">{items.description}</p>
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

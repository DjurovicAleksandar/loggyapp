import React, { Key } from "react";

export type Expertise = {
  id: Key;
  value: string;
  description: string;
};

const expertises: Expertise[] = [
  {
    id: 1,
    value: "Web Architecture",
    description:
      "Web Architecture aims to create efficient frameworks for websites and applications, utilizing server deployment and cloud services for optimal performance.",
  },
  {
    id: 2,
    value: "Testing & Debugging",
    description:
      "Testing and Debugging guarantee web application reliability through strategic testing and efficient debugging.",
  },
  {
    id: 3,
    value: "Frontend Development",
    description:
      "Frontend development aims to design and implement user interfaces for websites and applications, ensuring a seamless and enjoyable user experience.",
  },
  {
    id: 4,
    value: "Backend Development",
    description:
      "Backend development powers the server-side of websites and applications, managing data, security, and system functionality to support the user interface created by frontend development.",
  },
];

const Expertise = () => {
  return (
    <div className="w-full pb-[200px] bg-bgColor">
      <div className="flex flex-col-reverse md:flex-row items-start justify-between mx-auto w-[90%] md:w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-20 md:mx-auto ">
          {expertises.map((exp) => (
            <div
              className="flex flex-col items-center my-8 mx-6 px-3"
              key={exp.id}
            >
              <div className="mb-6">
                <h3 className="capitalize font-bold text-center md:text-left text-primary text-3xl">
                  {exp.value}
                </h3>
              </div>
              <div className="text-center md:text-left">
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[60%] mx-auto flex items-center justify-center md:justify-end md:px-16 my-8">
          <h1 className="text-5xl font-extrabold text-center md:text-right">
            Our{" "}
            <span className="bg-gradient-to-bl from-gradientCol to-gradientCol2 bg-clip-text text-transparent">
              Expertise
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
